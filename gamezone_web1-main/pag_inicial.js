document.addEventListener("DOMContentLoaded", function () {

    // Script para mostrar/esconder o menu lateral ao clicar no ícone
    const menuIcon = document.getElementById("menu-icon");
    const sideMenu = document.getElementById("side-menu");

    menuIcon.addEventListener("click", function () {
        sideMenu.classList.toggle("active");
    });

    // Seleciona todas as imagens do carrossel
    const images = document.querySelectorAll('.carousel-image');
    const indicators = document.querySelectorAll('.indicator'); // Seleciona as bolinhas
    let currentIndex = 0;

    // Função para alternar entre as imagens
    function changeImage() {
        // Remove a classe "active" de todas as imagens e indicadores
        images.forEach(image => {
            image.classList.remove('active');
        });
        indicators.forEach(indicator => {
            indicator.classList.remove('active');
        });

        // Adiciona a classe "active" à imagem e indicador atuais
        images[currentIndex].classList.add('active');
        indicators[currentIndex].classList.add('active');

        // Atualiza o índice da imagem
        currentIndex = (currentIndex + 1) % images.length; // Vai para a próxima imagem e volta ao início quando necessário
    }

    // Inicia o carrossel
    setInterval(changeImage, 5000); // Chama a função a cada 5 segundos

    // Mostra a primeira imagem imediatamente
    changeImage();

    // Adiciona funcionalidade de clique nas bolinhas
    indicators.forEach(indicator => {
        indicator.addEventListener('click', function () {
            currentIndex = parseInt(indicator.getAttribute('data-index')); // Pega o índice da bolinha clicada
            changeImage(); // Atualiza a imagem ativa
        });
    });

});
