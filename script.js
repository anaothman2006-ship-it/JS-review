/*
const ages = [15, 22, 44, 56, 33, 12, 32, 17, 18];
function getAdults(ages) {
    const adults = [];
    for (let i = 0; i < ages.length; i++) {
        if (ages[i] >= 18) adults.push(ages[i])
    }
    return adults;
}
console.log(getAdults(ages));
*/


/*
const ages = [15, 22, 44, 65, 75, 32, 54, 67, 12, 42];

function getAdults(ages) {
    return ages.filter(age => age >= 18);
}
console.log(getAdults(ages));
*/


/*
const cartPrices = [99.00, 15.50, 42.00, 7.25];
function calculateTotal(prices) {
    let subTotal = 0;
    const tax10Percent = 1.1;
    for (let i = 0; i < prices.length; i++) {
        subTotal += prices[i];
    }
    const totalWithTax = subTotal * tax10Percent;
    return Math.round(totalWithTax * 100) / 100;
}
console.log(calculateTotal(cartPrices));
*/



/*
const cartPrices = [99.99, 15.50, 42.00, 7.25];

function calculateTotal(prices) {
    const subTotal = prices.reduce((acc, curr) => acc + curr, 0);
    const tax10Percent = 1.1;
    const totalWithTax = subTotal * tax10Percent;
    return math.round(totalWithTax * 100) / 100;
}
console.log(calculateTotal(cartPrices));
*/

/*
const product = {
    name: "Laptop",
    price: 1000,
    discount: 0.1
}

function totalAfterDiscount(product) {
    return product.price * 0.9;
}
*/
/*
function totalAfterDiscount(product) {
    let priceAfterDisc = {...product};
    priceAfterDisc.price = priceAfterDisc.price * 0.9;
    return priceAfterDisc;
}

function totalAfterDisc(product) {
    return productAfterDisc = {
        ...product,
        price: product.price * 0.9
    }
}
console.log(totalAfterDisc(product));
*/


/*
const cart = [
    { name: "Apple", price: 1.5 },
    { name: "Breade", price: 2.0 },
    { name: "Milk", price: 1.2 }
]

function totalPrice(carts) {
    return cart.reduce((acc, curr) => acc + curr.price, 0);
}
console.log(totalPrice(cart));


const inventory = [
    { id: 1, name: "Laptop", price: 1000, category: "Electronics", stock: 5 },
    { id: 2, name: "Headphones", price: 200, category: "Electronics", stock: 15 },
    { id: 3, name: "Coffee Maker", price: 150, category: "Home", stock: 0 },
    { id: 4, name: "Monitor", price: 300, category: "Electronics", stock: 8 }
];

function getAviableItems(inventory) {
    return inventory.filter(inventory => inventory.stock > 0);
}


/*
function applyElectronicsSales(inventory) {
    const newArr = structuredClone(inventory);
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i].category === "Electronics") {
            newArr[i].price = newArr[i].price * 0.9;
        }
    }
    return newArr
}



function applyElectronicsSales(inventory) {
    return inventory.map(inv => inv.category === "Electronics" ? {...inv, price: inv.price * 0.9} : inv);
}

/*
function calculateInventoryValue(inventory) {
    let p = 0;
    let sum = 0;
    for (let i = 0; i < inventory.length; i++) {
        p = inventory[i].price * inventory[i].stock;
        sum += p
    }
    return sum
}


function calculateInventoryValue(inventory) {
    return inventory.reduce((acc, curr) => (curr.stock * curr.price) + acc , 0);
}

console.log(calculateInventoryValue(inventory))*/