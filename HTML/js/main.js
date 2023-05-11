(function($) {

    'use strict'; 

    new WOW().init();

        /*-----------------------------------------------------------------------------------*/
        /*  Preloader
        /*-----------------------------------------------------------------------------------*/

        $(window).load(function() { 
            $('#status').fadeOut(); 
            $('#preloader').delay(350).fadeOut('fast'); 
            $('body').delay(350).css({'overflow':'visible'});

        });

        /*-----------------------------------------------------------------------------------*/
        /*  Search
        /*-----------------------------------------------------------------------------------*/

        $('.search').on('click', function () {
            $('.search-input input').toggleClass('show');
        });

        /*-----------------------------------------------------------------------------------*/
        /*  Slider Home
        /*-----------------------------------------------------------------------------------*/
        $('.flexslider').flexslider({
            animation: "fade"
        });

        var windowWidth = $(window).width();

        function sliderEqualHeight() {
            var slideHeight = $('#slider.home-slider ul li.slide-item');
            var slideWrap = $('#slider.home-slider .caption-wrap').height();

                slideHeight.css('min-height', slideWrap + 450);
        }

        function logisticsEqualHeight() {
            if( windowWidth > 789 ) {
            var postLeft = $('.services-calculator-wrap .form-section form');
            var postRight = $('.services-calculator-wrap').height();

                postLeft.css('height', postRight);
            }
        }

        function pagetitleEqualHeight() {
            var titleHeight = $('.page-title');
            var titleWrap = $('.page-title .title-wrap').height();

                titleHeight.css('min-height', titleWrap + 300);
        }

        window.onload = function() {
            logisticsEqualHeight()
            sliderEqualHeight()
            pagetitleEqualHeight();
        };

        window.onresize = function() {
            logisticsEqualHeight()
            sliderEqualHeight()
            pagetitleEqualHeight();
        };

        var siteHeaderHeight = $('.site-header').height(),
            backgroundSlider = $('.home-slider'),
            pageTitle = $('.page-title');

        backgroundSlider.css('margin-top', -siteHeaderHeight);
        pageTitle.css('margin-top', -siteHeaderHeight);

        /*-----------------------------------------------------------------------------------*/
        /*  Slider
        /*-----------------------------------------------------------------------------------*/
        
        $('.company-slider').flexslider({
            animation: "slide",
            autoplay: true
        });

        /*-----------------------------------------------------------------------------------*/
        /*  Services
        /*-----------------------------------------------------------------------------------*/

        $('.services-wrap-carousel').owlCarousel({
            stagePadding: 50,
            loop:true,
            margin:10,
            nav:true,
            dots:false,
            navText: [
              "<i class='icon icon-ios-arrow-thin-left'></i>",
              "<i class='icon icon-ios-arrow-thin-right'></i>"
              ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                },
                1200:{
                    items:2
                }
            }
        })

        /*-----------------------------------------------------------------------------------*/
        /*  Testimonial
        /*-----------------------------------------------------------------------------------*/

        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:30,
            nav:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:2
                }
            }
        })

        /*-----------------------------------------------------------------------------------*/
        /*  Latest Post & Team Member
        /*-----------------------------------------------------------------------------------*/

        $('.post-wrap, .team-wrap').owlCarousel({
            loop:true,
            margin:30,
            nav:true,
            navText: [
              "<i class='icon icon-arrow-left'></i>",
              "<i class='icon icon-arrow-right'></i>"
              ],
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:3
                }
            }
        })

        /*-----------------------------------------------------------------------------------*/
        /*  Number Counter
        /*-----------------------------------------------------------------------------------*/

        $('.counter').counterUp({
            delay: 20,
            time: 3000
        });

        /*-----------------------------------------------------------------------------------*/
        /*  Mobile Menu
        /*-----------------------------------------------------------------------------------*/

        var slideRight = new Menu({
            wrapper: '#main-wrapper',
            type: 'slide-right',
            menuOpenerClass: '.slide-button',
            maskId: '#slide-overlay'
        });

        var slideRightBtn = document.querySelector('#slide-buttons');
      
        slideRightBtn.addEventListener('click', function(e) {
            e.preventDefault;
            slideRight.open();
        });

        $(".slide-menu-items li.has-sub").click(function () {
            $('.slide-menu-items li.has-sub ul').not($(this).children("ul").slideToggle()).hide();  
        });

})(jQuery); 