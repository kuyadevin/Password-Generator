// Assignment Code
var generateBtn = document.querySelector("#generate");
var charWanted=[]
var allCaps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var allLower= "abcdefghijklmnopqrstuvwxyz"
var num="1234567890"
var specialChar="'!@#$%^&()"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // function generate password was undefined
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  // GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria

var passwordStart=prompt("How many characters would you like?")

console.log(passwordStart)

//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
if (passwordStart >= 8 && passwordStart < 128){
  var confrimLC=confirm("Would you like lowercase letters?");
} else {return  alert("Password does not fit the parameters.")}


if (confrimLC=true){
  var confirmUC=confirm("Would you like uppercase letters?")
}else {var noLC=confirm("Would you like uppercase letters?")}

if (confirmUC=true){
  var confirmNum=confirm("Would you like numbers in your password?")
} else {var noUC=confirm("Would you like numbers in your password?")}

if (confirmNum=true){
  var special=confirm("Would you like special characters?")
} else {var noNum=confirm("Would you like special characters?")}


if(confirmLC=true) {
  charWanted=charWanted.concat(allLower)
console.log(charWanted)
}
if(confirmUC=true){
  charWanted=charWanted.concat(allCaps)
}
if(confirmNum=true){
  charWanted=charWanted.concat(num)
}
if(special=true){
  charWanted=charWanted.concat(specialChar)}
  console.log(charWanted)
  
    var password= ""
    for(var i = 0; i<= passwordStart; i++){
      password+= charWanted[Math.floor(Math.random() *charWanted.length)];
    }
    console.log(password)
    }



//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page

