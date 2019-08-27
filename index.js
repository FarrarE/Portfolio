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



function moveToSlide1() {
    var slide1 = document.getElementById("slide1");
    var slide1Offset = slide1.offsetTop;
    var slide1Position = slide1Offset;
    window.scrollTo(0, slide1Position);
}

function moveToSlide(e, slide) {
    var slide = document.getElementById(slide);
    var slideOffset = slide.offsetTop;
    var slidePosition = slideOffset;
    window.scrollTo(0, slidePosition);
}

// Event Listeners

window.addEventListener('scroll', function(e) {
      let nav = document.getElementById("nav");
      let y = window.scrollY;

      if (y >= 100) {
          nav.className = "nav show"
      } else {
          nav.className = "nav hide"
      }
});