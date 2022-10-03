// Assignment Code
var generateBtn = document.querySelector("#generate");

// Added var userInput and passwordLength.
function generatePassword() {
  var userInput = window.prompt("How many characters do you want in your password?");
  var passwordLength = parseInt(userInput);
  
// Added an if function and an OR comparator for passwords between 8-128 characters long.
if (passwordLength < 8 || passwordLength > 128) {
  window.alert("The password must be 8 to 128 characters long.");
  return;
}

// Added four prompts for the remaining password criteria.
// Fixed some syntax issues below.
var userWantsLowercase = window.confirm("Do you want lowercase letters in your password?");
var userWantsUppercase = window.confirm("Do you want UPPERCASE letters in your password?");
var userWantsNumbers = window.confirm("Do you want numbers in your password?");
var userWantsSymbols = window.confirm("Do you want symbols in your password?");

// Maded a list for the items above.
var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseList = [];
  // Added a for loop to hopefully convert the lowercase array to UPPERCASE to make my life easier.
  for (var i = 0; i < lowercaseList.length; i++) {
    uppercaseList[i] = lowercaseList [i].toUpperCase();
  }
var numbersList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
// Added a bunch of symbols that usually work whenever I have to make new passwords. Don't know if ` ; : ' " , or . work (of course periods don't work in passwords).
var symbolsList = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "~", "_", "+", "<", ">", "/", "?"];
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
