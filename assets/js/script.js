$(document).ready(function () {
  $(".dropdown").on("click", function (event) {
    event.stopPropagation();
    $(this).toggleClass("is-active");
  });
});
