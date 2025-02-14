// Slider

const images = document.querySelectorAll(".slider-image");
let currentIndex = 0;


function changeSlide() {
  images[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add("active");
}

setInterval(changeSlide, 3000); // Change image every 3 seconds