$(document).ready(function () {
  $(window).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    if (
      document.body.scrollTop > $nav.height() ||
      document.documentElement.scrollTop > $nav.height()
    ) {
      document.getElementById("navbar").style.padding = ".2rem 1rem";
      document.getElementById("navbar-image").style.width = "40px";
    } else {
      document.getElementById("navbar").style.padding = "1rem 1rem";
      document.getElementById("navbar-image").style.width = "50px";
    }
  });

  let nCount = function (selector) {
    $(selector).each(function () {
      $(this).animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 3000,
          easing: "swing",
          step: function (value) {
            $(this).text(Math.ceil(value));
          },
        }
      );
    });
  };
});

// window.addEventListener("gmap_canvas", initializeAutocomplete);

// let container = document.querySelector(".roulette");
// let btn = document.getElementById("spin");
// let number = Math.ceil(Math.random() * 10000);

// btn.onclick = function () {
//   container.style.transform = "rotate(" + number + "deg)";
//   number += Math.ceil(Math.random() * 10000);
// };
