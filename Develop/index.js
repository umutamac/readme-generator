const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const {generateMarkdown} = require("./utils/generateMarkdown.js");


// array of questions for user
const questions = [
    {
        type: "input",
        message: "Name of the project:",
        name: "title"
    },
    {
        type: "input",
        message: "Add a description of the program:",
        name: "description"
    },
    {
        type: "input",
        message: "Add an installation instructions for this program if needed:",
        name: "install"
    },
    {
        type: "input",
        message: "Add a guide for the users:",
        name: "usage"
    },
    {
        type: "input",
        message: "Write the names and Github usernames of your collaborators on this project:",
        name: "collaborators"
    },
    {
        type: "list",
        message: "Pick a license for this project:",
        choices:[ // from https://opensource.org/licenses
            "Apache_2.0",
            "BSD3",
            "BSD2",
            "GPL",
            "LGPL",  
            "MIT", 
            "Mozilla_PL_2.0",
            "Common_DDL",
            "Eclipse_PL_v2.0"],
        name: "selectedLicense"
    },
    {
        type: "input",
        message: "Your Github user name:",
        name: "creatorGithub"
    },
    {
        type: "input",
        message: "Your email address:",
        name: "creatorEmail"
    }
];

// function to write README file
const writeFileAsync = util.promisify(fs.writeFile);    

// function to prompt the questions to user
function promptUser(){
    return inquirer.prompt(questions);
}

// function to initialize program
function init(){
    promptUser() 
        .then(function(data) { // send answers to generateMarkdown.js to write and generate readme file
            const markdown = generateMarkdown(data);
            return writeFileAsync("readme.md",markdown);
        })
        .then(function() { // if everything went well, display a success message
            console.log("Successfully wrote to readme.md");
        })
        .catch(function(err) { // write the error if any occur
            console.log(err)
        });
}

// run the program
init();


