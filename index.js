const menuOpen = document.getElementById("menu-open");
const menuClose = document.getElementById("menu-close");
const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu-container");


let isToggled = false;

menuIcon.addEventListener("click", ()=>{
    console.log("click");
    
    isToggled = !isToggled;
    if(isToggled === true){
        menuOpen.style.display = "none";
        menuClose.style.display = "block";
        menu.classList.add("isToggle");
    } else {
        menuOpen.style.display = "block";
        menuClose.style.display = "none";
        menu.classList.remove("isToggle");
    }
})