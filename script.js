var mywindow = $(window);
var prevScroll = mywindow.scrollTop();
var newscroll;

mywindow.scroll(function() {
    newscroll = mywindow.scrollTop();

    if (newscroll > prevScroll) {
        $('.header').addClass('headerFade')
    } else {
        $('.header').removeClass('headerFade')
    }

    if (newscroll > 100) {
        $('.header').addClass('headerScrolled')
    } else {
        $('.header').removeClass('headerScrolled')
    }

    prevScroll = newscroll;
});