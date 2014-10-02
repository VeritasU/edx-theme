var showEducatorPanel = function() {
    $("#educator-button").addClass('active');
    $("#student-button").removeClass('active');
    $("#student-landing-panel").hide();
    $(".student-content").hide();
    $(".educator-content").show();
    $("#educator-landing-panel").show();
}

var showStudentPanel = function() {
    $("#student-button").addClass('active');
    $("#educator-button").removeClass('active');
    $(".student-content").show();
    $(".educator-content").hide();
    $("#educator-landing-panel").hide();
    $("#student-landing-panel").show();
}

