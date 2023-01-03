
var specialChar = ["!","$","^","&","*","-","=","+","?",";"];
var numChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCasedChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

function getPasswordOptions() {
  var length = parseInt(
    prompt('How many characters would you like your password to have?'),
    10
  );
  if (Number.isNaN(length)) {
    alert('Password length must be a number');
    return null;
  }
  if (length < 8) {
    alert('Password length must be at least 8 characters');
    return null;
  }
  if (length > 128) {
    alert('Password length must less than 129 characters');
    return null;
  }
  var hasSpecialChar = confirm(
    'Click OK to confirm if you want special characters.'
  );
  var hasNumChar = confirm(
    'Click OK to confirm including number characters.'
  );
  var hasLowerCasedChar = confirm(
    'Click OK to confirm including lowercase characters.'
  );
  var hasUpperCasedChar = confirm(
    'Click OK to confirm including uppercase characters.'
  );
  if (
    hasSpecialChar === false &&
    hasNumChar === false &&
    hasLowerCasedChar === false &&
    hasUpperCasedChar === false
  ) {
    alert('Must select at least one character type');
    return null;
  }


  var passwordOptions = {
    length: length,
    hasSpecialChar: hasSpecialChar,
    hasNumChar: hasNumChar,
    hasLowerCasedChar: hasLowerCasedChar,
    hasUpperCasedChar: hasUpperCasedChar,
  };
  return passwordOptions;
}

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}
function generatePassword() {
  var options = getPasswordOptions();
  var result = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];

  if (!options) return null;

  if (options.hasSpecialChar) {
    possibleCharactters = possibleCharacters.concat(specialChar);
    guaranteedCharacters.push(getRandom(specialChar));
  }
  if (options.hasNumChar) {
    possibleCharacters = possibleCharacters.concat(numChar);
    guaranteedCharacters.push(getRandom(numChar));
  }
  if (options.hasLowerCasedChar) {
    possibleCharacters = possibleCharacters.concat(lowerCasedChar);
    guaranteedCharacters.push(getRandom(lowerCasedChar));
  }
  if (options.hasUpperCasedChar) {
    possibleCharacters = possibleCharacters.concat(upperCasedChar);
    guaranteedCharacters.push(getRandom(upperCasedChar));
  }
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);
    
    result.push(possibleCharacter);
  }
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
    return result.join('');
  }
}
  var generateBtn = document.querySelector('#generate');

  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
    
    passwordText.value = password;
  
  }

  generateBtn.addEventListener('click', writePassword);