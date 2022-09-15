//main carousel
const track = document.querySelector(".carousel--track")

const slides = document.querySelectorAll(".carousel--slide")
//getting the width of one of the slides
const slideWidth = slides[0].getBoundingClientRect().width

//function to set the slide position for each slide
function setSlidePosition(slide, index){
    slide.style.left = slideWidth * index + 'px'
}

//setting the slide width
slides.forEach(setSlidePosition)

//function to move/switch the slides
function moveToExactSlide(currentSlides, targetSlides, tracks){
    currentSlides.classList.remove("current--slide")
    targetSlides.classList.add("current--slide")
    tracks.style.transform = 'translateX(-'+targetSlides.style.left+')'
}

//functionalities for moving each slides via the buttons
const nextBtn = document.querySelector(".next")
const prevBtn = document.querySelector(".previous")

//moving to the next slide
nextBtn.addEventListener("click", () => {
    let currentSlide = track.querySelector(".current--slide")
    let targetSlide = currentSlide.nextElementSibling
    if(targetSlide === null){
        targetSlide = currentSlide
    }
    moveToExactSlide(currentSlide,targetSlide,track)

    let currentThumb =document.querySelector(".current--thumbnail")
    let targetThumb = currentThumb.nextElementSibling
    if(targetThumb === null){
        targetThumb = currentThumb
    }
    switchThumbs(currentThumb, targetThumb)

    let currentThumbs =document.querySelector(".current--thumbnail--item")
    let targetThumbs = currentThumb.nextElementSibling
    if(targetThumb === null){
        targetThumb = currentThumb
    }
    if(!currentThumbs || !targetThumbs){
        return
    }
    switchBorders(currentThumbs, targetThumbs)
})

//moving to the previous slide
prevBtn.addEventListener("click", () => {
    let currentSlide = track.querySelector(".current--slide")
    let targetSlide = currentSlide.previousElementSibling
    if(targetSlide === null){
        targetSlide = currentSlide
    }
    moveToExactSlide(currentSlide,targetSlide,track)

    let currentThumb =document.querySelector(".current--thumbnail")
    let targetThumb = currentThumb.previousElementSibling
    if(targetThumb === null){
        targetThumb = currentThumb
    }
    switchThumbs(currentThumb, targetThumb)
    
    let currentThumbs =document.querySelector(".current--thumbnail--item")
    let targetThumbs = currentThumb.previousElementSibling
    if(targetThumbs === null){
        targetThumbs = currentThumbs
    }
    if(!currentThumbs || !targetThumbs){
        return
    }
    switchBorders(currentThumbs, targetThumbs)
})

//thumbnail
const thumbNails =document.querySelectorAll(".thumbnail--slide img")
const thumbNailTrack = document.querySelector(".thumbnail--track")
const lists = Array.from(thumbNailTrack.children)
const thumbNailImages =document.querySelectorAll(".thumbnail--track li img")
const thumbNailArray = Array.from(thumbNailImages)

//switching thumbnails
function switchThumbs(currentThumbs, targetThumbs){
    currentThumbs.classList.remove("current--thumbnail")
    targetThumbs.classList.add("current--thumbnail")
}
//switching the borders
function switchBorders(currentThumbs, targetThumbs){
    currentThumbs.classList.remove("current--thumbnail--item")
    targetThumbs.classList.add("current--thumbnail--item")
}

//using the thumbnails to navigate the carousel
thumbNailTrack.addEventListener("click", e => {
    let targetThumb = e.target.closest("img")
    let currentSlide =track.querySelector(".current--slide")
    let currentThumb =document.querySelector(".current--thumbnail")
    let currentThumbs =document.querySelector(".current--thumbnail--item")
    let targetIndex = thumbNailArray.findIndex(index => index === targetThumb)
    let targetSlide = slides[targetIndex]
    let targetThumbs = lists[targetIndex]
    moveToExactSlide(currentSlide,targetSlide,track)
    
    switchThumbs(currentThumb,targetThumb)

    switchBorders(currentThumbs, targetThumbs)
})
