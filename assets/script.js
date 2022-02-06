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

function updateQuantity(displayQuantity) {
    let totalQuantity = document.querySelector("#qty-gb");
    totalQuantity.textContent = displayQuantity;    
}

function updateQuantity3(displayQuantity3) {
    let totalQuantity3 = document.querySelector("#qty-sugar");
    totalQuantity3.textContent = displayQuantity3;    
}

function updateQuantity(displayQuantity) {
    let totalQuantity = document.querySelector("#qty-gb");
    totalQuantity.textContent = displayQuantity;    
}

// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb');
const gbMinusBtn = document.querySelector('#minus-gb');
const sugarPlusBtn = document.querySelector('#add-sugar');
const sugarMinusBtn = document.querySelector('#minus-sugar');
const ccPlusBtn = document.querySelector('#add-cc');
const ccMinusBtn = document.querySelector('#minus-cc');

let quantity = 0;
let quantity3 = 0;


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

sugarMinusBtn.addEventListener('click', function (e) {
    if (quantity3 > 0) {
        quantity3--;
        updateQuantity3(` ${quantity3}`)
    }
})
sugarPlusBtn.addEventListener('click', function (e) {
    quantity3++;
    updateQuantity3(`${quantity3}`)
})