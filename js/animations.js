// AOS 
AOS.init({
    duration: 800,
    easing: 'slide'
});

// Counter
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

