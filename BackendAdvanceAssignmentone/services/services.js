const { faker } = require("@faker-js/faker");

exports.generateRandomValue = (start, end) => {
  start = parseInt(start);
  end = parseInt(end);

  if (start > end) {
    [start, end] = [end, start];
  }

  return Math.floor(Math.random() * (end - start + 1) + start);
};

exports.generateRandomPersonProfile = (properties) => {
  const generatedProperties = {
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    email: faker.internet.email(),
    age: faker.datatype.number({ min: 18, max: 50 }),
    address: faker.address.streetAddress(),
    avatar: faker.internet.avatar(),
  };

  const person = {};

  properties.forEach((property) => {
    if (generatedProperties.hasOwnProperty(property.toLowerCase())) {
      person[property] = generatedProperties[property];
    }
  });

  return person;
};

exports.countStringNumberSymbol = (str) => {
  const strArr = str.split("");

  let letter = 0;
  let number = 0;
  let symbol = 0;

  strArr.forEach((element) => {
    if (/^[A-Z]+$/i.test(element)) {
      letter += 1;
    } else if (/^\d+$/.test(element)) {
      number += 1;
    } else {
      symbol += 1;
    }
  });

  const result = {
    letter,
    number,
    symbol,
  };

  return result;
};
