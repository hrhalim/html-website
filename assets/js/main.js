$(document).ready(function(){
	$('#nav').slicknav();
});

const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});


//wow active area
     wow = new WOW(
                      {
                      boxClass:     'wow',      // default
                      animateClass: 'animated', // default
                      offset:       0,          // default
                      mobile:       true,       // default
                      live:         true        // default
                    }
                    )
                    wow.init();

//banner area slider
 var mySwiper = new Swiper('.swiper-container', {

      speed: 3000,
        autoplay: {
            delay: 3000,
        },
        loop:true,
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        stretch: 60,
        depth: 200,
        modifier: 1,
        slideShadows: false,
      },
      
    });
 
   $('.counter').counterUp({
     delay: 10,
     time: 1000
});

// screenshot area
(function($) {
    'use strict';

    var swiper = new Swiper('.swiper-container.one', {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
        autoplay: {
            delay: 3000,
        },
        speed: 1000,
        effect: 'coverflow',
        loop: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 0,
            stretch: 80,
            depth: 200,
            modifier: 1,
            slideShadows : false,
        }
    });

})(jQuery);

// accordian area 
 $(document).ready(function(){

  $(".card-header").click(function(){

    if($(this).next(".card-body").hasClass("active")){
     $(this).next(".card-body").removeClass("active").slideUp()
      $(this).children("span").removeClass("fa-minus").addClass("fa-plus")
    }
    else{

   $(".card .card-body").removeClass("active").slideUp()
    $(".card .card-header span").removeClass("fa-minus").addClass("fa-plus");
     $(this).next(".card-body").addClass("active").slideDown()

      $(this).children("span").removeClass("fa-plus").addClass("fa-minus")

    }

  })

 })

//navabr area
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.padding = "0px 20px";
    document.getElementById("logo").style.fontSize = "20px";
  } else {
    document.getElementById("navbar").style.padding = "40px 10px";
    document.getElementById("logo").style.fontSize = "20px";
  }
}

 //slick slider
   $('.main-slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
       centerMode: true,
        centerPadding: '480px',
        slidesToShow: 1,
        arrows: true,
        dots: true,
        responsive: [{
            breakpoint: 1367,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '200px',
                slidesToShow: 1
            }
        }, {
            breakpoint: 769,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '20px',
                slidesToShow: 1
            }
        }]
    });

   //load area

    $(window).on('load', function() {
        $('.load-time').fadeOut();
        $('#loader').delay(500).fadeOut('slow');
    });
 