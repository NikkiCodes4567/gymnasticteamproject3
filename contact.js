$(document).ready(function() {
    $("#feedback").on("submit", function() {
        var formValid = true;

        var nameIsValid = $("#userName").prop("validity").valid;
        if(nameIsValid) {
        $("#nameError").addClass("hidden");
        } else {
        formValid = false;
        $("#nameError").removeClass("hidden");
        }

        var emailIsValid = $("#userEmail").prop("validity").valid;
        if(emailIsValid) {
        $("#emailError").addClass("hidden");
        } else {
        formValid = false;
        $("#emailError").removeClass("hidden");
        }

        var userEventIsValid = $("#userEvent").prop("validity").valid;
        if(userEventIsValid){
            $("#eventError").addClass("hidden");
        } else {
            formValid = false;
            $("#eventError").removeClass("hidden");
        }

        var userQuestionsIsValid = $("#userQuestions").prop("validity").valid;
        if(userQuestionsIsValid){
            $("#questionsError").addClass("hidden");
        } else {
            formValid = false;
            $("#questionsError").removeClass("hidden");
        }

        return formValid;
    });
});
