console.log("I'm not a witch, I'm your wife! But I'm not even sure I'm that anymore. -Princess Bride")


// Write a program that prints the numbers from 1 to 100. 
// But for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number
// and for the multiples of seven (7, 14, 21, etc.) print "Monkey". 
// For numbers which are multiples of both five and seven print "ChickenMonkey".

// To determine if a number can be evenly divided by 5 or 7,
// use the JavaScript remainder operator.

// You can start with this simpler version that outputs
// even numbers to the console and ignores odd numbers.
// You need to refactor this code to meet the requirements above.





// for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
//     if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
//         console.log("ChickenMonkey");
//     } else if (currentNumber % 5 === 0) {
//         console.log("Chicken");
//     } else if (currentNumber % 7 === 0) {
//         console.log(currentNumber,
//         console.log(currentNumber)
//     }
// }

// THIS HELPED MAKE IT MORE DRY
// https://www.youtube.com/watch?v=QPZ0pIK_wsc

for (let i = 1; i <= 100; i++) {
    var output= "";
    if(i % 5 == 0) {
        output += "Chicken";
    }
    if(i % 7 == 0) {
        output += "Monkey"; 
    }
    if (output == "") {
        output = i;
    }
    console.log(output);
}