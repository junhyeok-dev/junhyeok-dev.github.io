$(window).on("load", () => {
    let menus = $("#menu > li");
    let docs = ["profile", "publications"];

    for (var i = 0; i < menus.length; i++) {
        menus[i].on("click", (i) => {
            $("#content").load("docs/" + docs[i] + ".html")
        })
    }
});