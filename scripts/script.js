// JavaScript Document
var hamburgerButton = document.querySelector("nav img");
var nav = document.querySelector("nav ul");


hamburgerButton.addEventListener("click", function() {
    nav.classList.toggle("open");
  
}, false)