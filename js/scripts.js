// var temperature = ["clear", "sunny", ]



function Day(day) {
    this.day = day
}

Day.prototype.fiveDayforecast = function(days) {
    var days = []
    if (this.day == "monday"){
        days.push("monday", "tuesday", "wednesday", "thursday", "friday", "saturday");
    } else if (this.day == "tuesday") { 
        days.push("tuesday", "wednesday", "thursday", "friday", "saturday", "sunday");
    } else if (this.day == "wednesday") {
        days.push("wednesday", "thursday", "friday", "saturday", "sunday", "monday")
    }
}






$(document).ready(function() {
    $("form#form-weather").submit(function(event){
        event.preventDefault();
        var inputtedDay = $("select#selectDay").val();

        var newDay = new Day(inputtedDay)

        alert(newDay);
    });
});
