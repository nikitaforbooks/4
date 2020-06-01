function deleteFirstWord(string) {
  let array_of_string = string.split("");
  array_of_string.shift();
  string = array_of_string.join("");
  return string;
}
 
function stringWithSpaces(string) {
  const string_array = [];
  const len = string.length;
  for (let i = 0; i < len; i++) {
    string_array.push(string);
    string = " " + string;
  }
  string = deleteFirstWord(string);
  for (let i = 0; i < len - 1; i++) {
    string = deleteFirstWord(string);
    string_array.push(string);
  }
  return string_array;
}
 
function additivePersistance(number) {
  let count = 0;
  for (;number.toString().length > 1; count++) {
    let result = 0;
    for (let i = 0; i < number.toString().length; i++) {
      result += Number(number.toString()[i]);
    }
    number = result;
  }
  return count;
}
 
function multiplicativePersistence(number) {
  let count = 0;
  for (;number.toString().length > 1; count++) {
    let result = 1;
    for (let i = 0; i < number.toString().length; i++) {
      result *= Number(number.toString()[i]);
    }
    number = result;
  }
  return count;
}
