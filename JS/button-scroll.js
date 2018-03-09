/* learn more button */
$(".scroll-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 2000);
});

/* About button in navbar */
$(".about-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 2000);
});

/* Portfolio scroll */
$(".portfolio-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top
    }, 2000);
});

/* Contact scroll */
$(".contact-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 2000);
});

/* back to top scroll */
$(".home-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#home").offset().top
    }, 2000);
});