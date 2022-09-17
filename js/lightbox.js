//main carousel
const lightBoxTrack = document.querySelector(".lightbox__carousel--track")

const lightBoxSlides = document.querySelectorAll(".lightbox__carousel--slide")
//getting the width of one of the slides
const lightBoxSlideWidth = lightBoxSlides[0].getBoundingClientRect().width

//function to set the slide position for each slide
function lightBoxSetSlidePosition(slide, index){
    slide.style.left = lightBoxSlideWidth * index + 'px'
}

//setting the slide width
lightBoxSlides.forEach(lightBoxSetSlidePosition)

//function to move/switch the slides
function lightBoxMoveToExactSlide(lightBoxCurrentSlides, lightBoxTargetSlides, lightBoxTracks){
    lightBoxCurrentSlides.classList.remove("lightbox__current--slide")
    lightBoxTargetSlides.classList.add("lightbox__current--slide")
    lightBoxTracks.style.transform = 'translateX(-'+lightBoxTargetSlides.style.left+')'
}

//functionalities for moving each slides via the buttons
const lightBoxNextBtn = document.querySelector(".lightbox__next")
const lightBoxPrevBtn = document.querySelector(".lightbox__previous")

//moving to the next slide
lightBoxNextBtn.addEventListener("click", () => {
    let lightBoxCurrentSlide = lightBoxTrack.querySelector(".lightbox__current--slide")
    let lightBoxCurrentThumb =lightBoxThumbNailTrack.querySelector(".lightbox__current--thumbnail")
    let lightBoxCurrentThumbs =document.querySelector(".lightbox__current--thumbnail--item")
    let lightBoxTargetThumbs = lightBoxCurrentThumbs.nextElementSibling
    let lightBoxTargetThumb = lightBoxCurrentThumb.parentElement.nextElementSibling.firstChild
    let lightBoxTargetSlide = lightBoxCurrentSlide.nextElementSibling
    if(lightBoxTargetSlide === null){
        lightBoxTargetSlide = lightBoxCurrentSlide
    }
    if(lightBoxTargetThumb === null){
        lightBoxTargetThumb = lightBoxCurrentThumb
    }
    if(lightBoxTargetThumbs === null){
        lightBoxTargetThumbs = lightBoxCurrentThumbs
    }
    lightBoxMoveToExactSlide(lightBoxCurrentSlide,lightBoxTargetSlide,lightBoxTrack)
    lightBoxSwitchThumbs(lightBoxCurrentThumb, lightBoxTargetThumb)
    lightBoxSwitchBorders(lightBoxCurrentThumbs, lightBoxTargetThumbs)
})

//moving to the previous slide
lightBoxPrevBtn.addEventListener("click", () => {
    let lightBoxCurrentSlide = lightBoxTrack.querySelector(".lightbox__current--slide")
    let lightBoxCurrentThumb =lightBoxThumbNailTrack.querySelector(".lightbox__current--thumbnail")
    let lightBoxCurrentThumbs =document.querySelector(".lightbox__current--thumbnail--item")
    let lightBoxTargetThumbs = lightBoxCurrentThumbs.previousElementSibling
    let lightBoxTargetThumb = lightBoxCurrentThumb.parentElement.previousElementSibling.firstElementChild
    let lightBoxTargetSlide = lightBoxCurrentSlide.previousElementSibling
    if(lightBoxTargetThumbs === null){
        lightBoxTargetThumbs = lightBoxCurrentThumbs
    }
    
    if(lightBoxTargetSlide === null){
        lightBoxTargetSlide = lightBoxCurrentSlide
    }
    lightBoxSwitchThumbs(lightBoxCurrentThumb, lightBoxTargetThumb)
    lightBoxMoveToExactSlide(lightBoxCurrentSlide,lightBoxTargetSlide,lightBoxTrack)
    lightBoxSwitchBorders(lightBoxCurrentThumbs, lightBoxTargetThumbs)

})

//thumbnail
const lightBoxThumbNails =document.querySelectorAll(".lightbox__thumbnail--slide img")
const lightBoxThumbNailTrack = document.querySelector(".lightbox__thumbnail--track")
const lightBoxLists = Array.from(lightBoxThumbNailTrack.children)
const lightBoxThumbNailImages =document.querySelectorAll(".lightbox__thumbnail--track li img")
const lightBoxThumbNailArray = Array.from(lightBoxThumbNailImages)

//switching thumbnails
function lightBoxSwitchThumbs(lightBoxCurrentThumbs, lightBoxTargetThumbs){
    lightBoxCurrentThumbs.classList.remove("lightbox__current--thumbnail")
    lightBoxTargetThumbs.classList.add("lightbox__current--thumbnail")
}
//switching the borders
function lightBoxSwitchBorders(lightBoxCurrentThumbs, lightBoxTargetThumbs){
    lightBoxCurrentThumbs.classList.remove("lightbox__current--thumbnail--item")
    lightBoxTargetThumbs.classList.add("lightbox__current--thumbnail--item")
}

//using the thumbnails to navigate the carousel
lightBoxThumbNailTrack.addEventListener("click", e => {
    let lightBoxTargetThumb = e.target.closest("img")
    let lightBoxCurrentSlide =lightBoxTrack.querySelector(".lightbox__current--slide")
    let lightBoxCurrentThumb =document.querySelector(".lightbox__current--thumbnail")
    let lightBoxCurrentThumbs =document.querySelector(".lightbox__current--thumbnail--item")
    let lightBoxTargetIndex = lightBoxThumbNailArray.findIndex(index => index === lightBoxTargetThumb)
    let lightBoxTargetSlide = lightBoxSlides[lightBoxTargetIndex]
    let lightBoxTargetThumbs = lightBoxLists[lightBoxTargetIndex]
    
    lightBoxMoveToExactSlide(lightBoxCurrentSlide,lightBoxTargetSlide,lightBoxTrack)
    
    lightBoxSwitchThumbs(lightBoxCurrentThumb,lightBoxTargetThumb)

    lightBoxSwitchBorders(lightBoxCurrentThumbs, lightBoxTargetThumbs)
})

//opening the light box up
const lightBox = document.querySelector(".lightbox")
const newSlides = document.querySelectorAll(".carousel--slide")
newSlides.forEach((slide)=> {
    slide.addEventListener("click", () => {
        let state = lightBox.getAttribute("data-visible")
        if(state === "false"){
            lightBox.setAttribute("data-visible", "true")
        }
    })
})
//closing the light box
const lightBoxClose = document.querySelector(".lightbox__close")
lightBoxClose.addEventListener("click", () => {
    lightBox.setAttribute("data-visible", "false")
})