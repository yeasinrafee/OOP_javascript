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
Details.hey();

const rafee = new Details("Rafee king", 2000);
rafee.calcAge();
rafee.showDetails();
console.log(rafee.age);
// rafee.hey();

const aegon = new Details("Aegon the Conquarar", 1190);
aegon.fullName = "Aegon Targaryen";
console.log(aegon.fullName);
