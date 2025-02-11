document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");

    // Gestion du clic sur le burger pour ouvrir/fermer le menu
    burger.addEventListener("click", (e) => {
        navLinks.classList.toggle("nav-active");
        burger.classList.toggle("toggle"); // Pour transformer l'icône en croix par exemple
        e.stopPropagation(); // Empêche le clic de se propager vers le document
    });

    // Empêche également la propagation du clic sur le menu lui-même
    navLinks.addEventListener("click", (e) => {
        e.stopPropagation();
    });

    // Écouteur global sur le document
    document.addEventListener("click", () => {
        // Si le menu est ouvert, le fermer
        if (navLinks.classList.contains("nav-active")) {
            navLinks.classList.remove("nav-active");
            burger.classList.remove("toggle");
        }
    });
});
