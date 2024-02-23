let currentIndex = 0;

    document.querySelector(".prev-button").addEventListener("click", () => {
      navigate(-1);
    });

    document.querySelector(".next-button").addEventListener("click", () => {
      navigate(1);
    });

    function navigate(direction) {
      const feedbackContainer = document.querySelector(".feedback-container");
      const totalImages = document.querySelectorAll(".feedback-item").length;

      currentIndex = (currentIndex + direction + totalImages) % totalImages;
      const offset = -currentIndex * 100;

      feedbackContainer.style.transform = `translateX(${offset}%)`;
    }

    //AUTOPLAY
    let autoplayInterval = null;

    function startAutoplay(interval) {
      stopAutoplay(); // Detiene cualquier autoplay anterior para evitar múltiples intervalos.
      autoplayInterval = setInterval(() => {
        navigate(1); // Navega a la siguiente imagen cada intervalo de tiempo.
      }, interval);
    }

    function stopAutoplay() {
      clearInterval(autoplayInterval);
    }

    // Iniciar autoplay con un intervalo de 2 segundos.
    startAutoplay(2000);

    // Opcional: Detener autoplay cuando el usuario interactúa con los botones de navegación.
    document.querySelectorAll(".nav-button").forEach((button) => {
      button.addEventListener("click", stopAutoplay);
    });