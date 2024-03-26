#!/usr/bin/env node
import chalkAnimation from 'chalk-animation';
import chalk from 'chalk';
const rainbow = chalkAnimation.rainbow('TRY CLC  GAME ');
setTimeout(() => {
    rainbow.stop();
}, 1000);
setTimeout(() => {
    rainbow.start();
}, 3000);
import inquirer from "inquirer";
let number_generate = Math.floor(Math.random() * 5 + 1);
const answer1 = await inquirer.prompt([
    {
        name: "user_guest",
        type: "number",
        message: "write your guest_number  between 1 to 10",
    }
]);
const { user_guest } = answer1;
console.log(`${user_guest} , your guess ,${number_generate} ,system generate number`);
if (user_guest == number_generate) {
    console.log(chalk.blue("your answer is correct , your WIN GAME"));
}
else {
    console.log(chalk.green("TRY AGAIN"));
}
