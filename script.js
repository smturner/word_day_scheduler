//variable for save button
var saveBtn =$(".saveBtn");
//tells the current date
 var currentDay = moment()
$("#currentDay").text(currentDay.format('dddd, MMMM Do'));

//tells the current hour
var timeNow= moment().hour();

//save button which stores the data to the local storage
 $(".saveBtn").on("click", function () {
     console.log("hello")
    //  console.log(notevent.target)
    var textValue =$(this).siblings(".color-block").val()
    console.log(textValue)
    var timeKey = $(this).parent().attr("id")    
    console.log(timeKey)
    localStorage.setItem(timeKey, textValue)
 });


//how the data stays on the screen
$("#time9 .color-block").val(localStorage.getItem("time9"))
$("#time10 .color-block").val(localStorage.getItem("time10"))
$("#time11 .color-block").val(localStorage.getItem("time11"))
$("#time12 .color-block").val(localStorage.getItem("time12"))
$("#time13 .color-block").val(localStorage.getItem("time13"))
$("#time14 .color-block").val(localStorage.getItem("time14"))
$("#time15 .color-block").val(localStorage.getItem("time15"))
$("#time16 .color-block").val(localStorage.getItem("time16"))
$("#time17 .color-block").val(localStorage.getItem("time17"))

//function to color code the time blocks
    $(".color-block").each(function (){
        var timeKey = $(this).parent().attr("id")
        var eachHour = timeKey.split("time")
        if (eachHour[1] > timeNow){
            $(this).addClass("future");
        }
     else if (eachHour[1] == timeNow){
        $(this).addClass("present");
    }
    else if (eachHour[1]<timeNow) {
        $(this).addClass("past");
    }
}
)






//psuedo coding
//Create basic HTML to resemble mockup-using CSS
    //create 9 rows with 3 columns each 
    //use container and row
    //(hour column use col-md-1, description column col-md-10, save column col-md-1)

//3 columns and 9 rows
//color coding for functionality
//date at the top
//need to  connect current time
//past times are grey, current time is red, future time is green

//The css file is giving us lots of hints on what needs to be used by their class names
//Everything is styled for me in CSS

// set up an event listener for our save button
    //listen for clicks on each time blocks save button then save to local storage
    //pull saved data from local storage and display it on the webpage

//figut out how to create our text area for the description-where we write

//display the day of week, month and day of month-look at moment.js and see how they got that exact format
//moment.js figure out formatting
    //How to track hours
    //startOf function?--to maybe track hours

// color coding of time blocking
    //function to track our hours if, else, if, else
    //if current hour > time block hour set it to past
    //else if current hour === time block hour set it to present
    //else set time blocks to future





