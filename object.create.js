"use strict";

const DetailsProto = {
  calcAge() {
    console.log(2022 - this.birthYear);
  },
  info(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  },
};

const rafee = Object.create(DetailsProto);
rafee.info("Rafee", 2000);
rafee.calcAge();
