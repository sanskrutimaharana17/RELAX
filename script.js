function changeimage() {
    var image = document.getElementById('myimage');
    if (image.src.match("okish.gif")) {
        //image.src = "200w.webp";
        image.src = "okish.gif";
    } else {
        image.src = "okish.gif";

    }
}