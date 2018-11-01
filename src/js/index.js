var menuToggle = document.getElementsByClassName("mobile-menu-toggle")[0];
var mobileMenu = document.getElementsByClassName("mobile-menu")[0];
var closeMenu = document.getElementsByClassName("close-mobile-menu")[0];

menuToggle.onclick = function() {
    mobileMenu.style.transform = "translateX(0%)";
};

closeMenu.onclick = function() {
    mobileMenu.style.transform = "translateX(100%)";
}

// Scroll to  target given anchor with an id
$("a[href^=\\#]").on('click', function (e) {

    // prevents native anchor behavior
    e.preventDefault();

    // store destination
    var dest = $(this).attr('href');

    // close mobile menu
    $("nav.mobile-menu")
        .removeClass("open")
        .css("transform", "translateX(100%)");


    // animate towards the dest via 2ms
    $('html, body').animate({
        scrollTop: $(dest).offset().top
    }, 2000);
});