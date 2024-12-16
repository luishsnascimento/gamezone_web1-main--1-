document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const sideMenu = document.getElementById("side-menu");

    // Alternar menu lateral
    menuIcon.addEventListener("click", function () {
        sideMenu.classList.toggle("active");
    });

    // Carrossel: imagens, textos e indicadores
    const images = document.querySelectorAll(".carousel-image");
    const indicators = document.querySelectorAll(".indicator");
    const newsItems = document.querySelectorAll(".news-text");
    let currentIndex = 0;

    // Função para atualizar a exibição do carrossel
    function updateCarousel() {
        // Remove "active" de todas as imagens, indicadores e textos
        images.forEach(image => image.classList.remove("active"));
        indicators.forEach(indicator => indicator.classList.remove("active"));
        newsItems.forEach(news => news.classList.remove("active"));

        // Adiciona "active" ao item atual
        images[currentIndex].classList.add("active");
        indicators[currentIndex].classList.add("active");
        newsItems[currentIndex].classList.add("active");
    }

    // Alternar automaticamente as imagens e textos a cada 5 segundos
    function startCarousel() {
        setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length; // Avança para o próximo índice (em loop)
            updateCarousel();
        }, 7000);
    }

    // Configurar indicadores para troca manual de slides
    indicators.forEach(indicator => {
        indicator.addEventListener("click", function () {
            currentIndex = parseInt(indicator.getAttribute("data-index")); // Atualiza índice com base no indicador clicado
            updateCarousel();
        });
    });

    // Inicializa o carrossel
    updateCarousel(); // Atualiza o carrossel para o slide inicial
    startCarousel();  // Inicia o loop automático
});