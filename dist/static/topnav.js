const primaryNav = document.querySelector("#primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const bodyone = document.querySelector(".cover-pro");

navToggle.addEventListener("click" , () => {
   const visibility = primaryNav.getAttribute("data-visible");
   
   if(visibility === "false"){
    primaryNav.setAttribute("data-visible" , true);
   } else if ( visibility==="true"){
    primaryNav.setAttribute("data-visible" , false);
   }
});

bodyone.addEventListener('click', () => {
   const visibility = primaryNav.getAttribute("data-visible");
   if(visibility === "true"){
       primaryNav.setAttribute("data-visible", false)
   }
})



