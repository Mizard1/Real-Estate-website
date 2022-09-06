//!HEADER
(function ($) {
  "use strict";

    // Header carousel
    $(".header-carousel").owlCarousel({
      autoplay: true,
      smartSpeed: 1500,
      items: 1,
      dots: true,
      loop: true,
      nav : true,
      navText : [
          '<i class="bi bi-chevron-left"></i>',
          '<i class="bi bi-chevron-right"></i>'
      ]
  });



  //!PROPERTY LISTING


  $('.portfolio-item').isotope({
    // options
    itemSelector: '.item',
    layoutMode: 'fitRows'
  });

    $(".porfolio-menu ul li").click(function(){
    $(".porfolio-menu ul li").removeClass("active");
    $(this).addClass("active");

      var selector = $(this).attr("data-filter");
    $(".portfolio-item").isotope({
      filter:selector
    });
    return false;
  });

  //! Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


  //! Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 24,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });



    //! Back to top button
       $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
})(jQuery);

  