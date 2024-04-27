#! /usr/bin/env node
//shebang
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word:"
    }
]);
const words = answers.Sentence.trim().split(" "); // trim mean remove whitespaces or lines trim remove only first and last spaces // split is a separator elements and convert in array 
//    print the array   
console.log(words);
console.log(`Your Sentence word count is ${words.length}`);
