document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    // Abre/cierra el menú en móviles
    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Cierra el menú cuando haces clic en un enlace (en móviles)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
});
