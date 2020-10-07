let slidenum = 0;
var prjslide;

let NUM_SLIDE = 4

function nextSlide() {
    if (slidenum === NUM_SLIDE - 1) {
        slidenum = 0;
    } else {
        slidenum++;
    }
    showSlide(slidenum);
}

function showSlide(n) {
    for (var i = 0; i < NUM_SLIDE; i++) {
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