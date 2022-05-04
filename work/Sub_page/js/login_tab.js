$(function(){
    //Default Action
    $(".tab-content").hide(); //Hide all content
    $("ul.login-tab li:first a").addClass("active").show();
    $(".tab-content:first").show();

    //On Click Event
    $("ul.login-tab li a").click(function() {
        $("ul.login-tab li a").removeClass("active");
        $(this).addClass("active");
        $(".tab-content").hide();
        var activeTab = $(this).attr("href");
        $(activeTab).fadeIn();
        return false;
    });
});