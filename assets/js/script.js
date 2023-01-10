// Globals.
var currentTime = dayjs();
var currentHour = currentTime.hour();
var pageEl = $("#base");
var schedule = {};
var storedSchedule = JSON.parse(localStorage.getItem("schedule"));

// Function wrapped in JQuery to defer until html elements are loaded.
$(function () {
  for (var i = 0; i <= 23; i++) {
    currentDivEl = $(`#hour-${i}`);
    if (i < currentHour) {
      currentDivEl.addClass("past");
    } else if (i === currentHour) {
      currentDivEl.addClass("present");
    } else {
      currentDivEl.addClass("future");
    }
  }


  // listener for click events on the save button. 
  pageEl.on('click', '.saveBtn', function (event) {
    var buttonParentEl = $(this).parent();
    var currentTextEl = $(buttonParentEl).children().eq(1);
    var parentElId = $(buttonParentEl).attr("id");
    enteredText = currentTextEl[0].value;
    console.log(parentElId);
    console.log(enteredText);
    schedule[parentElId] = enteredText;
    localStorage.setItem(schedule, JSON.stringify(schedule));
  });


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  //
  // TODO: Add code to display the current date in the header of the page.
});
