const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const closeIcon = document.querySelector(".close_icon");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("menu_active");
});

closeIcon.addEventListener("click", () => {
  menu.classList.toggle("menu_active");
});
