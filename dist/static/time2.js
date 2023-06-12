    const time2 = document.querySelector("#time2");



    function formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM':'AM'
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strtime2 = hours + ':' + minutes + ' ' + ampm;
        return strtime2;
      }
      



    let current_date2 = `${day} ${month} ${date}`;

    time2.innerHTML = `${current_date2} ${formatAMPM(new Date)}`;



