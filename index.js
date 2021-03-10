const inquirer = require('inquirer');
const fs = require('fs');

const generateReadMe = function(answers) {
    `how ${answers.project}
    ${answers.description}
    ${answers.installation}
    ${answers.usage}
    ${answers.contributing}
    ${answers.tests}
    ${answers.license}`;
}


inquirer
    .prompt([
       {
         type: 'input',
         name: 'project',
         message: 'What is the name of your project?',
       },
       {
         type: 'input',
         name: 'description',
         message: 'Enter a description of your project',
       },
       {
         type: 'input',
         name: 'installation',
         message: 'Enter instructions for installation',
       },
       {
         type: 'input',
         name: 'usage',
         message: 'What are the metrics you will use to measure usage?',
       },
       {
         type: 'input',
         name: 'contributing',
         message: 'Enter the criteria for contributing',
       },
       {
         type: 'input',
         name: 'tests',
         message: 'Enter instructions for tests that will be performed',
       },
       {
         type: 'list',
         name: 'license',
         choices: ['MIT', 'APACHE', 'GPL', 'ISC'],
       },
     ])
     .then((answers) => {
       const ReadMeContent = generateReadMe(answers);
   
       fs.writeFile('Readme.md', ReadMeContent, (err) =>
         err ? console.log(err) : console.log('Successfully created Readme.md!')
       );
    });