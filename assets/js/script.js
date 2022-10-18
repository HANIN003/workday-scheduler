//Save button variable for listen function
var saveBtn = $(".saveBtn");

$(document).ready(function () {
//Show current day in header
$("#currentDay").text(moment().format('MMMM Do YYYY'));

function timeBlockHour() {
    var hours = moment().hours();
    $(".time-block").each(function() {
        var presentTime = parseInt($(this).attr("id"));
        if (presentTime > hours) {
            $(this).addClass("future");
        } else if (presentTime === hours) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

//Event listener
saveBtn.on("click", function(event) {
    event.preventDefault();

var hour = $(this).siblings(".hour").text();
var description = $(this).siblings(".description").val();
localStorage.setItem(hour, description);
});

function workSchedule() {
    $(".hour").each(function () {
        var currentHour = $(this).text();
        var currentDescription = localStorage.getItem(currentHour);

        if(currentDescription !== null) {
            $(this).siblings(".description").val(currentDescription);
        }
    });
}

timeBlockHour()
workSchedule() 
})