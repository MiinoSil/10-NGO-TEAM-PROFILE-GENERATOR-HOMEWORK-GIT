// Declare requirements, nodes, modules...
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');

// link to generateHTML.js in 'src'
const generateHTML = require('./src/generateHTML');

// Import team/profile classes from 'lib'
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Employee = require('./lib/employee');

// Empty array to add in team members
const team = [];

// Inquirer questions for Manager and employees, 'then' added to team array
const addManager = () => {
    console.log("Let's start by adding the Team Manager.")
    return inquirer.prompt ([
       {
           type: 'input',
           name: 'name',
           message: 'Who is the team manager (enter a name)?',
           validate: nameInput => {
               if (nameInput) {
                   return true;
               } else {
                   console.log('What is the name for the manager?')
                   return false;
               }
           }
       },
       
       {
           type: 'input',
           name: 'id',
           message: "What is the manager's Id?",
           validate: nameInput => {
               if (nameInput) {
                   return true;
               } else {
                   console.log("Try again, what is the manager's Id?")
                   return false;
               }
           }

       },

       {
           type: 'input',
           name: 'email',
           message: "What is the manager's email?",
           validate: nameInput => {
               if (nameInput) {
                   return true
               } else {
                   console.log("Try again, what is the manager's email?")
                   return false;
               }
           }
       },

       {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's phone number?",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("Try again, what is the manager's phone number?")
                    return false;
                }
            }
       },
    ]).then(managerInput => {
            const { name, id, email, officeNumber } = managerInput;
            const manager = new Manager (name, id, email, officeNumber);

            team.push(manager);
            console.log(manager);
        })
};

const addEmployee = () => {
    console.log("Let's add the other team members.")
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Select the employee's role (⬇️ ⬆️ keys to navigate, 'enter' to submit selection)?",
            choices: ['Engineer', 'Intern'],
        },

        {
            type: 'input',
            name: 'name',
            message: "What is the team member's name (enter a name)?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('What is the name for the team member?')
                    return false;
                }
            }
        },
        
        {
            type: 'input',
            name: 'id',
            message: "What is the team member's Id?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Try again, what is the members's Id?")
                    return false;
                }
            }
 
        },
 
        {
            type: 'input',
            name: 'email',
            message: "What is the member's email?",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("Try again, what is the members's email?")
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's github username?",
            when: (input) => input.role === 'Engineer',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Error, the github username?")
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'school',
            message: "What is the Intern's school name?",
            when: (input) => input.role === 'Intern',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("Error, name of the school?")
                    return false;
                }
            }
        },

        {
            type: 'confirm',
            name: 'confirmMoreEmployees',
            message: "Are there more team member's to add?",
            default: false,
        },

    ]).then(employeeData => {
        let { name, id, email, role, github, school, confirmMoreEmployees } = employeeData;
        let employee;

        switch (role) {
            case 'Engineer':
                employee = new Engineer (name, id, email, github)
                console.log(employee)
                team.push(employee)
                break;

            case 'Intern':
                employee = new Intern (name, id, email, school)
                console.log(employee)
                team.push(employee)
                break;

            default:
                console.log("No more employee's to add.")
                break;
        };
        
        if (confirmMoreEmployees) {
            return addEmployee(team);
        } else {
            return team;
        }
    })
};

// Use inquirer data to generateHTML
const writeToFile = data => {
    fs.writeFile('./dist/index.html', generateHTML(team), 'utf-8', data, err => {
        if (err) {
            console.log(err)
            return;
        } else {
            console.log("Team Profile generated, checkout the index.html in /dist folder")
        }
    })
};

// Inquirer init
addManager()
    .then(addEmployee)
    .then(team => {
        return generateHTML(team)
    }).then(pageHTML => {
        return writeToFile(pageHTML)
    }).catch(err => {
        console.log(err)
    });