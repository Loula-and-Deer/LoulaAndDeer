$(document).ready(function () {
    $('label[for*="product-select"]').remove();

    $(".tab-link").click(function () {
        var tabcontent, tablinks;

        tabcontent = $(".tab-content");
        tablinks = $(".tab-link");

        tabcontent.each(function(){
            $(this).css("display", "none");
        });

        tablinks.each(function(){
            $(this).removeClass("active");
        });

        $("#" + $(this).data("tab")).css("display", "block");
        $(this).addClass("active");
    });

    $("#defaultTab").click();
});