$(document).ready(function(){
    /*aos*/
    $(function(){
        AOS.init();
    });
    /*slick slide*/
    $(".main-visual").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        fade: true,
        autoplaySpeed: 6000
    });

    /*select*/
    $(".select-chk, .select-btn").on('click',function(){
        $(this).parent(".select").toggleClass('active');
    });

    /*mobile menu*/
    $('.btn-mobile').on('click',function(){
        $('.side-menu').toggleClass('menu-open');
        $(".wrap").toggleClass('menu-open');
    });

    /*nav depth2*/
    $('.side-menu nav li').on('mouseover',function(){
        var checkId =$(this).attr('data-name');
        $("#"+checkId).addClass('open').siblings().removeClass('open');
        $(this).siblings().on('mouseover',function(){
            $("#"+checkId).removeClass('open');
        })
    });
    $('.nav-depth2-wrap').on('mouseleave',function(){
        $(this).children('.depth2').removeClass('open');
    })
});

/*scroll event*/
window.onload = function () {
    var elm = ".main-visual";
    $(elm).each(function (index) {
        // 개별적으로 Wheel 이벤트 적용
        $(this).on("mousewheel DOMMouseScroll", function (e) {
            e.preventDefault();
            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
                if (window.opera) delta = -delta;
            }
            else if (event.detail)
                delta = -event.detail / 3;
            var moveTop = $(window).scrollTop();
            var elmSelecter = $(elm).eq(index);
            // 마우스휠을 위에서 아래로
            if (delta < 0) {
                if ($(elmSelecter).next() != undefined) {
                    try{
                        moveTop = $(elmSelecter).next().offset().top;
                    }catch(e){}
                }
            // 마우스휠을 아래에서 위로
            } else {
                if ($(elmSelecter).prev() != undefined) {
                    try{
                        moveTop = $(elmSelecter).prev().offset().top;
                    }catch(e){}
                }
            }

            // 화면 이동 0.8초(800)
            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 200, complete: function () {
                }
            });
        });
    });
}