$(function () {
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
});