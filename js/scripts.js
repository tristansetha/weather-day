function Day(days, temp, precip) {
    this.days = days,
    this.temp = temp,
    this.precip = precip
}

Day.prototype.classStatus2 = function() {
    if (this.precip === "blizzard"){
        return "closed";
    } else if (this.precip === "snow"){
        return "closed";
    } else if (this.precip === "oh-snap a tornado") {
        return "closed";
    } else {
        return "open";
    }        
}

$(document).ready(function() {
    $("form#form-weather").submit(function(event){
        event.preventDefault();
        
        var inputtedDay = $("select#selectDay").val();

        var tempArray = [...Array(70).keys()];
        var precipArray = ["blizzard", "snow", "cloudy", "light-rain", "rain", "heavy-rain", "sunny", "windy", "oh-snap a tornado", "clear-sky"];
        
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
        };

        var newDay0 = new Day(dayArray[0], tempArray[Math.floor(Math.random() * tempArray.length)], precipArray[Math.floor(Math.random() * precipArray.length)]);
        var newDay1 = new Day(dayArray[1], tempArray[Math.floor(Math.random() * tempArray.length)], precipArray[Math.floor(Math.random() * precipArray.length)]);
        var newDay2 = new Day(dayArray[2], tempArray[Math.floor(Math.random() * tempArray.length)], precipArray[Math.floor(Math.random() * precipArray.length)]);
        var newDay3 = new Day(dayArray[3], tempArray[Math.floor(Math.random() * tempArray.length)], precipArray[Math.floor(Math.random() * precipArray.length)]);
        var newDay4 = new Day(dayArray[4], tempArray[Math.floor(Math.random() * tempArray.length)], precipArray[Math.floor(Math.random() * precipArray.length)]);
        var newDay5 = new Day(dayArray[5], tempArray[Math.floor(Math.random() * tempArray.length)], precipArray[Math.floor(Math.random() * precipArray.length)]);

        $("li#day0").text(newDay0.days);
        $("li#day0-temp").text(newDay0.temp + " " + "degrees");
        $("li#day0-precip").text(newDay0.precip);
        
        $("button#check-class-status").click(function(){
            $("li#day0-classStatus").text(newDay0.classStatus2());
            $("li#day0-classStatus").toggle();
        });
        

        $("li#day1").text(newDay1.days);
        $("li#day1-temp").text(newDay1.temp + " " + "degrees");
        $("li#day1-precip").text(newDay1.precip);

        $("button#check-class-status").click(function(){
            $("li#day1-classStatus").text(newDay1.classStatus2());
            $("li#day1-classStatus").toggle();
        });

        $("li#day2").text(newDay2.days);
        $("li#day2-temp").text(newDay2.temp + " " + "degrees");
        $("li#day2-precip").text(newDay2.precip);

        $("button#check-class-status").click(function(){
            $("li#day2-classStatus").text(newDay2.classStatus2());
            $("li#day2-classStatus").toggle();
        });
        
        $("li#day3").text(newDay3.days);
        $("li#day3-temp").text(newDay3.temp + " " + "degrees");
        $("li#day3-precip").text(newDay3.precip);

        $("button#check-class-status").click(function(){
            $("li#day3-classStatus").text(newDay3.classStatus2());
            $("li#day3-classStatus").toggle();
        });

        $("li#day4").text(newDay4.days);
        $("li#day4-temp").text(newDay4.temp + " " + "degrees");
        $("li#day4-precip").text(newDay4.precip);

        $("button#check-class-status").click(function(){
            $("li#day4-classStatus").text(newDay4.classStatus2());
            $("li#day4-classStatus").toggle();
        });

        $("li#day5").text(newDay5.days);
        $("li#day5-temp").text(newDay5.temp + " " + "degrees");
        $("li#day5-precip").text(newDay5.precip);

        $("button#check-class-status").click(function(){
            $("li#day5-classStatus").text(newDay5.classStatus2());
            $("li#day5-classStatus").toggle();
        });
        
    });
});
