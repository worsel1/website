let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.gallery-slide img');
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }
    const offset = -slideIndex * 105;
    document.querySelector('.gallery-slide').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

function prevSlide() {
    showSlide(slideIndex - 1);
}

showSlide(slideIndex);
