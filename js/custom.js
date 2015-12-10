$(document).ready(function() {
    /* wow ======================================= */

    new WOW().init({
        offset: 20
    });


    /* Hero slider ======================================= */

    $('#hero-slides').superslides({
        play: 4000,
        animation: 'fade'
    });

    var owl = $("#owl-demo");

    owl.owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        margin: 20,
        items: 3,
        pagination: false,
        navigation: false,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        lazyLoad: true

    });


    $(".next").click(function() {
        owl.trigger('owl.next');
    })
    $(".prev").click(function() {
        owl.trigger('owl.prev');
    })

});

function co() {

    console.log("idem to");
}