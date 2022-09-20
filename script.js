"use strict";

//Prototypal Inheritance:
// const Person = function (name, birthYear) {
//   this.name = name;
//   this.birthYear = birthYear;

//   //Bad use:
//   //   this.age = function () {
//   //     console.log(`${2022 - this.birthYear}`);
//   //   };
// };
// Person.prototype.age = function () {
//   console.log(`${2022 - this.birthYear}`);
// };
// Person.prototype.species = "Homo sapiens";

// const rafee = new Person("Rafee", 2000);
// console.log(rafee);
// rafee.age();
// console.log(rafee.species);

// console.log(Person.prototype.__proto__);
// console.log(rafee.__proto__);

// Person.prototype.__proto__.gender = "Male";

// console.log(rafee.gender);
// console.log(Person.prototype.__proto__.__proto__);

// #Coding Challenge: 1:
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`Speed is ${this.speed} km/h`);
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`Speed is ${this.speed} km/h`);
// };

// const bmw = new Car("BMW", 120);
// const mercedes = new Car("Mercedes", 95);

// console.log(bmw);
// console.log(mercedes);

// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();

// mercedes.accelerate();
// mercedes.accelerate();
// mercedes.brake();

//Factory Function:
function ShoppingCart1() {
  return {
    product: [],
    prince: 1250,
    shippingCharge: 150,

    addToCart: function (name, quantity) {
      product.push({ name, quantity });
      console.log(`Your product is ${name} of ${quantity} pieces`);
    },
    displayCart: function () {
      console.log(this.product);
    },
    showBill: function () {
      console.log(
        `Price is ${price}, Shipping Charge: ${shippingCharge}, Total bill is ${
          price + shippingCharge
        }`
      );
    },
  };
}

const mango = ShoppingCart1.addToCart("Mango", 56);
const orange = ShoppingCart1.addToCart("Orange", 26);
const banana = ShoppingCart1.addToCart("Banana", 12);

ShoppingCart1.showBill;
ShoppingCart1.displayCart;

//Module Pattern:
// const ShoppingCart = (function () {
//   const products = [];
//   const price = 1250;
//   const shippingCharge = 150;

//   const addToCart = function (name, quantity) {
//     products.push({ name, quantity });
//     console.log(`Your product is ${name} of ${quantity} pieces`);
//   };
//   const displayCart = () => {
//     console.log(products);
//   };
//   const showBill = () => {
//     console.log(
//       `Price is ${price}, Shipping Charge: ${shippingCharge}, Total bill is ${
//         price + shippingCharge
//       }`
//     );
//   };

//   return { addToCart, displayCart, showBill };
// })();

// const product1 = ShoppingCart.addToCart("Mango", 56);
// ShoppingCart.addToCart("Orange", 26);
// ShoppingCart.addToCart("Banana", 12);
// ShoppingCart.showBill();
// ShoppingCart.displayCart();
