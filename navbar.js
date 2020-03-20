window.onscroll = function() {

    if (window.pageYOffset > 400) {
        document.getElementById("navbar").style.background = "rgba(2,44,72,0.9)";
    } else {
        document.getElementById("navbar").style.background = "transparent";
    }
}
