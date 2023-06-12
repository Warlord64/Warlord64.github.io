const proNav = document.querySelector("#pro-navigation");
const proToggle = document.querySelector(".pro-toggle");
const body = document.querySelector(".cover-pro");


proToggle.addEventListener('click', () => {
      const visibility = proNav.getAttribute("data-visible");

      if(visibility === "false"){
         proNav.setAttribute("data-visible" , true);

      }else if(visibility === "true"){
         proNav.setAttribute("data-visible", false);

      }
})

body.addEventListener('click', () => {
    const visibility = proNav.getAttribute("data-visible");
    if(visibility === "false"){
        proNav.setAttribute("data-visible", true)
    }
})