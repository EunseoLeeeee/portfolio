
$(document).ready(function(){


  $('.depth2').hide();
   $('.gnb>li').hover(function(){
      $(this).find('.depth2').stop().slideToggle();
   });
  
  
  });