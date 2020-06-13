// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  function generatePassword(){
    // asks user for pass length
    var userPrompt = parseInt(prompt("What length of password would you like? (Between 8 and 128"))
    console.log(userPrompt)
    // makes them enter between 8 and 128
    if(userPrompt < 8 || userPrompt >128){
      alert("Please enter a valid length.")
      generatePassword();
    }
    // currently works for if they close out of the prompt ----- FIX THIS
    else{
      alert("This is a valid length")
      // prompt types
      var characterType = ["lowercase letters", "uppercase letters", "numbers", "special characters"];
      //store type response
      var upCase;
      var lowCase;
      var includeNum;
      var specChar;
      var responseHolder = [lowCase, upCase, includeNum, specChar]
      
      // loop to ask about all types
      for(i = 0; i<characterType.length; i++){
        responseHolder[i] = confirm("Would you like to include " + characterType[i]+ " in your password?")
        if (responseHolder[i] === true){
          console.log("true")
        }else{
          console.log("false")
        }
      }

    }
  }
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

