const fs = require("fs");

// class Passport {

//   constructor(birthYear, issueYear, expirationYear, height, hairColor, eyeColor, id, countryId?) {

//   }

// }

// class PersonAttributes {

// }


function verifyPassports(err, data) {
  if (err) {
    return console.log(err)
  }

  let validPassports = 0;
  var requiredParams = ["hcl", "pid", "iyr", "eyr", "ecl", "hgt", "byr"]
  var passports = data.split('\n\n');

  for (let i = 0; i < passports.length; i++) {
    let counter = 0
    passports[i] = passports[i].replace(/\s/g, ',');
    for (let j = 0; j < requiredParams.length; j++) {
      if (passports[i].includes(requiredParams[j])) {

        // passports[i].split(',') -- this would result in another array, with just a string of key:value pairs // OR Regex
        // 


        counter++;
        if (counter === 7) {
          validPassports++;
        }
      }
    }

  }

  console.log(validPassports)
  return validPassports;

}

let input = fs.readFile("./input.txt", "utf-8", verifyPassports);

// const json = '{"result":true, "count":42}';
// const obj = JSON.parse(json);

// var passport = {
//   iyr: 2008,
//   byr: 2021,
//   ecl: 'zzz',
//   nhcl: 'z',

// }