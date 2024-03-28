#! /usr/bin/env node
import inquirer from "inquirer"

//Computer will generate a random number

//user input for guessing number

//compare user input with computer genrated number
// const num1 = Math.random();
// const num2 = (num1 * 10) +1;
const randomNumber = Math.floor(Math.random()*10 + 1);
const answer = await inquirer.prompt([
{
    name : "userGuessNumber",
    type : "number",
    message : "Please guess the number I have generated between 1 to 10 "
},
]);

if (answer.userGuessNumber === randomNumber) {
    console.log(`congratulations,you guessed the right number! I have generated ${randomNumber}.`);
} else {
    console.log(`You guess wrong number,the generated number is ${randomNumber}`);
}