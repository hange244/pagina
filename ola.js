document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const navLinks = document.querySelector(".nav-links");
    const body = document.body;

    // Función para alternar el menú
    function toggleMenu() {
        hamburgerMenu.classList.toggle("active");
        navLinks.classList.toggle("active");
        body.classList.toggle("no-scroll"); // Evita que la página se mueva detrás
    }

    // Abrir/Cerrar el menú al hacer clic en el botón
    hamburgerMenu.addEventListener("click", function(event) {
        event.stopPropagation(); // Evita que el clic se propague al documento
        toggleMenu();
    });

    // Cerrar el menú si se hace clic en un enlace (para navegar a la sección)
    navLinks.addEventListener("click", function() {
        if (navLinks.classList.contains("active")) {
            toggleMenu();
        }
    });
// Pega esto AL FINAL de tu archivo script.js existente

// --- Animación de Scroll ---
const sectionsToAnimate = document.querySelectorAll('.product-section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1 // La animación se dispara cuando el 10% del elemento es visible
});

sectionsToAnimate.forEach(section => {
    observer.observe(section);
});
    // Cerrar el menú si se hace clic fuera de él
    document.addEventListener("click", function(event) {
        const isClickInsideMenu = navLinks.contains(event.target);
        const isClickOnHamburger = hamburgerMenu.contains(event.target);

        if (!isClickInsideMenu && !isClickOnHamburger && navLinks.classList.contains("active")) {
            toggleMenu();
        }
    });
});