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

        var tempArray = [...Array(70).keys()];
        var precipArray = ["blizzard", "snow", "cloudy", "light-rain", "rain", "heavy-rain", "sunny", "windy", "oh-snap a tornado", "clear-sky"]
        
        var randomTemp = tempArray[Math.floor(Math.random() * tempArray.length)];
        var randomPrecip = precipArray[Math.floor(Math.random() * precipArray.length)];

        var newDay = new Day(inputtedDay);
        var fiveDays = newDay.fiveDayforecast();

        for (i = 0; i < fiveDays.length; i++) {
            $("ol#show-days").append("<br/><li>" + fiveDays[i] + "<br/>" + randomTemp + "<br/>" + randomPrecip + "</li>");
        }
        
    });
});