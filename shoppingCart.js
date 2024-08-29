// Exporting Module
console.log('Exporting Module');

// Blocking code
/*
in fact blocking the excution, not only in this module
but also in the module that is importing it
*/
// console.log('Start Fetching users');
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('End Fetching users');

const shippingCost = 10;
export const cart = [];

// Named export
// export need to be in the top level
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 10;
// You can export multiple things using Named export

export { totalPrice, totalQuantity as tq };

// Use Defult export when we need export one thing from module
// export as it not in variable
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
