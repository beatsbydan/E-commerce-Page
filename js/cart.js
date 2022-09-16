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
let content = document.querySelector(".content")
let dynamicNumber = document.querySelector(".dynamic--number")
let notification = document.querySelector(".notificator")

//displaying the empty cart by default

content.innerHTML = `<p class="default--text">Your cart is empty.</p>`


//storing the cart in the local storage
//let cart = JSON.parse(localStorage.getItem("item"))



//adding and subtracting items
let quantity = 0
addBtn.addEventListener("click", () => {
    quantity++;
    dynamicNumber.innerHTML = quantity.toString()
    //adding to the cart
    toCartBtn.addEventListener("click", () => {
        // if(!cart){
        //     cart = []
        // }
        notification.setAttribute("data-visible", "true")
        notification.firstElementChild.innerHTML = quantity.toString()
        dynamicNumber.innerHTML = 0
        //calculating and displaying the cost
        let fixedPrice = 125
        let result = fixedPrice * quantity
        let price = result.toString()
        content.innerHTML = `<div class="item">
                                <div class="details">
                                    <img class="selected" src="./images/image-product-1-thumbnail.jpg" alt="">
                                    <div class="description">
                                        <p>Fall Limited Edition Sneakers</p>
                                        <p class="price">$125.00 x <span class="operand">${quantity}</span><span class="result"> $<span class="value">${price}</span></span></p>
                                    </div>
                                </div>
                                <img class="delete" onclick = "deleteItem()" src="./images/icon-delete.svg" alt="">
                            </div>
                            <button class="checkout">Checkout</button> `
        
        })
})
subtractBtn.addEventListener("click", () => {
    quantity --;
    if(quantity < 0){
        quantity = 0
    }
    dynamicNumber.innerHTML = quantity.toString()
})

//clear the cart
function deleteItem(){
    content.innerHTML = `<p class="default--text">Your cart is empty.</p>`
    notification.setAttribute("data-visible", "false")
    notification.firstElementChild.innerHTML = null
    //localStorage.setItem("item", JSON.stringify(cart))
}
    