var countDownDate = new Date().getFullYear();
const calendar = document.getElementById("calendar");
const today = document.querySelector(".today");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");



calendar.addEventListener("change", function () {
  var dateinput = this.value;
  var timecalendar = new Date(dateinput);
  // dates ↓
  const timer = {
    day: timecalendar.getDate(),
    hour: timecalendar.getHours(),
    mins: timecalendar.getMinutes(),
    secs: timecalendar.getSeconds(),
  };
  createClock(timer);
});


function createClock(timer) {

  console.log(timer.day)
  today.innerHTML = timer.day + ' de ' + "";
  hours.textContent = timer.hour + 1;

  if(timer.mins === 0) {
    minutes.textContent = "0" + timer.mins;
  }

  if (timer.seconds === 0) {
    seconds.textContent = "0" + timer.secs;
  }
}











//  setInterval(createTimer, 1000);

// function myDate () {
//   var currentDate = new Date();

//   var date = currentDate.getDate();
//   var hour = currentDate.getHours();
//   var mins = currentDate.getMinutes();
//   var secs = currentDate.getSeconds();
//   var timestamp = currentDate.getTime();

//   var dateString = `Dia: ${date} - Hora: ${hour} - Minutes: ${mins} - Seconds: ${secs} -
//     timestamp ${timestamp}`;

//   console.log(dateString)
// }
// myDate()
