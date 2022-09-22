"use strict";

//ES6 Classes:

class Details {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  calcAge() {
    console.log(2022 - this.year);
  }

  showDetails() {
    console.log(this.name, this.year);
  }
}

const rafee = new Details("Rafee", 2000);
rafee.calcAge();
rafee.showDetails();
