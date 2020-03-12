$(document).ready(function() {

    $(".dropdown").on("click", function() {
        console.log("a")
        $(".dropDownContent").toggleClass("open");

    });

});