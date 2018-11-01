var menuToggle = document.getElementsByClassName("mobile-menu-toggle")[0];
var mobileMenu = document.getElementsByClassName("mobile-menu")[0];
var closeMenu = document.getElementsByClassName("close-mobile-menu")[0];

menuToggle.onclick = function() {
    mobileMenu.style.transform = "translateX(0%)";
};

closeMenu.onclick = function() {
    mobileMenu.style.transform = "translateX(100%)";
}