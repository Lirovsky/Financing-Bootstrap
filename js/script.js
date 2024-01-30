// iniciar wow
new WOW().init(); 

// carousel options
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    autoplay: true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        500:{
            items:2
        },
        900:{
            items:3
        }
    }
})

// buttons carousel
var owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customPrevBtn').click(function() {
    owl.trigger('prev.owl.carousel');
})
