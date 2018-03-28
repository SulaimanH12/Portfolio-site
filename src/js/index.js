function toggleMenu() {
    var mobileMenu = document.getElementsByClassName("mobile-menu")[0];

    // if is menuBox displayed, hide it
    if (mobileMenu.style.transform == "translateX(0%)") {
        mobileMenu.style.transform = "translateX(100%)";
    } else {
        mobileMenu.style.transform = "translateX(0%)";
        console.log('close meee');
    }
}

// function closeMenu() {
//     var mobileMenu = document.getElementsByClassName("mobile-menu")[0];

//     // if is menuBox displayed, hide it
//     if (mobileMenu.style.transform == "translateX(100%)") {
//         mobileMenu.style.transform = "translateX(0%)";
//     } else {
//         mobileMenu.style.transform = "translateX(100%)";
//         console.log('close meee');
//     }
// }