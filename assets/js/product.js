$(document).ready(function () {
    var el = $(".description"),
        exdesc = $("#expand-description"),
        curHeight = el.height(),
        autoHeight = el.css('height', 'auto').height();

    el.height("150px");
    if (autoHeight <= 150) {
        exdesc.remove();
    }

    $('label[for*="product-select"]').remove();

    exdesc.on("click", function () {
        el.height(curHeight).animate({ height: autoHeight }, 600);
        exdesc.remove();
    });
});