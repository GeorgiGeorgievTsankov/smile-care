(function($) {
    "use strict";
    
    var fullHeight = function() {
        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(function(){
            $('.js-fullheight').css('height', $(window).height());
        });
    };
    fullHeight();

    // Scrollax
    $.Scrollax();

    // Навигация
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.ftco_navbar').addClass('scrolled');
        } else {
            $('.ftco_navbar').removeClass('scrolled');
        }
    });

    // Мобилно меню
    $('.navbar-toggler').click(function() {
        $(this).toggleClass('active');
    });

    // Затваряне на мобилното меню при клик
    $('.nav-link').click(function() {
        $('.navbar-collapse').collapse('hide');
        $('.navbar-toggler').removeClass('active');
    });

    // Smooth scroll
    $('.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    });

    // Hero Slider
    $('.home-slider').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        nav: true,
        dots: false,
        navText: [
            '<i class="fa fa-chevron-left"></i>',
            '<i class="fa fa-chevron-right"></i>'
        ]
    });

    // Testimonials Slider
    $('.carousel-testimony').owlCarousel({
        center: true,
        loop: true,
        items: 1,
        margin: 30,
        stagePadding: 0,
        nav: false,
        navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

})(jQuery); 