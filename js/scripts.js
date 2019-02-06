// var temperature = ["clear", "sunny", ]

function Day(day, temp, precip) {
    this.day = day,
    this.temp = temp,
    this.precip = precip
}



$(document).ready(function() {
    $("form#form-weather").submit(function(event){
        event.preventDefault();

        var tempArray = [...Array(70).keys()];
        var precipArray = ["blizzard", "snow", "cloudy", "light-rain", "rain", "heavy-rain", "sunny", "windy", "oh-snap a tornado", "clear-sky"]
        
        var randomTemp = tempArray[Math.floor(Math.random() * tempArray.length)];
        var randomPrecip = precipArray[Math.floor(Math.random() * precipArray.length)];
        
        var dayArray = [];
        var newDay = ["var day1", "var day2", "var day3", "var day4", "var day5"];
       
        var inputtedDay = $("select#selectDay").val();
       
        if (inputtedDay == "monday"){
            dayArray.push("monday", "tuesday", "wednesday", "thursday", "friday", "saturday");
        } else if (inputtedDay == "tuesday") { 
            dayArray.push("tuesday", "wednesday", "thursday", "friday", "saturday", "sunday");
        } else if (inputtedDay == "wednesday") {
            dayArray.push("wednesday", "thursday", "friday", "saturday", "sunday", "monday");
        } else if (inputtedDay == "thursday") {
            dayArray.push("thursday", "friday", "saturday", "sunday", "monday", "tuesday");
        } else if (inputtedDay == "friday") {
            dayArray.push("friday", "saturday", "sunday", "monday", "tuesday", "wednesday");
        }


        for (i = 0; i < dayArray.length; i++) {
           newDay[i] = new Day(dayArray[i], randomTemp, randomPrecip);  
           $("ol#show-days").append("<li>" + dayArray[i] + ":" + " " + randomTemp + randomPrecip + "</li>");
        }

        // var fiveDays = newDay;

        // for (i = 0; i < fiveDays.length; i++) {
        //     $("ol#show-days").append("<br/><li>" + fiveDays[i] + "</li>");
        // }
        
    });
});

// "<br/>" + randomTemp + "<br/>" + randomPrecip + 