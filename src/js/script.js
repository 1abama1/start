$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 3,
        loop: true,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
});