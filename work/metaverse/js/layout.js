$(document).ready(function(){
    $(".main-visual").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 6000
    });

    /*gnb*/
    $('.gnb').on('mouseover',function(){
        $('.gnb-bg').stop().fadeIn(300);
        $('.depth_2').stop().fadeIn(300);
    });
    $('.gnb').on('mouseleave',function(){
        $('.gnb-bg').stop().fadeOut(300);
        $('.depth_2').stop().fadeOut(300);
    });

    /*mobile menu*/
    $('.mobile-btn').on('click',function(){
        $(this).toggleClass('open');
        $('.mobile-menu').toggleClass('open');
        $('body').toggleClass('mobile-menu-open')
    })
    $('.mobile-menu li').on('click',function(){
        $(this).toggleClass('active').siblings().removeClass('active');
    });
});