// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Rashad Gilliam" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0; // Gingerbread
let cc = 0; // Chocolate Chip
let sugar = 0; // Sugar Sprinkle

// selecting the element with an id of credit
const credit = document.querySelector('#credit');

function updateQuantity1(displayQuantity1) {
    let totalQuantity1 = document.querySelector("#qty-gb");
    totalQuantity1.textContent = displayQuantity1;    
}

function updateQuantity3(displayQuantity3) {
    let totalQuantity3 = document.querySelector("#qty-sugar");
    totalQuantity3.textContent = displayQuantity3;    
}

function updateQuantity2(displayQuantity2) {
    let totalQuantity2 = document.querySelector("#qty-gb");
    totalQuantity2.textContent = displayQuantity2;    
}

// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb');
const gbMinusBtn = document.querySelector('#minus-gb');
const sugarPlusBtn = document.querySelector('#add-sugar');
const sugarMinusBtn = document.querySelector('#minus-sugar');
const ccPlusBtn = document.querySelector('#add-cc');
const ccMinusBtn = document.querySelector('#minus-cc');

let quantity = 0;

// Code to update name display
credit.textContent = `Created by ${"Rashad Gilliam"}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbMinusBtn.addEventListener('click', function (e) {
    if (quantity > 0) {
        quantity--;
        updateQuantity(` ${quantity}`)
    }
})
gbPlusBtn.addEventListener('click', function (e) {
    quantity++;
    updateQuantity(`${quantity}`);


})

///////

