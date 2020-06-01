class Person {
  constructor(name, surname, gender, birthdate) {
    this.name = name;
    this.surname = surname;
    this.gender = gender;
    this.birthdate = birthdate;
  }
}
 
function get_surname(person, consonants, vowels) {
  let fc_surname = "";
  person.surname = person.surname.toUpperCase();
  if (person.surname.length >= 3) {
    let consonantAmount = get_consonants(person, consonants, person.surname);
    if (consonantAmount >= 3)
      fc_surname = set_fc_letters(person.surname, consonants);
    else {
      fc_surname = set_fc_letters(person.surname, consonants);
      for (let i = 0; i < person.surname.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
          if (person.surname[i] == vowels[j] && fc_name.length < 3)
            fc_name += person.surname[i];
        }
      }
    }
  }
  else {
    fc_surname = person.surname;
    while (fc_surname.length != 3)
      fc_surname += "X";
  }
  
  return fc_surname;
}
 
function get_name(person, consonants, vowels) {
  fc_name = "";
  person.name = person.name.toUpperCase();
  if (person.name.length >= 3) {
    let consonantAmount = get_consonants(person, consonants, person.name);
    if (consonantAmount > 3) { 
      for (let i = 0, count = 0; i < person.name.length; i++) {
        for (let j = 0; j < consonants.length; j++) {
          if (person.name[i] == consonants[j] && fc_name.length < 3) {
            count++;
            if (count != 2)
              fc_name += person.name[i];
          }
        }
      }
    }
    else if (consonantAmount == 3)
      fc_name = set_fc_letters(person.name, consonants);
    else {
      fc_name = set_fc_letters(person.name, consonants);
      for (let i = 0; i < person.name.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
          if (person.name[i] == vowels[j] && fc_name.length < 3)
            fc_name += person.name[i];
        }
      }
    }
  }
  else {
    fc_name = person.name;
    while (fc_name.length != 3)
      fc_name += "X";
  }
  
  return fc_name;
}
 
function get_birthdate(person, consonants, vowels) {
  const months = { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "H", 7: "L", 8: "M", 9: "P", 10: "R", 11: "S", 12: "T"};
  let birthdate_array = person.birthdate.split("/");
 
  let fc_year = birthdate_array[2][2] + birthdate_array[2][3];
  let fc_month = months[parseInt(birthdate_array[1])];
  let fc_day = "";
 
  if (person.gender == "M")
    if (birthdate_array[0].length == 1) 
      fc_day = "0" + birthdate_array[0];
    else 
      fc_day = birthdate_array[0];
  else
    fc_day = parseInt(birthdate_array[0]) + 40;
 
  return fc_year + fc_month + fc_day;
}
 
function get_consonants(person, consonants, obj) {
  let consonantAmount = 0;
  for (let i = 0; i < obj.length; i++) {
    for (let j = 0; j < consonants.length; j++) {
      if (obj[i] == consonants[j])
        consonantAmount += 1;
    }
  }
 
  return consonantAmount;
}
 
function set_fc_letters(obj, letters) {
  fc_name = "";
  for (let i = 0; i < obj.length; i++) {
    for (let j = 0; j < letters.length; j++) {
      if (obj[i] == letters[j] && fc_name.length < 3)
        fc_name += obj[i];
    }
  }
 
  return fc_name;
}
 
function fiscalCode(person, consonants, vowels) {
  fc_surname = get_surname(person, consonants, vowels);
  fc_name = get_name(person, consonants, vowels);
  fc_birthdate = get_birthdate(person, consonants, vowels);
  console.log(fc_surname+fc_name+fc_birthdate);
}
 
const vowels = ['A','E','U','I','O'];
const consonants = ['Q','W','R','T','Y','P','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
 
person = new Person("Dima", "Lobunko", "M", "1/1/1900");
fiscalCode(person, consonants, vowels);
