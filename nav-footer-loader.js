//function to load navbar and footer dynamically

function loadNavbar() {
    fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("navbar-container").innerHTML = data;
    })
}

//function to load footer synamically
function loadFooter() {
    fetch("footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer-container").innerHTML = data;

    })
}

//load navbar and footer on page load
document.addEventListener("DOMContentLoaded", function() {
    loadNavbar();
    loadFooter()
});