document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburgerMenu.addEventListener('click', function() {
        // Alterna la clase 'active' para mostrar/ocultar el menú
        navLinks.classList.toggle('active');
    });

    // Opcional: Cierra el menú al hacer clic en un enlace (útil para SPAs)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });
});