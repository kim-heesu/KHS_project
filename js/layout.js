$(document).ready(function(){
    console.log(hitcount);

    /*slick slide*/
    $(".page-slide").slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 6000,
        responsive: [
            {  
                breakpoint: 1500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                } 
            },
        ]
    });

    $(".landing-slide").slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 6000,
        responsive: [
            {  
                breakpoint: 1500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                } 
            },
        ]
    });
    $(".banner-slide").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 6000,
    });
});
