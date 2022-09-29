// Assignment Code
var generateBtn = document.querySelector("#generate");
  var options = []
  var userChoice = window.prompt("Password must be 8-128 characters long.")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
