
const dropdown =document.querySelector(".dropdown")
const menuBtn = document.querySelector(".nav-toggle")
const menu = document.querySelector(".menu")
const navLinks = document.querySelectorAll(".nav-item")
//adding a click event to the button to the toggle button
menuBtn.addEventListener("click", () => {
    //getting the attribute declared from html for the button
    let menuAttribute = menuBtn.getAttribute("aria-expanded")
    if(menuAttribute === "false"){
        //setting the attribute to true to initialize the css style for the dropdown
        menuBtn.setAttribute("aria-expanded", "true")
        //setting the attribute of the menu for visibility
        menu.setAttribute("data-visible", "true")
        dropdown.setAttribute("data-visible","true")
    }
    else{
        //setting the attribute to false to terminate the css style for the dropdown
        menuBtn.setAttribute("aria-expanded", "false")
        //disabling the visibility of the menu
        menu.setAttribute("data-visible", "false")
        dropdown.setAttribute("data-visible", "false")
    }
})
//switching the links on the nav
navLinks.forEach((link)=> {
    //adding a click event to each of the the nav links
    link.addEventListener("click", () => {
        document.querySelector(".current--page").classList.remove("current--page")
        link.classList.add("current--page")
    })
})