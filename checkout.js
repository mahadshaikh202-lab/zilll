/*=====================================
        ZYVEL CHECKOUT
=====================================*/

const productPrice = 4999;
let quantity = 1;

const delivery = {
    "Sindh": 0,
    "Punjab": 250,
    "KPK": 300,
    "Balochistan": 350,
    "Islamabad": 200
};

/* Elements */

const minusBtn = document.getElementById("minusBtn");
const plusBtn = document.getElementById("plusBtn");
const qty = document.getElementById("qty");

const province = document.getElementById("province");

const subTotal = document.getElementById("subTotal");
const deliveryCharge = document.getElementById("deliveryCharge");
const finalTotal = document.getElementById("finalTotal");

const placeOrderBtn = document.getElementById("placeOrderBtn");
const orderMessage = document.getElementById("orderMessage");

const orderForm = document.getElementById("orderForm");

/*=====================================
        UPDATE PRICE
=====================================*/

function updatePrice(){

    qty.textContent = quantity;

    const subtotal = quantity * productPrice;

    const shipping = delivery[province.value] || 0;

    const total = subtotal + shipping;

    subTotal.textContent = "Rs. " + subtotal.toLocaleString();

    deliveryCharge.textContent = "Rs. " + shipping.toLocaleString();

    finalTotal.textContent = "Rs. " + total.toLocaleString();

}

/*=====================================
        QUANTITY
=====================================*/

plusBtn.addEventListener("click",()=>{

    quantity++;

    updatePrice();

});

minusBtn.addEventListener("click",()=>{

    if(quantity>1){

        quantity--;

        updatePrice();

    }

});

/*=====================================
        PROVINCE CHANGE
=====================================*/

province.addEventListener("change",updatePrice);

/*=====================================
        PLACE ORDER
=====================================*/

placeOrderBtn.addEventListener("click",function(e){

    e.preventDefault();

    if(!orderForm.checkValidity()){

        orderForm.reportValidity();

        return;

    }

    placeOrderBtn.disabled = true;

    placeOrderBtn.innerHTML = "Processing...";

    setTimeout(function(){

        orderMessage.style.color = "#2ecc71";

        orderMessage.innerHTML = "✅ Your order has been placed successfully!";

        placeOrderBtn.innerHTML = "Order Placed ✓";

    },1500);

});

/*=====================================
        FIRST LOAD
=====================================*/

updatePrice();

