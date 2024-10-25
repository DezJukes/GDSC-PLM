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

//-------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");

    const observerOptions = {
        threshold: 0.2 // Ensures the animation triggers when at least 20% of the section is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});

