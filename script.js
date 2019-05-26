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
    } else {

        $('.header').removeClass('headerFade')
        $('.clientsSliderContainer').addClass('clientsSliderFade')
    }

    if (newscroll > 100) {
        $('.header').addClass('headerScrolled')
    } else {
        $('.header').removeClass('headerScrolled')
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

    }

    jsMenuNode.querySelector('.menu__toggle').addEventListener('click', callMenuToggle);
})();
jQuery(function($) {
    function fix_size() {
        var images = $('.fifthPagePicture img');
        var images2 = $('.fifthPageLead img');
        images.each(setsize);
        images2.each(setsize);

        function setsize() {
            var img = $(this),
                img_dom = img.get(0),
                container = img.parents('.fifthPagePicture'),
                container2 = img.parents('.fifthPageLead');
            if (img_dom.complete) {
                resize();
            } else img.one('load', resize);

            function resize() {
                if ((container.width() / container.height()) < (img_dom.width / img_dom.height)) {
                    img.width('100%');
                    img.height('auto');
                    return;
                }
                if ((container2.width() / container2.height()) < (img_dom.width / img_dom.height)) {
                    img.width('100%');
                    img.height('auto');
                    return;
                }
                img.height('100%');
                img.width('auto');
            }
        }
    }
    $(window).on('resize', fix_size);
    fix_size();
});

// $(document).ready(function() {

//     // Resive video
//     scaleVideoContainer();

//     initBannerVideoSize('.video-container .poster img');
//     initBannerVideoSize('.video-container .filter');
//     initBannerVideoSize('.video-container video');

//     $(window).on('resize', function() {
//         scaleVideoContainer();
//         scaleBannerVideoSize('.video-container .poster img');
//         scaleBannerVideoSize('.video-container .filter');
//         scaleBannerVideoSize('.video-container video');
//     });

// });

// /** Reusable Functions **/
// /********************************************************************/

// function scaleVideoContainer() {

//     var height = $(window).height();
//     var unitHeight = parseInt(height) + 'px';
//     $('.homepage-hero-module').css('height', unitHeight);

// }

// function initBannerVideoSize(element) {

//     $(element).each(function() {
//         $(this).data('height', $(this).height());
//         $(this).data('width', $(this).width());
//     });

//     scaleBannerVideoSize(element);

// }

// function scaleBannerVideoSize(element) {

//     var windowWidth = $(window).width(),
//         windowHeight = $(window).height(),
//         videoWidth,
//         videoHeight;

//     console.log(windowHeight);

//     $(element).each(function() {
//         var videoAspectRatio = $(this).data('height') / $(this).data('width'),
//             windowAspectRatio = windowHeight / windowWidth;

//         if (videoAspectRatio > windowAspectRatio) {
//             videoWidth = windowWidth;
//             videoHeight = videoWidth * videoAspectRatio;
//             $(this).css({ 'top': -(videoHeight - windowHeight) / 2 + 'px', 'margin-left': 0 });
//         } else {
//             videoHeight = windowHeight;
//             videoWidth = videoHeight / videoAspectRatio;
//             $(this).css({ 'margin-top': 0, 'margin-left': -(videoWidth - windowWidth) / 2 + 'px' });
//         }

//         $(this).width(videoWidth).height(videoHeight);

//         $('.homepage-hero-module .video-container video').addClass('fadeIn animated');


//     });
// }