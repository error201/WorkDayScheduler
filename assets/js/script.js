// Globals.
var currentTime = dayjs();
var currentHour = currentTime.hour();
var pageEl = $("#base");
var schedule = {};
storedSchedule = JSON.parse(localStorage.getItem("schedule"));
if (storedSchedule) {
  schedule = storedSchedule;
}
console.log(storedSchedule);

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
    schedule[parentElId] = enteredText;
    localStorage.setItem("schedule", JSON.stringify(schedule));
  });


  // Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. 
  if (storedSchedule) {
    $(".time-block").each(function (index) {
      var currentId = $(this).attr("id")
      var textEl = $(this).children().eq(1)[0];
      for ([key, value] of Object.entries(storedSchedule)) {
        if (key == currentId) {
          $(textEl).text(value);
        };
      }
    })
  }
  //
  // Add code to display the current date in the header of the page.
  currentDate = currentTime.format("YYYY-MM-DD")
  dateEl = $("#currentDay");
  $(dateEl).text(currentDate);
});
