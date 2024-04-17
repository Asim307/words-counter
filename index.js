import inquirer from "inquirer";
const answers = await inquirer.prompt([{
        name: "sentence",
        type: "input",
        message: "enter your sentence to count total words",
    }]);
const words = answers.sentence.trim().split(" ");
console.log(words);
console.log(`"your total words of sentence is " ${words.length}`);
