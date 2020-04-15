  const calendar = document.querySelector('.calendar');

    function getTime(time) {
      //calendar
      let endtime = new Date(time).getTime();

      //setInterval
      var countdown = setInterval(function () {
        let now = new Date().getTime(); // time now
        let distanceToEnd = endtime - now; // distance now / end

        // Calc hours,secs,mins
        let hours = Math.floor((distanceToEnd % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distanceToEnd % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distanceToEnd % (1000 * 60)) / 1000);

        let clock = {
          hours: hours,
          minutes: minutes,
          seconds: seconds
        }
        displayClock(clock)

      }, 1000)
    }


    function displayClock(clock) {
      let clockDivHour = document.querySelector('.clock-hour')
      let clockDivMins = document.querySelector('.clock-mins')
      let clockDivSecs = document.querySelector('.clock-secs')


      if(clock.hours < 10) {
        clockDivHour.innerHTML = '0' + clock.hours;
      }
      if(clock.minutes < 10) {
        clockDivMins.innerHTML = '0' + clock.minutes;
      }
      if(clock.seconds < 10) { clockDivMins.innerHTML ='0' + clock.seconds; }
      
    }