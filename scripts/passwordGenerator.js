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

let progressBar    = document.getElementById('length-progress');
let progressNumber = document.getElementById('length-number');
let passwordText   = document.getElementById('password-text');
let progressStrength = document.getElementById('progress-strength');
progressBar.addEventListener('change', function(e){
  let value = e.target.value;
  console.log(e.target.value)
  //update the progressNumber
  progressNumber.value = value;
  //update text
  passwordText.value = generateNewPassword(value);
  //update progressbar of strength
  changeProgressBar(value);
 
});

progressNumber.addEventListener('change', function (e)   {
  let value = e.target.value;
  console.log(e.target.value)
  //update the progressBar
  progressBar.value = value;
  //update text
  passwordText.value = generateNewPassword(value);
    //update progressbar of strength
    changeProgressBar(value);
});

//this function gets excuted once

passwordText.value = generateNewPassword(5);




function generateNewPassword(passwordLength){
  let arrayOfChars = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","!","@","-","#","$"];
  let password = "";
  //step 01-1  shuffle array
  arrayOfChars = shuffle(arrayOfChars);
  //get random password based on length
  for(let i=0; i<passwordLength ; i++){
    password = password + arrayOfChars[Math.floor(Math.random()*arrayOfChars.length)]
  }
  return password;
}
function changeProgressBar(value){
    if (value < 5){
       progressStrength.style.width = "10%";
       progressStrength.className = "progress-bar-striped bg-warning"
      }
    else if (value >= 6 && value < 10) {
      progressStrength.style.width = "40%";
      progressStrength.className = "progress-bar-striped bg-info"
    }  
    else if (value >= 11 && value < 20) {
      progressStrength.style.width = "70%";
      progressStrength.className = "progress-bar-striped bg-primary"
    }
    else if (value >= 21) {
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
