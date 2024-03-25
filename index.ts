#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 10 + 1);

const answers = await inquirer.prompt([
  {
    name: "UserGuessedNumber",
    type: "number",
    message: "please try to guess a number between 1-10:",
  },
]);

if(answers.UserGuessedNumber == randomNumber){
    console.log("welldone! you guessed the right number");
}else{
    console.log("unfortunately, that's not the right number you guessed");
}