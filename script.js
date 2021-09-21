const closeMenu = document.querySelector("#closeMenu");
const showMenu = document.querySelector("#showMenu");
const menu = document.querySelector(".nav-links");

closeMenu.addEventListener("click", () => {
  menu.style.right = "-200px";
});
showMenu.addEventListener("click", () => {
  menu.style.right = "0px";
});
