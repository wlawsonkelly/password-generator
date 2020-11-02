// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

//Array of types of password characters
var specialCharactersArray = [" ", "!", "#", "$", "%", "&", "\'", "\"", "(", ")", "*", "+", ",", "-", ".", "/", ";", ":", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbersArray = [0,1,2,3,4,5.6,7,8,9];

var passwodLength = 8;
var specialCharactersBool = false
var numbersBool = false
var upercaseBool = false
 
var password = ""
// Write password to the #password input
function writePassword() {
//Wipe current password clean
passwordText.value = ""
//Prompt/Confirm 
 passwodLength = parseInt(prompt("How long do you want your password to be (INT between 8-128)"));
 specialCharactersBool = confirm("Do you want special characters?");
 numbersBool = confirm("Do you want numbers");
 upercaseBool = confirm("Do you want to use uppercase letters?");

console.log(passwodLength + "\n" + specialCharactersBool + "\n" + numbersBool + "\n" + upercaseBool + "\n" + "-----------------------------");

  generatePassword();

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  console.log("PW Starting");
console.log(specialCharactersBool);
//lowercase Only
  if (specialCharactersBool === false && numbersBool === false && upercaseBool === false) {
    console.log("Starting Pre for loop");
    console.log(passwodLength);
    for (var i = 0; i < passwodLength; i++){
      password = password + lowercaseArray[Math.floor(Math.random() * lowercaseArray.length)];
    }
  } 
  // Special Characters only
  else if (specialCharactersBool === true && numbersBool === false && upercaseBool === false) {
    var newArray = lowercaseArray.concat(specialCharactersArray);
    console.log(newArray);
    for (var i = 0; i < passwodLength; i++){
      password = password + newArray[Math.floor(Math.random() * newArray.length)];
      console.log(password);
    }
  }
  //numbers only 
  else if (specialCharactersBool === false && numbersBool === true && upercaseBool === false) {
    var newArray = lowercaseArray.concat(numbersArray);
    console.log(newArray);
    for (var i = 0; i < passwodLength; i++){
      password = password + newArray[Math.floor(Math.random() * newArray.length)];
      console.log(password);
    }
  } 
  //Uppercase Only 
  else if (specialCharactersBool === false && numbersBool === false && upercaseBool === true) {
    var newArray = lowercaseArray.concat(uppercaseArray);
    console.log(newArray);
    for (var i = 0; i < passwodLength; i++){
      password = password + newArray[Math.floor(Math.random() * newArray.length)];
      console.log(password);
    }
  } 
  // Special And Numbers
  else if (specialCharactersBool === true && numbersBool === true && upercaseBool === false) {
    var newArray = lowercaseArray.concat(specialCharactersArray, numbersArray);
    console.log(newArray);
    for (var i = 0; i < passwodLength; i++){
      password = password + newArray[Math.floor(Math.random() * newArray.length)];
      console.log(password);
    }
  } 
// Special and Upper Case
else if (specialCharactersBool === true && numbersBool === false && upercaseBool === true) {
  var newArray = lowercaseArray.concat(specialCharactersArray, uppercaseArray);
  console.log(newArray);
  for (var i = 0; i < passwodLength; i++){
    password = password + newArray[Math.floor(Math.random() * newArray.length)];
    console.log(password);
  }
} 
// Numbers and Uppercase
else if (specialCharactersBool === false && numbersBool === true && upercaseBool === true) {
  var newArray = lowercaseArray.concat(numbersArray, uppercaseArray);
  console.log(newArray);
  for (var i = 0; i < passwodLength; i++){
    password = password + newArray[Math.floor(Math.random() * newArray.length)];
    console.log(password);
  }
} 
//All three
else if (specialCharactersBool === true && numbersBool === true && upercaseBool === true) {
  var newArray = lowercaseArray.concat(specialCharactersArray, uppercaseArray, numbersArray);
  console.log(newArray);
  for (var i = 0; i < passwodLength; i++){
    password = password + newArray[Math.floor(Math.random() * newArray.length)];
    console.log(password);
  }
} 

};
