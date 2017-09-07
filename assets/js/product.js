$(document).ready(function () {
  $('label[for*="product-select"]').remove();

    var el = $(".description"),
        exdesc = $("#expand-description");

    // if (autoHeight <= 150) {
    //     exdesc.remove();
    // }

    exdesc.on("click", function () {
        el.switchClass("description", "description-expanded", 400);
        exdesc.remove();
    });
});
