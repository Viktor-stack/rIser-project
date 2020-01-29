$(function() {
  $(".advantages__tabs-box .tab").on("click", function(event) {
    var id = $(this).attr("data-id");
    $(".advantages__tabs-box")
      .find(".tab-item")
      .removeClass("active-tab")
      .hide();
    $(".advantages__tabs-box .tabs")
      .find(".tab")
      .removeClass("active");
    $(this).addClass("active");
    $("#" + id)
      .addClass("active-tab")
      .fadeIn();
    return false;
  });
  $(window).on("load", function() {
  
    $(".nav__list a[href*='#']").mPageScroll2id({
    });
    $(".header__menu a[href*='#']").mPageScroll2id({
      offset: 100,
    });
    
  });
  $(".menu__btn").on("click", function () {
    $(".menu__list").slideToggle();
  });
  $(".menu__btn").on("click", function () {
    $(".menu__btn").toggleClass("active");
  });

  // $("#menu, #menu2, #menu3, #menu4,").on("click", "a", function(event) {
  //   //отменяем стандартную обработку нажатия по ссылке
  //   event.preventDefault();

  //   //забираем идентификатор бока с атрибута href
  //   var id = $(this).attr("href"),
  //     //узнаем высоту от начала страницы до блока на который ссылается якорь
  //     top = $(id).offset().top;

  //   //анимируем переход на расстояние - top за 1500 мс
  //   $("header,html").animate({ scrollTop: top }, 1000);
  // });
});
var window_height = 200;
$(window).on("scroll load", function(event) {
  if ($(window).scrollTop() > window_height) {
    // $(".header").addClass("header-fixed");
  } else {
    // $(".header").removeClass("header-fixed");
    $(".header").removeClass("hide-menu");
  }
});
var lastScroll = 50;
$(window).on("scroll load", function(event) {
  var st = $(this).scrollTop();
  if (st > lastScroll) {
    $(".header").addClass("hide-menu");
    if ($(".nav-search").hasClass("hide") === false) {
      $(".nav-search").toggleClass("hide");
    }
  } else if (st < lastScroll) {
    $(".header").removeClass("hide-menu");
  }
  if ($(window).scrollTop() <= 100) {
    $(".header")
      // .removeClass(".header-fixed")
      .removeClass("hide-menu");
  } else if (
    $(window).scrollTop() < window_height &&
    $(window).scrollTop() > 0
  ) {
    $(".header").addClass("hide-menu");
  }
  lastScroll = st;
}); 