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
  
    $(".nav__list a[href*='#']").mPageScroll2id();
    $(".header__menu a[href*='#']").mPageScroll2id();
    
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
