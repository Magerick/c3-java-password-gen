# JavaScript Password Generator

## Description
To better protect sensitive user data, employees can use this webpage to randomly generate a password with various text characters. It was created by refactoring code in JavaScript. The page generates a password after confirming a selection of window prompts.

## Installation
N/A

## Usage
Pressing the "Generate Password" button cascades a chain of windows that ask the user to confirm or deny each password criteria. The script will ask how many characters (between 8 to 128) they want in their password; and whether or not they want lowercase, UPPERCASE, numeric (ex. 1, 2;  3), or symbolic text (!, @; #) characters.

![Password Generator Demo](assets/images/screen-1.gif?raw=true)

When inputting an invalid number the password character limit, the script will alert the user to use a valid number:
!["Use a number that is not a word, letter, or symbol."](assets/images/screen-2.gif?raw=true)

If a user cancels every character type after setting the character limit, the password will default to generating lowercase characters:
![The password will default to generating lowercase characters.](assets/images/screen-3.gif?raw=true)

## Credits
N/A

## License
Licensed under the MIT license.
