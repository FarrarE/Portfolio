function changeTab(evt, tab) {
    let tabcontent, tablinks;

    document.getElementById("default").style.display = "none";
    tabcontent = document.getElementsByClassName("tabcontent");

    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    tablinks = document.getElementsByClassName("tablinks");

    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    document.getElementById(tab).style.display = "block";
    evt.currentTarget.className += " active";
}