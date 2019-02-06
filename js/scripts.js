function Day(day, temp, precip) {
    this.day = day,
    this.temp = temp,
    this.precip = precip,
    this.classStatus = undefined
}

Day.prototype.classStatus2 = function() {
    if (this.precip == "blizzard" || "snow" || "oh-snap a tornado"){
        return this.classStatus = "closed";
    } else {
        return this.classStatus = "open";
    }
        
}

Day.prototype.addWeek = function() {
    this.week.push(Day);
}

$(document).ready(function() {
    $("form#form-weather").submit(function(event){
        event.preventDefault();
        
        var inputtedDay = $("select#selectDay").val();

        var tempArray = [...Array(70).keys()];
        var precipArray = ["blizzard", "snow", "cloudy", "light-rain", "rain", "heavy-rain", "sunny", "windy", "oh-snap a tornado", "clear-sky"]
        
        tempArray[Math.floor(Math.random() * tempArray.length)];
        precipArray[Math.floor(Math.random() * precipArray.length)];
        
        var dayArray = [];
        
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

        var newDay0 = new Day(dayArray[0], tempArray[Math.floor(Math.random() * tempArray.length)], precipArray[Math.floor(Math.random() * precipArray.length)]);
        var newDay1 = new Day(dayArray[1], tempArray[Math.floor(Math.random() * tempArray.length)], precipArray[Math.floor(Math.random() * precipArray.length)]);
        var newDay2 = new Day(dayArray[2], tempArray[Math.floor(Math.random() * tempArray.length)], precipArray[Math.floor(Math.random() * precipArray.length)]);
        var newDay3 = new Day(dayArray[3], tempArray[Math.floor(Math.random() * tempArray.length)], precipArray[Math.floor(Math.random() * precipArray.length)]);
        var newDay4 = new Day(dayArray[4], tempArray[Math.floor(Math.random() * tempArray.length)], precipArray[Math.floor(Math.random() * precipArray.length)]);
        var newDay5 = new Day(dayArray[5], tempArray[Math.floor(Math.random() * tempArray.length)], precipArray[Math.floor(Math.random() * precipArray.length)]);

        // var status0 = newDay0.classStatus
        // var status1 = newDay1.classStatus
        // var status2 = newDay2.classStatus
        // var status3 = newDay3.classStatus
        // var status4 = newDay4.classStatus
        // var status5 = newDay5.classStatus


        $("li#day0").text(newDay0.day);
        $("li#day0-temp").text(newDay0.temp);
        $("li#day0-precip").text(newDay0.precip);
        $("li#day0-classStatus").text(newDay0.classStatus2);

        $("li#day1").text(newDay1.day);
        $("li#day1-temp").text(newDay1.temp);
        $("li#day1-precip").text(newDay1.precip);
        $("li#day1-classStatus").text(newDay1.classStatus2);

        $("li#day2").text(newDay2.day);
        $("li#day2-temp").text(newDay2.temp);
        $("li#day2-precip").text(newDay2.precip);
        $("li#day2-classStatus").text(newDay2.classStatus2);
        
        $("li#day3").text(newDay3.day);
        $("li#day3-temp").text(newDay3.temp);
        $("li#day3-precip").text(newDay3.precip);
        $("li#day3-classStatus").text(newDay3.classStatus2);

        $("li#day4").text(newDay4.day);
        $("li#day4-temp").text(newDay4.temp);
        $("li#day4-precip").text(newDay4.precip);
        $("li#day4-classStatus").text(newDay4.classStatus2);

        $("li#day5").text(newDay5.day);
        $("li#day5-temp").text(newDay5.temp);
        $("li#day5-precip").text(newDay5.precip);
        $("li#day5-classStatus").text(newDay5.classStatus2);



        // var fiveDays = newDay;

        // for (i = 0; i < fiveDays.length; i++) {
        //     $("ol#show-days").append("<br/><li>" + fiveDays[i] + "</li>");
        // }
        
    });
});

// "<br/>" +         tempArray[Math.floor(Math.random() * tempArray.length)];
//  + "<br/>" + precipArray[Math.floor(Math.random() * precipArray.length)]; + 