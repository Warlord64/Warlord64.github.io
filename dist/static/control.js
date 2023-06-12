const Control = document.querySelector("#cover-navigation");
const controlcenter = document.querySelector(".hide-button");

controlcenter.addEventListener('click', () => {
      const visibility = Control.getAttribute("data-visible");

      if(visibility === "false"){
         Control.setAttribute("data-visible" , true);
      }else if(visibility === "true"){
         Control.setAttribute("data-visible", false)
      }
})
