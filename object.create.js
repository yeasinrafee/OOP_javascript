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

const StudentProto = Object.create(DetailsProto);
StudentProto.info = function (name, birthYear, course) {
  DetailsProto.info.call(this, name, birthYear);
  this.course = course;
};
StudentProto.introduce = function () {
  console.log(`Hey! My name is ${this.name}, I'm doing ${this.course} course.`);
};

const ragner = Object.create(StudentProto);
ragner.info("Ragner", 2001, "Murder");
// ragner.introduce();

// rafee.info("Rafee", 2000);
// rafee.calcAge();
