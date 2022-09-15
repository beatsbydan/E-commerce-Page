

//cart display
const cartBtn = document.querySelector(".cart-btn")
cartBtn.addEventListener("click", () => {
    let cartContent = document.querySelector(".cart--content")
    let display = cartContent.getAttribute("data-visible")
    if(display === "false"){
        cartContent.setAttribute("data-visible", "true")
    }
    else{
        cartContent.setAttribute("data-visible", "false")
    }
})

//Cart Functionalities
//Cart Elements
const addBtn = document.querySelector(".add")
const subtractBtn = document.querySelector(".subtract")
const toCartBtn = document.querySelector(".to-cart")
const deleteBtn = document.querySelector(".delete")
let content = document.querySelector(".content")
let dynamicNumber = document.querySelector(".dynamic--number")
let resultVal = document.querySelector(".value")
let notification = document.querySelector(".notificator")
let notificator = document.querySelector(".notificator span")
let operand = document.querySelector(".operand")

//storing in the local storage
//let cart = JSON.parse(localStorage.getItem("item"))
// localStorage.setItem("item", JSON.stringify(cart))

//adding and subtracting items
let quantity = parseFloat(dynamicNumber.innerHTML)
addBtn.addEventListener("click", () => {
    quantity++;
    dynamicNumber.innerHTML = quantity.toString()
    notificator.innerHTML = dynamicNumber.innerHTML
    operand.innerHTML = dynamicNumber.innerHTML
    let discountPrice = 125
    let result;
    result = discountPrice * parseFloat(operand.innerHTML)
    resultVal.innerHTML = result.toString()
})
subtractBtn.addEventListener("click", () => {
    quantity --;
    if(quantity < 0){
        quantity = 0
    }
    dynamicNumber.innerHTML = quantity.toString()
    notificator.innerHTML = dynamicNumber.innerHTML
    operand.innerHTML = dynamicNumber.innerHTML
    let discountPrice = 125
    let result;
    result = discountPrice * parseFloat(operand.innerHTML)
    resultVal.innerHTML = result.toString()
})

//calculating and displaying the cost


//adding to the cart

toCartBtn.addEventListener("click", () => {
    notification.setAttribute("data-visible", "true")
})
//clear the cart
deleteBtn.addEventListener("click", () => {
    content.innerHTML = `<p class="default--text">Your cart is empty.</p>`
    notification.setAttribute("data-visible", "false")
})



