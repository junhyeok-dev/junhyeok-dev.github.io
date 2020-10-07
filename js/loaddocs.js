let docs = ["home", "profile", "projects", "publications", "works"];

function loadDoc(num) {
    $("#content").load("docs/" + docs[num] + ".html");
}

$(window).on("load", () => {
    loadDoc(0);

    for (var i = 0; i < docs.length; i++) {
        $("#btn_" + docs[i]).attr("onclick", "loadDoc(" + i + ");");
    }
})