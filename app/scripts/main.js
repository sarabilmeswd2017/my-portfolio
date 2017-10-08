console.log('\'Allo \'Allo!');


 //$(document).ready(function(){
  $('.ion-navicon-round').click(function(){
    $('.hidden-nav-1').toggle();
  });
//});

$(document).ready(function(){
  $('.ion-navicon-round').hover(function(){
    $('.nav-box').show();
  }, function(){
    $('.nav-box').hide();
  });
 });


$(document).ready(function(){
  $('.ion-navicon-round').click(function(){
    $('.nav-rectangle').toggle();
  });
});


/*$(document).ready(function(){
  $(".home-icon").hover(function(){
    $(".home-active").animate({right: '400px', opacity: '1'});
  });
});*/

$(document).ready(function(){
  $('.home-icon').hover(function(){
    $('.home-active').show();
  }, function(){
    $('.home-active').hide();
  });
});

$(document).ready(function(){
  $('.portfolio-icon').hover(function(){
    $('.portfolio-active').show();
  }, function(){
    $('.portfolio-active').hide();
  });
});

$(document).ready(function(){
  $('.profile-icon').hover(function(){
    $('.profile-active').show();
  }, function(){
    $('.profile-active').hide();
  });
});

$(document).ready(function(){
  $('.contact-icon').hover(function(){
    $('.contact-active').show();
  }, function(){
    $('.contact-active').hide();
  });
});



/*$(document).ready(function() {
  $(".hidden-nav-1").hover(function() {
        $(this).children(".nav-word").stop().animate({ opacity: 1} , 500);
    }, function() {
        $(this).children(".nav-word").stop().animate({ opacity: 0}, 500);
      });

});*/
