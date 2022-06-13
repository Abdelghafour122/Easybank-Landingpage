const menuIcon = document.querySelector(".ham-icon");
const outlay = document.querySelector(".outlay");
const mobileLinks = document.querySelector(".mobile-links");

const openImg = "./images/icon-hamburger.svg";
const closeImg = "./images/icon-close.svg";

menuIcon.addEventListener("click", () => {
  menuIcon.src.includes(openImg.slice(1))
    ? (menuIcon.src = closeImg)
    : (menuIcon.src = openImg);

  mobileLinks.classList.toggle("show-slow");
  mobileLinks.classList.toggle("hide-slow");

  outlay.classList.toggle("show-slow");
  outlay.classList.toggle("hide-slow");
});
