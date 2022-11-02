// 방문자수 체크
expireDate = new Date;
expireDate.setMonth(expireDate.getMonth()+3);
hitcount = eval(cookieVal('pageHit'));
hitcount ++;
document.cookie = 'pageHit' + hitcount + ';expires=' + expireDate.toGMTString();
function cookieVal(cookieName){
    thisCookie = document.cookie.split(';');
    for(i=0; i<thisCookie.length; i++){
        if(cookieName == thisCookie[i].split('=')[0]){
            return thisCookie[i].split('=');
        }
    }
    return 0;
}

$(document).ready(function(){
    console.log(hitcount);
    
    /*aos*/
    $(function(){
        AOS.init();
    });
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
