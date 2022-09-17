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
const toCartBtn = document.getElementById("to-cart")
let content = document.querySelector(".content")
let dynamicNumber = document.querySelector(".dynamic--number")
let notification = document.querySelector(".notificator")

//displaying the empty cart by default

content.innerHTML = `<p class="default--text">Your cart is empty.</p>`

//storing the cart in the local storage
let cart = JSON.parse(localStorage.getItem("item"))
let quantity = parseFloat(dynamicNumber.innerHTML)
    console.log(quantity)
    addBtn.addEventListener("click", () => {
        quantity++;
        dynamicNumber.innerHTML = quantity.toString()
    })
    subtractBtn.addEventListener("click", () => {
        quantity --;
        if(quantity < 0){
            quantity = 0
        }
        dynamicNumber.innerHTML = quantity.toString()
    })

//adding to the cart
toCartBtn.addEventListener("click", () => {
    if(!cart){
        cart = []
    }
    dynamicNumber.innerHTML = 0
    cart.push(quantity)
    localStorage.setItem("item", JSON.stringify(cart))
    showCartItem()            
})

function showCartItem(){
        if(cart){
            notification.setAttribute("data-visible", "true")
            cart.forEach(item =>{
                //calculating and displaying the cost
                let fixedPrice = 125
                let result = fixedPrice * item
                let price = result.toString()
                notification.innerHTML = item
                // notificator = `<div class="notificator" data-visible="false">
                //                 <span></span>
                //             </div>`
                content.innerHTML = `<div class="item">
                                        <div class="details">
                                            <img class="selected" src="./images/image-product-1-thumbnail.jpg" alt="">
                                            <div class="description">
                                                <p>Fall Limited Edition Sneakers</p>
                                                <p class="price">$125.00 x <span class="operand">${item}</span><span class="result"> $<span class="value">${price}</span></span></p>
                                            </div>
                                        </div>
                                        <img class="delete" onclick = "deleteItem()" src="./images/icon-delete.svg" alt="">
                                    </div>
                                    <button class="checkout">Checkout</button> `
        
            })    
        }
}
showCartItem()
//clear the cart
function deleteItem(){
    content.innerHTML = `<p class="default--text">Your cart is empty.</p>`
    notification.setAttribute("data-visible", "false")
    notification.innerHTML = ""
    cart.splice(0,cart.length)
    localStorage.setItem("item", JSON.stringify(cart))
}
    