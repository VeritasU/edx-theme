$(document).ready(function () {

    // Toggle the active button the nav header
    var currentPathname = $(location).attr('pathname');
    if (currentPathname == '/features') {
        $("#features-nav-button").addClass("active");
    } else if (currentPathname == '/courses') {
        $("#courses-nav-button").addClass("active");
    } else if (currentPathname == '/about') {
        $("#about-nav-button").addClass("active");
    }
    
});
