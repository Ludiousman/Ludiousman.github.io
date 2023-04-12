"use strict";
const navBtn = document.querySelector(".nav-bar");
const navBar = document.querySelector(".mobile-nav-items");
const closeNav = document.querySelector(".close-nav");

navBtn.addEventListener("click", () => {
  navBar.style.display = "block";
});
closeNav.addEventListener("click", () => {
  navBar.style.display = "none";
});
