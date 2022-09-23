"use strict";

//ES6 Classes:

class Details {
  constructor(fullName, year) {
    this.fullName = fullName;
    this.year = year;
  }

  calcAge() {
    console.log(2022 - this.year);
  }

  showDetails() {
    console.log(this._fullName, this.year);
  }

  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else console.error("You have to give your full name");
  }

  get age() {
    return 2022 - this.year;
  }

  get fullName() {
    return this._fullName;
  }

  //Static Method:
  static hey() {
    console.log("Hey buddy! What is Up?");
  }
}

//Inheritance Between Classes: ES6 Classes:
class Student extends Details {
  constructor(fullName, year, course) {
    super(fullName, year);
    this.course = course;
  }

  introduce() {
    console.log(`Hey I'm ${this._fullName} from ${this.course} course.`);
  }
}
const rafee = new Student("Ragner Rafee", 2000, "Computer Science");
// rafee.introduce();
// rafee.calcAge();

// Details.hey();
// const rafee = new Details("Rafee king", 2000);
// rafee.calcAge();
// rafee.showDetails();
// console.log(rafee.age);
// rafee.hey();

const aegon = new Details("Aegon the Conquarar", 1190);
aegon.fullName = "Aegon Targaryen";
// console.log(aegon.fullName);

// #Coding Challenge: 2:
// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`Speed is ${this.speed} km/h`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`Speed is ${this.speed} km/h`);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new Car("Ford", 150);
// ford.accelerate();
// ford.accelerate();
// ford.brake();
// ford.accelerate();

// console.log(ford.speedUS);
// ford.speedUS = 50;
// console.log(ford);

// Example of a Class
class Account {
  constructor(name, currency, pin) {
    this.name = name;
    this.currency = currency;
    this.locale = navigator.language;

    //Protected Properties:
    this._pin = pin;
    this._movements = [];

    console.log(`Thanks for opening your account, ${this.name}`);
  }

  getMovement() {
    return this._movements;
  }
  deposit(val) {
    this._movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }
  _approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(-val);
      console.log("Your loan has been approved");
    }
  }
}

const account1 = new Account("Rafee", "BDT", 7412);
account1.deposit(500);
account1.withdraw(200);
// account1._approveLoan(1000);
account1.requestLoan(1000);
console.log(account1.getMovement());

console.log(account1);
