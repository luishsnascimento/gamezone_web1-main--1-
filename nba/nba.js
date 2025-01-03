document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const sideMenu = document.getElementById("side-menu");

    // Alternar menu lateral
    menuIcon.addEventListener("click", function () {
        sideMenu.classList.toggle("active");
    });

});