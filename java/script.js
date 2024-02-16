let titleCount = 1;
let totalPrice = 0;
const cards = document.querySelectorAll(".card");
// console.log(cards);

for (let index = 0; index < cards.length; index++) {
    const card = cards[index];
    // console.log(element)
    card.addEventListener("click", function() {
        // console.log("clicked")

        // get the title 
        const title= card.querySelector("h3").innerText;

        const price = parseFloat(card.querySelector("span").innerText.split(" ")[1]);
        console.log(price)
        const titleContainer = document.getElementById('title-container');

        const p = document.createElement("p");
        p.innerText = titleCount + ". " + title;
        titleContainer.appendChild(p);
        titleCount++;

        // calculate price 
        totalPrice += price;
        document.getElementById('totalPrice').innerText= totalPrice.toFixed(2);
    })
    
}

const btn = document.getElementById("apply-btn");
btn.addEventListener("click", function() {
//   get the value from input
const couponElement = document.getElementById('input-field').value;
const couponCode= couponElement.split(" ").join("").toUpperCase();
console.log(couponCode)
if ( totalPrice>= 200 ) {
    if ( couponCode === "SELL200"){
        // discount calculation 
        const discountElement = document.getElementById('discountPrice');
        const discountAmount = totalPrice * 0.2;
        discountElement.innerText = discountAmount.toFixed(2);
        // rest total calculation
        const totalMoney = document.getElementById('total')
          totalMoney.innerText = totalPrice - discountAmount.toFixed(2);
          document.getElementById('input-field').value= "";

    } else { 
        alert("Invalid Coupon");
        document.getElementById('input-field').value= "";
    }

} else {
    alert( " please 200 khorocc koren mia");
    document.getElementById('input-field').value= "";
}

})


