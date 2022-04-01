var saveBtn =$(".saveBtn");
//tells the current date
 var currentDay = moment()
 console.log(currentDay)
$("#currentDay").text(currentDay.format('dddd, MMMM Do'));

//tells the current hour
// var timeNow= moment().hour();
var timeNow= 13;
console.log(timeNow)

//save button which stores the data to the local storage
 $(".saveBtn").on("click", function () {
     console.log(this)
     console.log(notevent.target)
    var textValue =$(this).siblings(".color-block").val()
    var timeKey = $(this).parent().attr("id")
    // var textAreaId = timeKey.split("time")
    
    // console.log (textAreaId[1])
    localStorage.setItem(timeKey, textValue)
    // $(".saveBtn").hover(handlerIn, handlerOut)
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



// $(".color-block").each(function(){
//     //create variable for if statement to match number in id
//     var divHour = $(this).parent().attr("id")
//     //if text area is within the same hour as actual time set class to .present
//     if (divHour == timeNow){
//         console.log("time")
//         //remove other classes from <textarea>
//         $(this).removeClass("future")
//         $(this).removeClass("past")
//         // add class present to <textarea>
//         $(this).addClass("present")
//     }
// })
// $(".color-block").each(function (){
//     var eachHour =$(this).parent().attr("id")
    
//     if (eachHour < timeNow){
//         console.log("yay")
        
//         $(this).removeClass(".present"),
//         $(this).removeClass(".future"),
//         $(this).addClass(".past");
//     }
// })
    

// $(".color-block").each(function (){
//     var eachHour =$(this).parent().attr("id")
//     if (eachHour === timeNow){
//         $(this).addClass(".present"),
//         $(this).removeClass(".future"),
//         $(this).removeClass(".past");
//     }
// })
    $(".color-block").each(function (){
        // var eachHour =$(this).parent().attr("id")
        var timeKey = $(this).parent().attr("id")
        var eachHour = timeKey.split("time")
        if (eachHour[1] > timeNow){
            console.log ("future")
            // $(this).removeClass(".present"),
            $(this).addClass("future");
            // $(this).removeClass(".past");
        }
     else if (eachHour[1] == timeNow){
        //  console.log(present)
        $(this).addClass("present");
        // $(this).removeClass("future"),
        // $(this).removeClass("past");
    }
    else if (eachHour[1]<timeNow) {
        // console.log("past")
        // $(this).removeClass("present"),
        // $(this).addClass("future"),
        $(this).addClass("past");
    }
}
)




//  function usePlanner() {

//     $(".hour").each(function() {
//         var currHour = $(this).text();
//         var currPlan = localStorage.getItem(currHour);

//         // console.log(this);
//         // console.log(currHour);

//         if(currPlan !== null) {
//             $(this).siblings(".plan").val(currPlan);
//         }
//     });
// }

// usePlanner();







// })

//     function hourTracker() {
//         //get current number of hours.
//         var currentHour = moment().hour(); // use of moment.js

//         // loop over time blocks
//         $(".time-block").each(function () {
//             var blockHour = parseInt($(this).attr("id").split("hour")[1]);
//             console.log( blockHour, currentHour)

//             //check if we've moved past this time, click into css/html given classes of past, present, or future
//             if (blockHour < currentHour) {
//                 $(this).addClass("past");
//                 $(this).removeClass("future");
//                 $(this).removeClass("present");
//             }
//             else if (blockHour === currentHour) {
//                 $(this).removeClass("past");
//                 $(this).addClass("present");
//                 $(this).removeClass("future");
//             }
//             else {
//                 $(this).removeClass("present");
//                 $(this).removeClass("past");
//                 $(this).addClass("future");
//             }
//         })
//     }
//     hourTracker(); //re-run function
// })






//html

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





