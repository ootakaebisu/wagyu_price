$(function(){
  var $topBtn = $('#page-top').find('a[href^="#"]');
  $topBtn.click(function(){
    $('body, html').animate({
      scrollTop:0
    }, 500);
    return false;
  });
});