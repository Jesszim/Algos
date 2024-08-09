// 1. Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.

// let str = "happy"
// if (str.includes("y")){
//     console.log("yes")
// }else{
//     console.log("no")
// }

// 2. Write a program that transforms a numerical grade to a letter grade
// const letterGrade = (num) => {
// if (num>=90){
//     return "A";
// } else if (num>=80){
//     return "B";
// }else if (num>=70){
//     return "C";
// }else if (num>=60){
//     return "D";
// }else{
//     return "F";
// }
// }
// console.log(letterGrade(76))

// 3. Write a program that will allow someone to guess a four digit pin exactly 4
// times. If the user guesses the number correctly. It prints “That was
// correct!” Otherwise it will print “Sorry that was wrong.” Program stops after the 4th attempt of if they got it right.
// let pin = 2387
// function guess(num){
//     if (num != pin){
//         return "Sorry that was wrong."
//     } else{
//         return "That was correct!"
//     }
// }
// console.log(guess(4536))

// 4. Write a program that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15
// const price = (age) =>{
//     if(age<12){
//         return "ticket price $5"
//     } else if (age<18){
//         return "ticket price $10"
//     } else if (age<60){
//         return "ticket price $20"
//     } else {
//         return "ticket price $15"
//     }
// }
// console.log(price(78))

// 5. Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen

// for (let i=0;i<=15;i++){
// console.log(i)
//      if (i % 2 == 0){
//              console.log("even")
//         } else {
//             console.log("odd") 
// }
// }

// 6. Using a for loop output the elements in reverse order
// let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
// for (let i=8; i>=0; i--){
// console.log(arr[i])
// }

// 7. Get the sum of two arrays…actually the sum of all their elements
// let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2];
// let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];
// // expected output: 627
// let arr_3 = []
// for (let i = 0; i < arr_1.length;i++) {
//     arr_3.push(arr_1[i]+arr_2[i])
// }
// console.log(arr_3.reduce((a,b)=> a+b))

// 8. Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0
// hint: num will be an argument passed into a function


// const summation=(num)=> {
//     let sum1=1
//  for (let i=2; i<=num; i++) {

// sum1 *= i;
// }

// return sum1;
// }
// console.log(summation(10));

// 9. Write a program that greets the user based on the time of day. Display good morning, good afternnon or good evening based on the time of day when you run the code
// const greeting = (time) =>{
//     if (time<1100){
//        return "good morning"
//     } else if (time<1600){
//         return "good afternoon"
//     } else {
//         return "good evening"
//     }
// }
// console.log(greeting(1151))

// 10. Write a simple number guessing game. Provide a secret number and a guess. Based on those numbers give players clues if their guess is higher, lower or correct.
// let secretNum=2387
// function game(guess){
// if (guess>secretNum){
//     console.log("lower")
// }else if (guess<secretNum){
//     console.log("higher")
// }else {
//     console.log("correct")
// }}
// console.log(game(1111))

// 11. Write a function that takes in two arguments, num1 and num2, then prints all the numbers from num1 to num2
  
//   const prints=(num1,num2)=>{
// for(let i = num1; i <= num2;i++){
// console.log(i)
// }
// }
// console.log(prints(4,9))

// 12.  Iterate through all numbers from 1 to 45. Print the following:

// For multiples of 3 print “Fizz”
// For multiples of 5 print “Buzz”
// For multiples of 3 and 5 print “FizzBuzz”
// for (let i=1; i<=45; i++){
//    console.log(i)
//     if(i%3==0&&i%5==0){
//         console.log("FizzBuzz")
//     } else if(i%3==0){
//         console.log("Fizz")
//     } else if(i%5==0){
//         console.log("Buzz")
//     }else{
//         console.log("")
//     }
// }

// 13. Create a function that takes in an array, arr, and a number, num, then finds the index of the given number.
// let arr = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]
// const findTheIndex = (arr,num) => {
//     return arr.indexOf(num)
// }
// console.log(findTheIndex(arr,71))

// 14. Write a function that takes in an undetermined amount of arguments, then prints them to the console individually
// function args(...args){
    
//     for (let i=0;i<args.length;i++){
//         console.log(args[i])
//     }

// }
// console.log(args(3,4,5,6,7))