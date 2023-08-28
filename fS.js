// Wait for the page to load
document.addEventListener("DOMContentLoaded", function(){
    const title = document.getElementById("fan") // I get the content of the h2 element
    if(window.innerWidth <= 767){ // Check the size of the window.
        title.textContent = "AFS"
    }

    window.addEventListener('resize', function() {
        if (window.innerWidth <= 767) {
            title.textContent = "AFS"
        }
        else{
            title.textContent = "ANIME FAN SITE"
        }
    });
})