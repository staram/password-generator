const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

var userPassword



let passwordGenerator = document.getElementById("password-output")

function generatePassword() {
    userPassword = ""

    for (i = 1; i < 16; i++) {
        let randomCharacter1 = Math.floor ( Math.random()*characters.length)
        userPassword += characters[randomCharacter1]
		passwordGenerator.textContent = userPassword
    }
}

/** Clipboard function **/
function copyPassword() {
	 /* Get the text field */
	 let copyText= document.getElementById("password-output");
    
	 /* Select the text field */
	 copyText.select();
	 
	 /* Copy the text inside the text field */
	 document.execCommand("copy");
}


/** Slider */

var slider = document.getElementById("length-range");
var output = document.getElementById("output-range");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}
