
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
    totalDisp.textContent = overallTotal;  
}

function updateQuantity3(displayQuantity3) {
    let totalQuantity3 = document.querySelector("#qty-sugar");
    totalQuantity3.textContent = displayQuantity3; 
    totalDisp.textContent = overallTotal;    
}

function updateQuantity2(displayQuantity2) {
    let totalQuantity2 = document.querySelector("#qty-cc");
    totalQuantity2.textContent = displayQuantity2;
    totalDisp.textContent = overallTotal;    
}

// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb');
const gbMinusBtn = document.querySelector('#minus-gb');
const sugarPlusBtn = document.querySelector('#add-sugar');
const sugarMinusBtn = document.querySelector('#minus-sugar'); 
const ccPlusBtn = document.querySelector('#add-cc');
const ccMinusBtn = document.querySelector('#minus-cc');
const totalDisp = document.querySelector('#qty-total');

let quantity = 0;
let quantity2 = 0; 
let quantity3 = 0;
let overallTotal = quantity + quantity2 + quantity3; 

// Code to update name display
credit.textContent = `Created by ${"Rashad Gilliam"}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbMinusBtn.addEventListener('click', function () {
    if (quantity > 0) {
        quantity--;
        overallTotal--;
        updateQuantity(` ${quantity}`)
    }
})
gbPlusBtn.addEventListener('click', function () {
    quantity++;
    overallTotal++;
    updateQuantity(`${quantity}`);


})

///////

sugarMinusBtn.addEventListener('click', function () {
    if (quantity3 > 0) {
        quantity3--;
        overallTotal--;
        updateQuantity3(` ${quantity3}`)
    }
})
sugarPlusBtn.addEventListener('click', function () {
    quantity3++;
    overallTotal++;
    updateQuantity3(`${quantity3}`)
})

////////

ccMinusBtn.addEventListener('click', function () {
    if (quantity2 > 0) {
        quantity2--;
        overallTotal--;
        updateQuantity2(`${quantity2}`)
    }
})

ccPlusBtn.addEventListener('click', function () {
    quantity2++;
    overallTotal++;
    updateQuantity2(`${quantity2}`)
})

//////