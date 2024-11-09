document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.slide-container');
    const indicators = document.querySelectorAll('.indicator-container .indicator');
    const leftButton = document.querySelector('.left-button');
    const rightButton = document.querySelector('.right-button');
    let index = 0;
    let interval;

    function changeSlide(newIndex) {
        slides[index].classList.remove('active');
        indicators[index].classList.remove('active');
        index = (newIndex + slides.length) % slides.length; // Ajuste circular
        slides[index].classList.add('active');
        indicators[index].classList.add('active');
    }

    function startSlider() {
        interval = setInterval(() => {
            changeSlide(index + 1);
        }, 4000); // Duración de 3 segundos
    }

    function stopSlider() {
        clearInterval(interval);
    }

    indicators.forEach((indicator, i) => {
        indicator.addEventListener('click', () => {
            stopSlider();
            changeSlide(i);
            startSlider();
        });
    });

    leftButton.addEventListener('click', () => {
        stopSlider();
        changeSlide(index - 1);
        startSlider();
    });

    rightButton.addEventListener('click', () => {
        stopSlider();
        changeSlide(index + 1);
        startSlider();
    });

    startSlider();
});