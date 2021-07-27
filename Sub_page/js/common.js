$(function(){

    var mql = window.matchMedia("screen and (max-width: 768px)");
    $(".display-m , .display-w").addClass('display-hide');

    /*처음에 감지*/
    if (mql.matches) {
        $('.display-m').removeClass('display-hide');
        $('.display-w').addClass('display-hide');
    } else {
        $('.display-m').addClass('display-hide');
        $('.display-w').removeClass('display-hide');
    }

    /*해상도 변화 감지*/
    mql.addListener(function(e) {
        if(e.matches) {
            $('.display-m').removeClass('display-hide');
            $('.display-w').addClass('display-hide');
        } else {
            $('.display-m').addClass('display-hide');
            $('.display-w').removeClass('display-hide');
        }
    });

});