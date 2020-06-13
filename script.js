// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  function generatePassword(){
    // asks user for pass length
    var userPrompt = parseInt(prompt("What length of password would you like? (Between 8 and 128"))
    
    // makes them enter between 8 and 128
    if(userPrompt < 8 || userPrompt >128){
      alert("Please enter a valid length.")
      generatePassword();
    }
    // if user hits cancel - they get alerted "goodbye"
    else if(Number.isNaN(userPrompt) === true){
      alert("Goodbye")
    }

    else{
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
        }
      }
      askType();
      
      // if user does not choose an option it prompts them to select at least one option
      while(responseHolder[0] === false && responseHolder[1] === false && responseHolder[2] === false && responseHolder[3] === false){
        alert("Please select at least one option")
        askType();
      }    
      // if user selected at least one option - generate password based on user input
        var finalP = ""
        do{
            var randomAscii = Math.floor((Math.random() * 93) + 33) //generate random number to check ascii char
            //if ascii value is number:
            if((randomAscii > 47 && randomAscii <58)){  //within range of ascii values for num
              if(responseHolder[2] == true){            //does the user want it?
                //valid ascii
                finalP += String.fromCharCode(randomAscii)
              }

            }

            //if ascii value is upper:
            else if((randomAscii > 64 && randomAscii <91)){  //within range of ascii values for upper
                if(responseHolder[1] == true){               //does the user want it?
                  //valid ascii
                  finalP += String.fromCharCode(randomAscii)
                }

              }
            //if ascii value is lower:
            else if((randomAscii > 96 && randomAscii <123)){  //within range of ascii values for lower
                if(responseHolder[0] == true){               //does the user want it?
                  //valid ascii
                  finalP += String.fromCharCode(randomAscii)
                }

            }
            //range is within special, does user want it?
            else if(responseHolder[3] == true){            //does the user want it?
                  //valid ascii
                  finalP += String.fromCharCode(randomAscii)
            }
          }while(!(finalP.length == userPrompt))    //[end] generate finalPassword
          return finalP
    }
  }//generatePassowrd()
  passwordText.textContent = password
}//WritePassword()

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

