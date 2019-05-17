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
$(window).on('load', function() {
    $preloader = $('.loaderArea'),
        $loader = $preloader.find('.circle-border');
    $loader.fadeOut();
    $preloader.delay(350).fadeOut('slow');
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