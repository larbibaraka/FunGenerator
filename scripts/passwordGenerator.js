/**
 * created by baraka larbi
 * laridev
 * -life is easy y'r so weak-
 * --> tasks : 
 *    task 1 : get the value from progress-bar && number-input  
 *    task 2 : update the password-text based on strength
 *    task 3 : get options && and update the password-text 
 *    task 4 : work on copy && generate
 *      
 */

console.log('##################### welecome to password generator app #############################');

// step 1 :  get the strength
let progressBar = document.getElementById('length-progress');
let progressNumber = document.getElementById('length-number');
let passwordText = document.getElementById('password-text');
let progressStrength = document.getElementById('progress-strength');
let generateNewpassword = document.getElementById('generateNewpassword');
let copypassword        = document.getElementById('copypassword');
let option1 = document.getElementById('radio-1');
let option2 = document.getElementById('radio-2');
let currentOption  = "";
let uppercase =  document.getElementById('uppercase');
let lowercase =  document.getElementById('lowercase');
let numbers =  document.getElementById('numbers');
let symbols =  document.getElementById('symbols');
let arrayOfChars = [];
let numbersChars = Array.from(Array(10).keys())
let lowerCaseChars = Array.from(Array(26).keys()).map(value => String.fromCharCode(97 + value));
let upperCaseChars = lowerCaseChars.map(letter => letter.toUpperCase());
let symbolsChars = ["~", "!", "@", "-", "#", "$"];


  //this block gets excuted once
  getArrayOfChars();
  passwordText.value = generateNewPassword(5, "easy");




progressBar.addEventListener('change', function (e) {
  let value = e.target.value;
  console.log(e.target.value)
  //update the progressNumber
  progressNumber.value = value;
  //update text
  passwordText.value = generateNewPassword(value, currentOption);
  //update progressbar of strength
  changeProgressBar(value);
});

progressNumber.addEventListener('change', function (e) {
  let value = e.target.value;
  console.log(e.target.value)
  //update the progressBar
  progressBar.value = value;
  //update text
  passwordText.value = generateNewPassword(value);
  //update progressbar of strength
  changeProgressBar(value, currentOption);
});

option1.addEventListener('click' , function(e){
  console.log('option1 ; ', e.target.value)
  uppercase.setAttribute('checked' , 'checked');
  lowercase.setAttribute('checked' , 'checked');
   numbers.setAttribute('disabled' , 'disabled');
  symbols.setAttribute('disabled' , 'disabled');
  numbers.removeAttribute('checked');
  symbols.removeAttribute('checked');
  getArrayOfChars();
  currentOption = e.target.value;
  passwordText.value = generateNewPassword(progressBar.value, currentOption);
  
});

option2.addEventListener('click', function (e) {
  console.log('option2 ; ', e.target.value)
  uppercase.setAttribute('checked' , 'checked');
  lowercase.setAttribute('checked' , 'checked');
  numbers.removeAttribute('disabled');
  symbols.removeAttribute('disabled');
  numbers.setAttribute('checked' , 'checked');
  symbols.setAttribute('checked' , 'checked');
  getArrayOfChars();
  currentOption = e.target.value;
  passwordText.value = generateNewPassword(progressBar.value, currentOption);
});

generateNewpassword.addEventListener('click' , function(){
  passwordText.value = generateNewPassword(progressBar.value, currentOption);
});

 let clipboard = new ClipboardJS(copypassword);
  
  clipboard.on('success', function(e) {
    passwordText.value = e.text;
    console.log(e.text)
  });
 

/**
 * this function is used to generate new password
 * @param {int} passwordLength
 *
 * */
function generateNewPassword(passwordLength) {
   
  let password = "";
  //step 01-1  shuffle array
  //arrayOfChars = shuffle(arrayOfChars);
  //get random password based on length
  for (let i = 0; i < passwordLength; i++) {
    password = password + arrayOfChars[Math.floor(Math.random() * arrayOfChars.length)]
  }
  return password;
}

/**
 * this function is used to change the width and the color of progress bar
 * @param {int} value 
 */
function changeProgressBar(value) {
  if (value < 5) {
    progressStrength.style.width = "10%";
    progressStrength.className = "progress-bar-striped bg-warning"
  } else if (value >= 6 && value < 10) {
    progressStrength.style.width = "40%";
    progressStrength.className = "progress-bar-striped bg-info"
  } else if (value >= 11 && value < 20) {
    progressStrength.style.width = "70%";
    progressStrength.className = "progress-bar-striped bg-primary"
  } else if (value >= 21) {
    progressStrength.style.width = "100%";
    progressStrength.className = "progress-bar-striped bg-success"
  }

}

//shufle array
/**
 * Randomly shuffle an array
 * https://stackoverflow.com/a/2450976/1293256
 * @param  {Array} array The array to shuffle
 * @return {String}      The first item in the shuffled array
 */
function shuffle(array) {

  var currentIndex = array.length;
  var temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;

};
 
/**
 * this function is used to return the array of chars based on selection of user
 */
function getArrayOfChars(){
  arrayOfChars = [];
  if(uppercase.checked){
    
    arrayOfChars = arrayOfChars.concat(upperCaseChars)
  }
  if(lowercase.checked){
    arrayOfChars = arrayOfChars.concat(lowerCaseChars)
  }
  if(numbers.checked){
    arrayOfChars = arrayOfChars.concat(numbersChars)
  }
  if(symbols.checked){
      arrayOfChars = arrayOfChars.concat(symbolsChars)
  }
}
