$( document ).ready(function() {

    //zoom effect script
    $('img.addZoomEffect').each(function() {
        $(this).parent().prepend('<div class="caption"><div class="caption-content"><i class="fa fa-search-plus fa-3x"></i></div></div>');
    });


    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {

        var configDecallage = 50;

        $('body').on('click', '.page-scroll a', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - configDecallage
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });


    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });


    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 100
    });


    //reduc navbar
    $(function() {

        var nav = $( '.navbar-fixed-top' ),
            didScroll = false,
            changeHeaderOn = 300;

        $(window).scroll(function () {
            if( !didScroll ) {
                didScroll = true;
                setTimeout( scrollPage, 250 );
            }
        });

        function scrollPage() {
            var sy = scrollY();
            if ( sy >= changeHeaderOn ) {
                nav.addClass( 'navbar-shrink' );
            }
            else {
                nav.removeClass( 'navbar-shrink' );
            }
            didScroll = false;
        }

        function scrollY() {
            return window.pageYOffset || document.documentElement.scrollTop;
        }

    });


});