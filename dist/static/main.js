
  const time = document.getElementById("time");
  const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const months = ["Jan","Feb","Mar","April","May","June","July","Aug","Sep","Oct","Nov","Dec"];
  const today = new Date();

  const day = days[today.getDay()];
  const month = months[today.getMonth()];
  const year = today.getFullYear();
  const date = today.getDate();


  function formatAMPM(date) {
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = hours >= 12 ? 'PM':'AM'
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0'+minutes : minutes;
      var strTime = hours + ':' + minutes + ' ' + ampm;
      return strTime;
    }
    



  let current_date = `${day} ${month} ${date}`;

  time.innerHTML = `${current_date} ${formatAMPM(new Date)}`;




