$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 3,
    nav: true,
    margin: 5,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>",
    ],
    stagePadding: 50,
    responsiveClass: true,
    loop: true,
    dotsEach: 3,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 3,
      },
    },
  });
});

let hamburger = document.getElementById("hamburger");
let navPanel = document.querySelector(".nav-panel");
let body = document.querySelector("body");

hamburger.onclick = function () {
  navPanel.classList.add("nav-panel--active");
  body.classList.add("overflow-hidden");
};

navPanel.onclick = function () {
  navPanel.classList.remove("nav-panel--active");
  body.classList.remove("overflow-hidden");
};
