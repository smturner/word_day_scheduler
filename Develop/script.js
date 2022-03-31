var timeBlock= $(".time-block");
console.log (timeBlock)
var currentDay = moment()
// document.getElementById("currentDay")
// currentDay=moment()
console.log(currentDay)
$("#currentDay").text(currentDay.format('dddd, MMMM Do'));

var timeNow= moment().hour();
console.log(timeNow)

if (timeNow<timeBlock) {
    console.log("green")

}else if (timeNow===timeBlock)

// function setColors()
   
    
// if (timeNow > timeBlock){
//     console.log(green)
// }
    
// function setColor() {
//     var b = new Date();
//     var bNow = b.getHours();
//     if (bNow >= 9 && bNow < 10) {
//         taskNineInput.addClass("present")
//     }
// } setColor()
    


//if current hour > time block hour set it to past
    //else if current hour === time block hour set it to present
    //else set time blocks to future


// var saveBtn = $(".saveBtn");
// saveBtn.on("click", function (){
//     var text =$(this).siblings(".description").val();
//     var time =$(this).parent().attr("id");
// })

//the point of this assignment is using the bootstrap and figuring out the logic for javascript
// make sure all the links to CDNs are working properly


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





