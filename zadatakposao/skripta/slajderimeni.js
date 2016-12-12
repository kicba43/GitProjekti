$(document).ready(function(){
  var slideInterval = 2000,
      fadeDuration = 600,
      $slideshow = $('.slideshow');
  setInterval(function(){
    var $slides = $slideshow.children();
    $slides.eq(0).fadeOut(fadeDuration, function(){
      $(this).appendTo($slideshow);
    });
    $slides.eq(1).fadeIn(fadeDuration);
  }, slideInterval);
});

$(document).ready(function(){
  $("#nav-mobile").html($(".nav-desno").html());
  $("#nav-trigger span").click(function(){
    if ($("nav#nav-mobile ul").hasClass("expanded")) {
      $("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
      $(this).removeClass("open");
    } else {
      $("nav#nav-mobile ul").addClass("expanded").slideDown(250);
      $(this).addClass("open");
    }
  });
});