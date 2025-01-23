function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  }





  document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let currentSlideIndex = 0;
  
    const moveToSlide = (index) => {
      const slideWidth = slides[0].getBoundingClientRect().width;
      track.style.transform = `translateX(-${index * slideWidth}px)`;
      currentSlideIndex = index;
    };
  
    const goToNextSlide = () => {
      const nextIndex = (currentSlideIndex + 1) % slides.length;
      moveToSlide(nextIndex);
    };
  
    const goToPrevSlide = () => {
      const prevIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
      moveToSlide(prevIndex);
    };
  
    prevButton.addEventListener('click', goToPrevSlide);
    nextButton.addEventListener('click', goToNextSlide);
  
    // Auto-play functionality
    setInterval(goToNextSlide, 6000); // Change slide every 3 seconds
  });
  