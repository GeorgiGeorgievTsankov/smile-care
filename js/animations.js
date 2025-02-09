// AOS инициализация
AOS.init({
    duration: 800,
    easing: 'slide'
});

// Counter анимация
$('.counter').each(function() {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

// Parallax ефект
$(window).scroll(function() {
    var scrolled = $(window).scrollTop();
    $('.parallax-bg').css('transform', 'translate3d(0, ' + -(scrolled * 0.3) + 'px, 0)');
}); 