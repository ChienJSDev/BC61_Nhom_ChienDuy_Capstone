$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop()) {
      $("nav").addClass("sticky");
    } else {
      $("nav").removeClass("sticky");
    }
  });
});

$(".counter").countUp();

const ShowPopup = () => {
    $("#play_video").css("display","flex")
    return;
}

$("#play_video").click(() => {
    $(".about_iframe")[0].src = $(".about_iframe")[0].src
    $("#play_video").css("display","none");
});