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

})(jQuery); 