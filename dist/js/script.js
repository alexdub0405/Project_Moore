$(function () {
  if ($(".comics__inner-box").length) {
    var mixer = mixitup(".comics__inner-box");
  }

  $(".icon-th-list").on("click", function () {
    $(".cards-sort").addClass("list");
    $(".icon-th-list").addClass("active");
    $(".icon-th-large").removeClass("active");
  });

  $(".icon-th-large").on("click", function () {
    $(".cards-sort").removeClass("list");
    $(".icon-th-large").addClass("active");
    $(".icon-th-list").removeClass("active");
  });
});

$(".menu").on("click", function () {
  // клік додає ще один клас стилю-перевірити в інспекторі
  $(".menu__list").toggleClass("menu__list--active");
});