function toggleMenu() {
    var navbar = document.getElementById("navbar").querySelector("ul");
    navbar.classList.toggle("active");
    document.body.classList.toggle("menu-open");
}
const hamburgerButton = document.querySelector('.menu-icon');
        
        hamburgerButton.addEventListener('click', function() {
            this.classList.toggle('active');
        });
/*dark-mode*/
function myFunction() {
    var element = document.body;
     element.classList.toggle("dark-mode");
     }