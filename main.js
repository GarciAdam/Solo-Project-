$(document).ready(function () {
  $(".rec").hide();
  $(".vbar").hide();
  $(".Keyboard").hide();
  $(".mouse").hide();
  $(".headd").hide();
  $(".padd").hide();
  $(".frm").hide();
  $(".about").hide();
  $(".monitors").hide()

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
    $(".monitors").hide()
    $(".rec").show();
    $(".vbar").show();
  });

  $("#key").on("click", function () {
    $('.fr').hide();
    $(".mouse").hide();
    $(".about").hide();
    $(".home").hide();
    $(".rec").hide();
    $(".headd").hide();
    $(".padd").hide();
    $(".monitors").hide();
    $(".Keyboard").show();
    $('.greeting').hide();
  });

  $("#ms").on("click", function () {
    $(".Keyboard").hide();
    $('.fr').hide();
    $(".about").hide();
    $(".home").hide();
    $(".rec").hide();
    $(".headd").hide();
    $(".padd").hide();
    $(".monitors").hide();
    $(".mouse").show();
    $('.greeting').hide();
  });

  $("#hd").on("click", function () {
    $(".Keyboard").hide();
    $('.fr').hide();
    $(".about").hide();
    $(".home").hide();
    $(".rec").hide();
    $(".monitors").hide();
     $(".mouse").hide();
     $(".padd").hide();
     $(".headd").show();
     $('.greeting').hide();
  });

  $("#mp").on("click", function () {
    $(".Keyboard").hide();
    $('.fr').hide();
    $(".about").hide();
    $(".home").hide();
    $(".rec").hide();
    $(".monitors").hide();
    $(".mouse").hide();
    $(".headd").hide();
    $(".padd").show();
    $('.greeting').hide();
  });

  $('#home').on("click",function(){
    $(".rec").hide();
    $('.fr').hide();
    $(".about").hide();
    $(".vbar").hide();
    $(".Keyboard").hide();
    $(".mouse").hide();
    $(".monitors").hide();
    $(".headd").hide();
    $(".padd").hide();
    $(".frm").hide();
    $(".home").show();
    $('.greeting').hide();
  })
  $("#abt").on("click",function(){
    $(".rec").hide();
    $(".about").hide();
    $('.fr').hide();
    $(".vbar").hide();
    $(".Keyboard").hide();
    $(".mouse").hide();
    $(".headd").hide();
    $(".monitors").hide();
    $(".padd").hide();
    $(".frm").hide();
    $(".home").hide()
    $(".about").show();
    $('.greeting').hide();
  

  })

  $('input').on("click",function(){
    $(".rec").hide();
    $(".vbar").hide();
    $(".Keyboard").hide();
    $(".mouse").hide();
    $(".headd").hide();
    $(".padd").hide();
    $(".frm").hide();
    $(".monitors").hide();
    $(".about").hide();
    $('.greeting').hide();
    $('.fr').show();

  })

  $("#mn").on("click", function () {
    $(".Keyboard").hide();
    $('.fr').hide();
    $(".about").hide();
    $(".home").hide();
    $(".rec").hide();
    $(".mouse").hide();
    $(".headd").hide();
    $(".padd").hide();
    $('.greeting').hide();
    $(".monitors").show();

  });

 
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}
  

  
});
