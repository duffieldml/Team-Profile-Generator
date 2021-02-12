//require inquirer package
// fs will be needed as well
// will require each aspect of the employees
const manager = require("./lib/manager"); // complete file path for the require
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const inquirer = require('inquirer');
const fs = require('fs');

// function for building information about employee
// Asking for name, email, id, role, and github

// function for creating the team
const questions = [
    {
    type: "input",
    name: "name",
    message: "What is your name?",
    },
    {
    type: "input",
    name: "id",
    message: "What is your id?",
    },
    {
    type: "input",
    name: "email",
    message: "What is your email address?",
    },
    {
    type: "input",
    name: "description",
    message: "Please provide a brief description of your project",
    },
    {
    type: "checkbox",
    name: "contents",
    message: "Please select all what contents you want in your readme",
    choices: ['Installation', 'Usage', 'License', 'Contribution-Guidelines', 'Contributors', 'Tests', 'Questions'],
    },
    {
    type: "input",
    name: "instructions",
    message: "Please provide step by step installation instructions",
    },
    {
    type: "input",
    name: "usage",
    message: "What is the usage",
    },
    {
    type: "list",
    name: "license",
    message: "What lisence will the project use?",
    choices: ['MIT', 'GNU', 'Apache'],
    },
    {
    type: "input",
    name: "contributing",
    message: "Who else is contributing(besides yourself)? List all contributors' github name. Please seperate multiple entries by commas.",
    },
    {
    type: "input",
    name: "tests",
    message: "Please detail the testing procedures",
    },
];

function init() {
    inquirer
        .prompt([ 
            {
            type: "input",
            name: "name",
            message: "What is your name?",
            },
            {
            type: "input",
            name: "id",
            message: "What is your id?",
            },
            {
            type: "input",
            name: "email",
            message: "What is your email address?",
            },
            {
            type: "input",
            name: "officeNumber",
            message: "What is your office number?",
            },
        ])
        // .then((data) => writeFileAsync(`${data.title}.md`, writeToFile(data)))
        // Will need to pull data from the command line
        // data.managername
        // check documentation for inquirer to validate answers
        // 
        .then((data) => writeToFile(data))
        .catch((err) => console.error(err));
}
// Function call to initialize app
init();