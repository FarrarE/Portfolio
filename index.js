function changeTab(evt, tab) {
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");

    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    tablinks = document.getElementsByClassName("tablinks");

    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    document.getElementById(tab).style.display = "block";
    evt.currentTarget.className += " active";
}

function moveToSlide(e, slide) {
    var slide = document.getElementById(slide);
    var slideOffset = slide.offsetTop;
    var slidePosition = slideOffset;
    window.scrollTo(0, slidePosition);
}

// Event Listeners

// shows the nav bar once the user begins to scroll
window.addEventListener('scroll', function(e) {
    let nav = document.getElementById("nav");
    let y = window.scrollY;
    let height = document.documentElement.clientHeight;
    if( y >= 100){
        nav.className = "nav show";
        document.getElementById("pip1").className = "pip active";
        document.getElementById("pip2").className = "pip";
        document.getElementById("pip3").className = "pip";
        document.getElementById("pip4").className = "pip";

        if (y >= height) {
            document.getElementById("pip2").className = "pip active";
            document.getElementById("pip1").className = "pip";
            document.getElementById("pip3").className = "pip";
            document.getElementById("pip4").className = "pip";
        }
        if (y >= 2 * height) {
            document.getElementById("pip3").className = "pip active";
            document.getElementById("pip1").className = "pip";
            document.getElementById("pip2").className = "pip";
            document.getElementById("pip4").className = "pip";
        }
        if (y >= 2.5 * height) {
            document.getElementById("pip4").className = "pip active";
            document.getElementById("pip1").className = "pip";
            document.getElementById("pip3").className = "pip";
            document.getElementById("pip2").className = "pip";
        }
    } else {
        nav.className = "nav hide";
    }
});