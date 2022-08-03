const nav = document.querySelector(".topnav");
const burger = document.querySelector(".icon");
const navItems = document.querySelectorAll(".nav-items a");
const navLinks = document.querySelectorAll(".dropdown-content a");

// const anchorTag = document.querySelectorAll(".nav-links");

burger.addEventListener("click", burgerMenu);
navItems.forEach((item) => {
  item.addEventListener("click", burgerMenu);
});
// navLinks.forEach((link) => {
//   link.addEventListener("click", burgerMenu);
// });

function burgerMenu() {
  if (nav.classList.contains("responsive")) {
    nav.classList.remove("responsive");
    document.body.classList.remove("hide");
    burger.src = "./images/icon-hamburger.svg";
  } else {
    nav.classList.add("responsive");
    document.body.classList.add("hide");
    burger.src = "./images/icon-close.svg";
  }
}
