function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  }





  document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".carousel-slide");
    const dots = document.querySelectorAll(".dot");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
  
    let currentIndex = 0;
    let autoplayInterval;
  
    // Update the carousel to show the active slide
    function updateCarousel() {
      const carouselContainer = document.querySelector(".carousel-container");
      carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  
      dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
      });
    }
  
    // Move to the next slide
    function goToNextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      updateCarousel();
    }
  
    // Move to the previous slide
    function goToPrevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateCarousel();
    }
  
    // Start autoplay
    function startAutoplay() {
      autoplayInterval = setInterval(goToNextSlide, 3000); // Change slide every 5 seconds
    }
  
    // Stop autoplay
    function stopAutoplay() {
      clearInterval(autoplayInterval);
    }
  
    // Event listeners for navigation
    nextBtn.addEventListener("click", () => {
      stopAutoplay(); // Pause autoplay when manually navigating
      goToNextSlide();
      startAutoplay(); // Resume autoplay
    });
  
    prevBtn.addEventListener("click", () => {
      stopAutoplay();
      goToPrevSlide();
      startAutoplay();
    });
  
    // Event listeners for dots
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        stopAutoplay();
        currentIndex = index;
        updateCarousel();
        startAutoplay();
      });
    });
  
    // Initialize carousel
    updateCarousel();
    startAutoplay();
  });
  