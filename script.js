var mywindow = $(window);
var prevScroll = mywindow.scrollTop();
var newscroll;
var scrolledToBottom;

mywindow.scroll(function() {
    newscroll = mywindow.scrollTop();
    scrolledToBottom = $(document).height() - $(window).height() - $(window).scrollTop();

    if (newscroll > prevScroll) {
        $('.header').addClass('headerFade')
        $('.clientsSliderContainer').addClass('clientsSliderShow')
        $('.clientsSliderContainer').removeClass('clientsSliderFade')
        $('.header').addClass('.menu_activated')

    } else {

        $('.header').removeClass('headerFade')
        $('.clientsSliderContainer').addClass('clientsSliderFade')
    }

    if (newscroll > 100) {
        $('.header').addClass('headerScrolled')
    } else {
        $('.header').removeClass('headerScrolled')
        $('.header').removeClass('headerFade')
    }

    if (scrolledToBottom < 100) {
        $('.clientsSliderContainer').addClass('clientsSliderFade')

    }

    prevScroll = newscroll;
});
$(window).on('load', function() {
    $preloader = $('.loaderArea'),
        $loader = $preloader.find('.circle-border');
    $loader.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});

$(document).ready(function() {
    $("#clientsSlider").flexisel({
        visibleItems: 3,
        itemsToScroll: 1,
        autoPlay: {
            enable: true,
            interval: 5000,
            pauseOnHover: true
        }
    });
});

(function() {
    'use strict';

    class Menu {
        constructor(settings) {
            this.menuNode = settings.menuNode;
        }

        toggleMenuState(className) {
            if (typeof className !== 'string' || className.length === 0) {
                return console.log('you did not give the class name for the toggleState function');
            }
            return this.menuNode.classList.toggle(className);
        }
    }

    const jsMenuNode = document.querySelector('.menu');
    const demoMenu = new Menu({
        menuNode: jsMenuNode
    });

    function callMenuToggle() {
        demoMenu.toggleMenuState('menu_activated');
        document.body.classList.toggle('menuOpen');
        window.onscroll = function() {
            if (demoMenu.menuNode.className == 'menu menu_activated')
                demoMenu.toggleMenuState('menu_activated');

        }

    }

    jsMenuNode.querySelector('.menu__toggle').addEventListener('click', callMenuToggle);
})();
jQuery(function($) {
    function fix_size() {
        var images = $('.fifthPagePicture img');
        // var images3 = $('#linkedin');
        images.each(setsize);
        // images3.each(setsize);

        function setsize() {
            var img = $(this),
                img_dom = img.get(0),
                container = img.parents('.fifthPagePicture');
            if (img_dom.complete) {
                resize();
            } else img.one('load', resize);

            function resize() {
                if ((container.width() / container.height()) < (img_dom.width / img_dom.height)) {
                    img.width('100%');
                    img.height('auto');
                    return;
                }
                // if ((container2.width() / container2.height()) < (img_dom.width / img_dom.height)) {
                //     img.width('100%');
                //     img.height('auto');
                //     return;
                // }
                // if ((container3.width() / container3.height()) < (img_dom.width / img_dom.height)) {
                //     img.width('100%');
                //     img.height('auto');
                //     return;
                // }
                img.height('100%');
                img.width('100%');
            }
        }
    }
    $(window).on('resize', fix_size);
    fix_size();
});

jQuery(function($) {
    function fix_size2() {
        var images = $('.fourthPagePic img');
        images.each(setsize2);

        function setsize2() {
            var img = $(this),
                img_dom = img.get(0),
                container = img.parents('.fourthPagePic');
            if (img_dom.complete) {
                resize();
            } else img.one('load', resize);

            function resize() {
                if ((container.width() / container.height()) < (img_dom.width / img_dom.height)) {
                    img.width('50%');
                    img.height('50%');
                    return;
                }
                img.width('50%');
                img.height('50%');
            }
        }
    }
    $(window).on('resize', fix_size2);
    fix_size2();
});

jQuery(function($) {
    function fix_size4() {
        var images = $('.fifthPageLead img');
        images.each(setsize4);

        function setsize4() {
            var img = $(this),
                img_dom = img.get(0),
                container = img.parents('.fifthPageLead');
            if (img_dom.complete) {
                resize();
            } else img.one('load', resize);

            function resize() {
                if ((container.width() / container.height()) < (img_dom.width / img_dom.height)) {
                    img.width('auto');
                    img.height('100%');
                    return;
                }
                img.width('7vmin');
                img.height('100%');
            }
        }
    }
    $(window).on('resize', fix_size4);
    fix_size4();
});

jQuery(function($) {
    function fix_size5() {
        var images = $('.secondPageTopRightPicture img');
        var images2 = $('.secondPageTopLeftPicture img');
        images.each(setsize5);
        images2.each(setsize5);

        function setsize5() {
            var img = $(this),
                img_dom = img.get(0),
                container = img.parents('.secondPageTopRightPicture');
            container2 = img.parents('.secondPageTopLeftPicture');
            if (img_dom.complete) {
                resize();
            } else img.one('load', resize);

            function resize() {
                if ((container.width() / container.height()) < (img_dom.width / img_dom.height) || (container2.width() / container2.height()) < (img_dom.width / img_dom.height)) {
                    img.width('100%');
                    img.height('100%');
                    return;
                }
                img.width('100%');
                img.height('100%');
            }
        }
    }
    $(window).on('resize', fix_size5);
    fix_size5();
});


$("body").on('click', '[href*="#"]', function(e) {
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top }, 1000);
    e.preventDefault();
});


function get_name_browser() {
    // получаем данные userAgent
    var ua = navigator.userAgent;
    // с помощью регулярок проверяем наличие текста,
    // соответствующие тому или иному браузеру
    if (ua.search(/Chrome/) > 0) return 'Google Chrome';
    if (ua.search(/Firefox/) > 0) return 'Firefox';
    if (ua.search(/Opera/) > 0) return 'Opera';
    if (ua.search(/Safari/) > 0) return 'Safari';
    if (ua.search(/MSIE/) > 0) return 'Internet Explorer';
    // условий может быть и больше.
    // сейчас сделаны проверки только 
    // для популярных браузеров
    return 'Не определен';
}

// пример использования
var browser = get_name_browser();
if (browser == 'Safari' && $(window).height() > 1100) document.getElementById('thirdPageText').style.fontSize = '1rem';