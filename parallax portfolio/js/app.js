$(function () {
  $('a[href^=#]').click(function () {
    var target = $($(this).attr('href')).offset().top;

    $('html,body').animate({
      scrollTop: target
    }, 1500);

    return false;
  });

  $('.backtop').click(function () {
    $('html,body').animate({
      scrollTop: '0'
    }, 1500);

    return false;
  });
    

    $(window).scroll(function () {
        var scrollAmount = $(this).scrollTop();
        //$('.scroll').html('スクロール量'+scrollAmount+'px');
    if(scrollAmount >= 1700){
        $('.caution').css('animation-play-state','paused');
    }else{
        $('.caution').css('animation-play-state','running');
    }
  });

});

