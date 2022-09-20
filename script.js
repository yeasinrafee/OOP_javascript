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
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`Speed is ${this.speed} km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`Speed is ${this.speed} km/h`);
};

const bmw = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);

console.log(bmw);
console.log(mercedes);

bmw.accelerate();
bmw.accelerate();
bmw.brake();

mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();
