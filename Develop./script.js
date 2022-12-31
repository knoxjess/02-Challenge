const GenerateEl = document.querySelector("#generate")

function createPassword(length) {
  var  letters= "abcdefghijklmnopqrstuvwxyz";
  var capsletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var num = "0123456789";
  var symbols = "!$^&*-=+_?";

  var options = [letters, capsletters, num, symbols];

  var password = "";
  var passwordArray = Array(length);

  for (i = 0; i < length; i++) {
      var currentOption = options[Math.floor(Math.random() * options.length)];
      var randomChar = currentOption.charAt(Math.floor(Math.random() * currentOption.length));
      password += randomChar;
      passwordArray.push(randomChar);
  }
}

function prompts() {
  let lengthPrompt = prompt("How Long would you like your password?")
  var numPrompt = confirm("Do you want numbers?")
  var symPrompt = confirm("Do you want a symbol?")
  var letPrompt = confirm("Do you want letters?")
  var casePrompt = confirm("Do you want upper case?")



  if (numPrompt === true) {
    passwordOpt.push(num)
  }
  if (symPrompt === true) {
    passwordOpt.push(symbols)
  }
  if (letPrompt === true) {
    passwordOpt.push(letters)
  }
  if(casePrompt === true){
    passwordOpt.push(capsletters)
  }
  getPassword(lengthPrompt)
  console.log(passwordOpt)
  
}
let password = ""
function getPassword(length) {
  const div = document.querySelector("#header")
  
}
GenerateEl.addEventListener("click", prompts)
