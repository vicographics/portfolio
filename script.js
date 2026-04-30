function irAProyecto(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(n) {
    slides.forEach(s => s.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));

    slideIndex = (n + slides.length) % slides.length;

    slides[slideIndex].classList.add("active");
    dots[slideIndex].classList.add("active");
}

function moveSlide(n) {
    showSlide(slideIndex + n);
}

function currentSlide(n) {
    showSlide(n);
}

// Automático
setInterval(() => {
    moveSlide(1);
}, 8000);
