let slidenum = 0;
var prjslide;

function nextSlide() {
    if (slidenum === 1) {
        slidenum = 0;
    } else {
        slidenum++;
    }
    showSlide(slidenum);
}

function showSlide(n) {
    for (var i = 0; i < 2; i++) {
        if (i === slidenum) {
            $("#slide" + i).css("display", "block");
        } else {
            $("#slide" + i).css("display", "none");
        }
    }
}

$(window).on("load", function () {
    showSlide(0);
    prjslide = setInterval(function () {
        nextSlide();
    }, 5000);
})


$(window).on("unload", clearInterval(prjslide));