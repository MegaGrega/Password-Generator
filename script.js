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
      //create var for response holder
      var upCase;
      var lowCase;
      var includeNum;
      var specChar;
      var responseHolder = [lowCase, upCase, includeNum, specChar]
      //asks user types they want to include
      function askType(){
        for(i = 0; i<characterType.length; i++){
          responseHolder[i] = confirm("Would you like to include " + characterType[i]+ " in your password?")
        // // true false checker for variables
          console.log(responseHolder[0] === true)
          console.log(responseHolder[1] === true)
          console.log(responseHolder[2] === true)
          console.log(responseHolder[3] === true)
        }
      }
      askType();
      // if user does not choose an option it prompts them to select at least one option
      if(responseHolder[0] === false && responseHolder[1] === false && responseHolder[2] === false && responseHolder[3] === false){
        alert("Please select at least one option")
        askType();
      }
      // if user selected at least one option - generate password based on user input
      else{

      }
    }
  }
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

