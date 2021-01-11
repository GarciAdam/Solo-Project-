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
    $(".fr").hide();
    $(".rec").show();
    $(".vbar").show();
  });



$("#key").on("click", function () {
  $(".mouse").hide();
  $(".about").hide();
  $(".home").hide();
  $(".rec").hide();
  $(".headd").hide();
  $(".pad").hide();
  $(".Keyboard").show();
  $(".greeting").hide();

});

$(."#ms").on("click",function () {
  $(".Keyboard").hide();
  $(".fr").hide();
  $(".about").hide();
  $(".home").hide();
  $(".rec").hide();
  $(".headd").hide();
  $(".padd").hide();
  $(".mouse").show();
  $(".greeting").hide();
})

$(."#hd").on("click",function () {
  $(".Keyboard").hide();
  $(".fr").hide();
  $(".about").hide();
  $(".home").hide();
  $(".rec").hide();
  $(".mousse").hide();
  $(".padd").hide();
  $(".headd").show();
  $(".greeting").hide();
})

$("#home").on("click",function () {
  $(".rec").hide();
  $(".fr").hide();
  $(".about").hide();
  $(".vbar").hide();
  $(".Keyboard").hide();
  $(".mouse").hide();
  $(".headd").hide();
  $(".padd").hide();
  $(".frm").hide();
  $('.greeting'.hide();
   $(".home").show();
