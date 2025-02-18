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

    // Навигация - добавяне/премахване на scrolled клас
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.ftco_navbar').addClass('scrolled');
            $('.back-to-top').css({
                'opacity': '1',
                'visibility': 'visible'
            });
        } else {
            $('.ftco_navbar').removeClass('scrolled');
            $('.back-to-top').css({
                'opacity': '0',
                'visibility': 'hidden'
            });
        }
    });

    // Мобилно меню - затваряне при клик върху линк
    $('.navbar-nav .nav-link').on('click', function() {
        $('#ftco-nav').collapse('hide');
        $('.navbar-toggler').removeClass('active');
    });

    // Бургер бутон toggle
    $('.navbar-toggler').click(function() {
        $(this).toggleClass('active');
    });

    // Добавяне на back-to-top бутон в началото на документа
    $(document).ready(function() {
        $('body').append('<button class="back-to-top"><i class="fas fa-arrow-up"></i></button>');
        
        // Back-to-top функционалност
        $('.back-to-top').click(function() {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

})(jQuery); 