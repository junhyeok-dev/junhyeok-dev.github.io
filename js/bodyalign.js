function setbodymargin() {
    var windowSize = $(window).width();
    console.log(windowSize);
    if (windowSize > 1280) {
        $("body").css("margin-left", "calc(50% - 640px)");
    } else {
        $("body").css("margin-left", "0");
    }
}

$(window).on("load", function () {
    setbodymargin();
});
$(window).on("resize", function () {
    setbodymargin();
});