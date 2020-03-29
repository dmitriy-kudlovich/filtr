$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    items: 3,
    nav: true,
    margin: 10,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>"
    ]
  });
});

let hamburger = document.getElementById("hamburger");
let navPanel = document.querySelector(".nav-panel");
let header = document.querySelector(".header");

hamburger.oncklick = function() {
  navPanel.classList.add("nav-panel--active");
  header.classList.add("overflow-hidden");
};
