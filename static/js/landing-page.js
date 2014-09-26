var showEducatorPanel = function() {
    $("#educator-button").addClass('active');
    $("#student-button").removeClass('active');
    $("#student-landing-panel").hide();
    $("#educator-landing-panel").show();
}

var showStudentPanel = function() {
    $("#student-button").addClass('active');
    $("#educator-button").removeClass('active');
    $("#educator-landing-panel").hide();
    $("#student-landing-panel").show();
}

