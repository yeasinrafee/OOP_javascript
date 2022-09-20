"use strict";

const Person = function (name, birthYear) {
  this.name = name;
  this.birthYear = birthYear;

  //Bad use:
  //   this.age = function () {
  //     console.log(`${2022 - this.birthYear}`);
  //   };
};
Person.prototype.age = function () {
  console.log(`${2022 - this.birthYear}`);
};
Person.prototype.species = "Homo sapiens";

const rafee = new Person("Rafee", 2000);
console.log(rafee);
rafee.age();
console.log(rafee.species);

console.log(Person.prototype.__proto__);
console.log(rafee.__proto__);

Person.prototype.__proto__.gender = "Male";

console.log(rafee.gender);
