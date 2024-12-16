document.addEventListener("DOMContentLoaded", function () {

    // Script para mostrar/esconder o menu lateral ao clicar no ícone
    const menuIcon = document.getElementById("menu-icon");
    const sideMenu = document.getElementById("side-menu");

    menuIcon.addEventListener("click", function () {
        sideMenu.classList.toggle("active");
    });
});