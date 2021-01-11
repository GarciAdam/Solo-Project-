$(document).ready(function () {
  $(".rec").hide();
  $(".vbar").hide();
  $(".Keyboard").hide();
  $(".mouse").hide();
  $(".headd").hide();
  $(".padd").hide();
  $(".frm").hide();
  $(".about").hide();
  $('.fr').hide();
  $('.greeting').hide();

  $("#hbtn").on("click", function () {
    $(".mouse").hide();
    $(".about").hide();
    $(".home").hide();
    $(".rec").hide();
    $(".headd").hide();
    $(".padd").hide();
    $('.fr').hide();
    $(".rec").show();
    $(".vbar").show();
  });