const fs = require("fs");

// class Passport {

//   constructor(birthYear, issueYear, expirationYear, height, hairColor, eyeColor, id, countryId?) {

//   }

// }

// class PersonAttributes {

// }


function verifyPassports(err, data) {
  if (err) {
    return console.log(err);
  }

  let validPassportsOld = 0;

  var passports = [];
  data.split('\n\n').forEach(element => {
    var matches = element.match(/((?:"[^"\n]*"|[^:, \n])*):((?:"[^"\n]*"|[^, \n])*)/g);
    console.log("Number of matches: " + matches.length);
    var newElement = {};
    matches.forEach(match => {
      var keyValuePair = match.split(":");
      var key = keyValuePair[0];
      var value;
      if (key === 'hgt') {
        var heightData = keyValuePair[1].match(/(\d* ?)(cm|in)/);
        if (heightData != null) {
          value = {
            value: heightData[1], // value
            type: heightData[2]  //'cm' | 'in'
          };
        } else {
          value = undefined;
        }
      } else {
        value = keyValuePair[1];
      }

      newElement[key] = value;

    });
    passports.push(newElement);
  });
  console.log("Number of passports after parsing: " + passports.length);

  ///
  // Passport data is validated in batch files(your puzzle input).Each passport is represented as a sequence of key: value pairs separated by spaces or newlines.Passports are separated by blank lines.

  // Here is an example batch file containing four passports:

  // ecl: gry pid: 860033327 eyr: 2020 hcl:#fffffd
  // byr: 1937 iyr: 2017 cid: 147 hgt: 183cm

  // iyr: 2013 ecl: amb cid: 350 eyr: 2023 pid: 028048884
  // hcl:#cfa07d byr: 1929

  // hcl:#ae17e1 iyr: 2013
  // eyr: 2024
  // ecl: brn pid: 760753108 byr: 1931
  // hgt: 179cm

  // hcl:#cfa07d eyr: 2025 pid: 166559648
  // iyr: 2011 ecl: brn hgt: 59in
  //   The first passport is valid - all eight fields are present.The second passport is invalid - it is missing hgt(the Height field).

  // The third passport is interesting; the only missing field is cid, so it looks like data from North Pole Credentials, not a passport at all! Surely, nobody would mind if you made the system temporarily ignore missing cid fields.Treat this "passport" as valid.

  // The fourth passport is missing two fields, cid and byr.Missing cid is fine, but missing any other field is not, so this passport is invalid.

  // According to the above rules, your improved system would report 2 valid passports.

  // Count the number of valid passports - those that have all required fields.Treat cid as optional.In your batch file, how many passports are valid ?
  ///
  var numberOfInvalidPassports = 0;
  // console.log(passports);
  var requiredParams = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
  var passportsWithValidKeys = passports.filter((passport, index) => {
    for (var i = 0; i < requiredParams.length; i++) {
      if (!passport[requiredParams[i]]) {
        console.log("Attribute (" + requiredParams[i] + ") for passport #" + index + " was not present!")
        numberOfInvalidPassports++;
        return false
      }
    }
    console.log("All mandatory attributes for passport #" + index + " are present.");
    return true;
  });
  console.log("Number of passports with valid keys: " + passportsWithValidKeys.length);
  console.log("Delta of invalid passports: " + (passports.length - numberOfInvalidPassports));
  console.assert(passportsWithValidKeys.length === 192);

  var validPassports = passportsWithValidKeys.filter(passport => {
    // byr (Birth Year) - four digits; at least 1920 and at most 2002.
    let byr = parseInt(passport.byr);
    if (isNaN(byr) || byr < 1920 || byr > 2002) return false;
    // iyr(Issue Year) - four digits; at least 2010 and at most 2020.
    let iyr = parseInt(passport.iyr);
    if (isNaN(iyr) || iyr < 2010 || iyr > 2020) return false;
    // eyr(Expiration Year) - four digits; at least 2020 and at most 2030.
    let eyr = parseInt(passport.eyr);
    if (isNaN(eyr) || eyr < 2020 || eyr > 2030) return false;
    // hgt(Height) - a number followed by either cm or in:
    //    If cm, the number must be at least 150 and at most 193.
    //    If in, the number must be at least 59 and at most 76.
    if (passport.hgt === undefined) return false;
    if (passport.hgt.type === 'in') {
      if (passport.hgt.value < 59 || passport.hgt.value > 76) return false;
    } else if (passport.hgt.type === 'cm') {
      if (passport.hgt.value < 150 || passport.hgt.value > 193) return false;
    }

    // hcl(Hair Color) - a # followed by exactly six characters 0 - 9 or a - f.
    if (!passport.hcl.match(/^(#)((?:[A-Fa-f0-9]{3}){1,2})$/g)) return false;

    // ecl(Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
    switch (passport.ecl) {
      case 'amb':
      case 'blu':
      case 'brn':
      case 'gry':
      case 'grn':
      case 'hzl':
      case 'oth':
        break;
      default: return false;
    }

    // pid(Passport ID) - a nine - digit number, including leading zeroes.
    if (!passport.pid.match(/\d{9}/g)) return false;

    // cid(Country ID) - ignored, missing or not.
    return true;
  });

  // console.log(validPassportsOld)




  // console.log(validPassports);
  // console.log("Number of valid passports: " + validPassports.length);
}

fs.readFile("./input.txt", "utf-8", verifyPassports);
