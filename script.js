function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  }



  // script.js

// Exempel på dynamisk produktdata
const product = {
  name: "Straps",
  image: "Bilder/nedladdning (1).jpg",
  price: "199 kr",
  description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, quasi. Nulla adipisci ipsum sint cumque ea dolorem, dolore eius voluptatem quia?"
};

// Funktion för att ladda produktinformation
function loadProductDetails(product) {
  document.getElementById("product-name").textContent = product.name;
  document.getElementById("product-image").src = product.image;
  document.getElementById("product-image").alt = product.name;
  document.getElementById("product-price").textContent = `Pris: ${product.price}`;
  document.getElementById("product-description").textContent = product.description;
}

// Lägg till i varukorg-funktion
document.getElementById("add-to-cart-btn").addEventListener("click", () => {
  alert(`${product.name} har lagts till i din varukorg!`);
});

// Ladda produkten vid sidans start
window.onload = () => {
  loadProductDetails(product);
};
