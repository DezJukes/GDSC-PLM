let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-track img');
const totalSlides = slides.length;

function updateSlide() {
    const carouselTrack = document.querySelector('.carousel-track');
    const slideWidth = slides[0].clientWidth + 10; // Account for gap
    carouselTrack.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlide();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlide();
}
