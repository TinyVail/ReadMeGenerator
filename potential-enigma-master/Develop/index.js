// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [{
    type: "list",
    name: "colorChoice",
    message: "Choose your favourite color",
    choices: ["Red", "Orange", "Yellow", "Green"],
    default: 0
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            console.log(`Your favourite Color is ${answers.colorChoice}`);
        });
}

// Function call to initialize app
init();

console.log("i like turtles");