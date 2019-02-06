// var temperature = ["clear", "sunny", ]



function Day(day) {
    this.day = day
}

Day.prototype.fiveDayforecast = function() {
    var nextDays = [ ]
    if (this.day == "monday"){
        nextDays.push("monday", "tuesday", "wednesday", "thursday", "friday", "saturday");
    } else if (this.day == "tuesday") { 
        nextDays.push("tuesday", "wednesday", "thursday", "friday", "saturday", "sunday");
    } else if (this.day == "wednesday") {
        nextDays.push("wednesday", "thursday", "friday", "saturday", "sunday", "monday");
    } else if (this.day == "thursday") {
        nextDays.push("thursday", "friday", "saturday", "sunday", "monday", "tuesday");
    } else if (this.day == "friday") {
        nextDays.push("friday", "saturday", "sunday", "monday", "tuesday", "wednesday");
    }
    return nextDays;
};

$(document).ready(function() {
    $("form#form-weather").submit(function(event){
        event.preventDefault();
        var inputtedDay = $("select#selectDay").val();

        var newDay = new Day(inputtedDay);
        var fiveDays = newDay.fiveDayforecast();

        for (i = 0; i < fiveDays.length; i++) {
            $("ol#show-days").append("<br/><li>" + fiveDays[i] + "</li>");
        }
        
    });
});