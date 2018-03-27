var openMobileMenu = function () {
    // .mobile-menu-toggle
    var mobileMenuToggle = document.getElementsByClassName("mobile-menu-toggle");

    // nav.mobile-menu
    var navigation = document.getElementsByClassName("mobile-menu");

    // accessing CSS for nav.mobile-menu
    var navigationStyle = navigation.style;

    mobileMenuToggle.onclick = function () {

        // Add class
        navigation.className = 'open';

        // Add transform styling
        navigationStyle.transform = 'translateX(0)';

        console.log('click!!!!!!');
    };
};

openMobileMenu();
