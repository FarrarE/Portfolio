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

      if (y >= 300) {
          nav.className = "nav show"
      } else {
          nav.className = "nav hide"
      }
});