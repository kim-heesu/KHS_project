$(function(){
    /*modal*/
    $('.modal-open').on('click',function(){
        var modalName = $(this).attr('data-name');
        $("#"+modalName).addClass('open');

        var modalHeight = $('.modal-content').outerHeight() * -1 /2;
        $('.modal-content').css('margin-top',modalHeight);
    });
    $('.modal-close').on('click',function(){
        $(this).parents('.modal').removeClass('open');
    });

    /*side*/
    $(".side-menu li span").on('click',function(){
        $(this).parents('li').toggleClass('open').siblings().removeClass('open');
    });
});