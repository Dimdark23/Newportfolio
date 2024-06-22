document.addEventListener('DOMContentLoaded', function () {
    let slideshows = document.querySelectorAll('.slideshow');

    slideshows.forEach(initSlideshow);
});

function initSlideshow(slideshow) {
    let slides = slideshow.getElementsByClassName('slide');
    let currentIndex = 0;
    slides[currentIndex].style.display = 'block'; // Show first slide initially

    const prevButton = slideshow.getElementsByClassName('prev')[0];
    const nextButton = slideshow.getElementsByClassName('next')[0];

    prevButton.addEventListener('click', function() {
        moveSlide(slideshow, slides, -1);
    });

    nextButton.addEventListener('click', function() {
        moveSlide(slideshow, slides, 1);
    });

    setInterval(function () {
        moveSlide(slideshow, slides, 1);
    }, 5000);
}

function moveSlide(slideshow, slides, step) {
    let currentSlide = slideshow.querySelector('.slide.active');
    currentSlide.style.display = 'none'; // Hide current slide
    currentSlide.classList.remove('active');

    let newIndex = (currentIndex(slides, currentSlide) + step + slides.length) % slides.length;
    slides[newIndex].style.display = 'block';
    slides[newIndex].classList.add('active');
}

function currentIndex(slides, currentSlide) {
    return Array.from(slides).indexOf(currentSlide);}