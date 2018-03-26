/*jshint esversion: 6*/

openMobileMenu = () => {
    // .mobile-menu-toggle
    let mobileMenuToggle = document.getElementsByClassName("mobile-menu-toggle");

    // nav.mobile-menu
    let navigation = document.getElementsByClassName("mobile-menu");

    // accessing CSS for nav.mobile-menu
    let navigationStyle = navigation.style;

    mobileMenuToggle.onclick = () => {

        // // Add class
        // navigation.className = 'open';

        // // Add transform styling
        // navigationStyle.transform = 'translateX(0)';

        console.log('click!!!!!!');
    };
};

openMobileMenu();
