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
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
