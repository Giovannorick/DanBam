const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const indicatorContainer = document.querySelector(".indicator-container");

let currentIndex = 0;

slides.forEach((_, index) => {
  const indicator = document.createElement("div");
  indicator.classList.add("indicator");
  if (index === currentIndex) indicator.classList.add("active");
  indicatorContainer.appendChild(indicator);

  indicator.addEventListener("click", () => {
    currentIndex = index;
    updateSlider();
  });
});

const updateSlider = () => {
  const slideWidth = slides[0].clientWidth;
  slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

  document.querySelectorAll(".indicator").forEach((indicator, index) => {
    indicator.classList.toggle("active", index === currentIndex);
  });
};

const autoSlide = setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
}, 5000);

window.addEventListener("resize", updateSlider);
