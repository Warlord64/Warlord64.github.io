const range = document.querySelector("#opacity-slider")

range.addEventListener('input', function (e) {
    document.body.style.filter ="brightness(" + range.value + "%)";
   
  });