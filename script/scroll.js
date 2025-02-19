window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 0) {
    header.classList.remove("transparent");
  } else {
    header.classList.add("transparent");
  }
});
let scrollTimeout;
window.addEventListener("scroll", () => {
  if (scrollTimeout) clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    console.log("Scrolling stopped");
  }, 50);
});
