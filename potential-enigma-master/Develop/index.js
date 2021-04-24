// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "projectTitle",
    message: "What is the name of your project?",
},
{
    type: "input",
    name: "description",
    message: "Please enter a description of your project",

},
{
    type: "input",
    name: "installation",
    message: "Please enter installation instructions",
},
{
    type: "input",
    name: "usageInfo",
    message: "Please enter the projects usage information",
},
{
    type: "input",
    name: "contributionGuidelines",
    message: "Please enter your projects contribution guidelines",
},
{
    type: "input",
    name: "testInstructions",
    message: "Please enter testing instructions for your project",
},
{
    type: "list",
    name: "license",
    message: "Please choose your license from the list below",
    choices: [
        "Apache License 2.0",
        "BSD 3-Clause \"New\" or \"Revised\" license",
        `BSD 2-Clause "Simplified" or "FreeBSD" license`,
        `GNU General Public License (GPL)`,
        `GNU Library or "Lesser" General Public License (LGPL)`,
        `MIT license`,
        `Mozilla Public License 2.0`,
        `Common Development and Distribution License`,
        `Eclipse Public License version 2.0`]
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            // step 1: generate markdown from answers
            const markdown = generateMarkdown(answers);
            // step 2: save that markdown to a file
            writeToFile("readme.md", markdown);
        });
}


// Function call to initialize app
init();
