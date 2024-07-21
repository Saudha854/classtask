//Task: 1 function to reverse an array
function reverseArr(input) {
    var ret = new Array;
    for(var i = input.length-1; i >= 0; i--) {
        ret.push(input[i]);
    }
    return ret;
}
var a = [1,2,3,4,5,6,7]
var b = reverseArr(a);


// Task :2 Remove negative number
let userInput = prompt("Enter a number:");
let number = parseFloat(userInput);
if (isNaN(number)) {
    console.log("Invalid input. Please enter a valid number.");
} else {
    if (number > 0) {
        console.log("The number is positive.");
    } else if (number < 0) {
        console.log("The number is negative.");
    } else {
        console.log("The number is zero.");
    }
}
// Task: 3 Return the number of vowels in a string.
let UserName = "Javeriya Tariq";
function integer(UserName){
    if (UserName === a || UserName === e ||UserName === i ||UserName === a ||UserName === o ||UserName === u ){
        return "TRUE";
    }
}
//Task : 4
let word = "refer"
function palindrome(){
    if (str === str.reverse){
        return ("True");
    }
    palindrome(word);

}
// Task: 5 check the integer value 
var numb1 = 78;
var numb2 = 80;
    if (numb1 >= 55  && numb2 <= 99){
        console.log ("True");
    }
    //Task:6

    //Task :7
let str = "Hellow, World!";
function newstring(str) {
    if (str.length >= 3) {
        result_str = str.substring(str.length - 3);
        return result_str + result_str + result_str + result_str;
    } else {
        return false;
    }
}

// Task :8 find an angle type
function angle_Type(angle) {
    if(angle < 90) {
      return "Acute angle.";  
    }
    if(angle === 90) {
      return "Right angle.";  
    }
    if(angle < 180) {
      return "Obtuse angle."; 
    }
    if(angle === 180) {
        return "Straight angle."; 
      }
} 
angle_Type();

// Task : 9 
let num = Math.random();
Math.floor(num);

//Task :10 
 let items = [" Chips" , "Pizza" , "ice cream", "cookies"];
 for (let [index, item] of items.entries()) {
    console.log(`${index}: ${item}`);
  }


