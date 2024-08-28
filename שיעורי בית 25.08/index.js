//שאלה 1:
function palindromeChecker(str) {
    let reverseString = str .split('').reverse().join('');
    return reverseString; } 
  let word = "madam"
  if (palindromeChecker(word) === word) 
  console.log("true") 
  else console.log ("false")
  
  let word2 = "racecar"
  if (palindromeChecker(word2) === word2)
    console.log ("true") 
  else
    console.log ("false")
  
  let word3 = "heyworld"
  if (palindromeChecker(word3) === word3)
    console.log ("true") 
  else
    console.log ("false")

//  שאלה מס' 2: 

function guessingGame() { 
    let randomnum = Math.floor(Math.random() *100) + 1;

let guess = 0; 
let attempts = 0; 
// alert (randomnum)
while (guess !== randomnum) {
    guess = (prompt ("נחש מספר בין 1 ל-100"));
    attempts++;

    if (guess==null)
        return;

    if (!(guess>=1 && guess<=100)){
        alert("נא להזין ערך תקין בין 1 ל-100");
    continue;
    }

    if (guess > randomnum)
    {alert("גבוה מידי נסה שנית") }

     else if (randomnum > guess )
        {alert("נמוך מידי נסה שנית") }


     else {
    alert(" הכבוד! ניחשת את המספר " + randomnum + " לאחר "  + attempts + " נסיונות ");
         break; 
        }

    }
}
guessingGame();

// שאלה מס' 3 

function isStrongPassword(password) {
    if (password.length < 8 ) return false;
    if (password.search(/[!@#$%^&*()-+`~{}\';.,><]/) == -1) return false;
    if (password.search(/[0-9]/) == -1) return false; 
    if (password.search(/[a-z]/) == -1 || password.search(/[A-Z]/) == -1) return false;
    return true; 

  }
console.log(isStrongPassword("M090901b!!")) 

// שאלה מס' 4 
function fibonacciSequence(n) {
    if (n==0) return [] 
    if (n==1) return [0]
    let array = [0,1]
    for (let index = 2; index <n; index++)
        array[index] = array[index-2] + array[index-1]
    return array;

  }
console.log (fibonacciSequence(20))  

// שאלה מס' 5
function isPrime(num) {
    if (num < 2) return false; 
    for (let index = 2 ; index<num; index++)
    if (num % index ==0)
        return false;
    return true;
  }
console.log(isPrime(17))

// שאלה מס' 6
function reverseString(str)
  {let reversedword = ""
   for ( let index = str.length-1; index>=0; index--)
    reversedword+=str[index]
return reversedword
}
console.log(reverseString("maybruner"))

// שאלה מס' 7

function sumOfDigits(number) {
    let sum = 0
    for (let index= number; index>0;
        index= Math.floor (index / 10))
        sum= sum+ index %10

  return sum;
}
console.log (sumOfDigits(550))

// שאלה מס' 8
function countOccurrences(str, char) {
    let amount = 0
    for (let index = 0; index <str.length; index++)
        if (str[index]==char) 
            amount++
    return amount;

  }
  console.log (countOccurrences("bamba", "a"))
 
//   שאלה מס' 9 
function multiplicationTable() {
    let table = ""
    for (let index= 1; index <= 10; index++) {    
        for (let index2= 1; index2 <= 10; index2++) {    
            table+= index * index2 + "\t"} //מרווח מסודר=t
        table+= "\n"} //שורה חדשה=n
    return table

  }
console.log (multiplicationTable())

//שאלה מס' 10 
function isArmstrongNumber(number) {
    let sum = 0;
    let num = number + "";
    let digit = num.length; 
    num = number;
    while (num > 0) {
        sum = sum + num % 10 **digit
        num = Math.floor /10}

    return sum === number;
  }
  console.log (isArmstrongNumber(153))