// Create employee card for Manager.
const generateManagerCard = (manager) => {
    return `
        <div class="justify-content-center p-2" id="manager">
            <div class="card text-center" style="width: 15rem">
                <ul class="list-group">
                    <h5 class="card-header">Manager</h5>
                    <li class="list-group-item">${manager.name}</li>
                    <li class="list-group-item">${manager.id}</li>
                    <li class="list-group-item">${manager.email}</li>
                    <li class="list-group-item">${manager.officeNumber}</li>
                </ul>
            </div>
        </div>
    `;
};

// Create employee card for Engineer.
const generateEngineerCard = (engineer) => {
    return `
        <div class="justify-content-center p-2" id="manager">
            <div class="card text-center" style="width: 15rem">
                <ul class="list-group">
                    <h5 class="card-header">Engineer</h5>
                    <li class="list-group-item">${engineer.name}</li>
                    <li class="list-group-item">${engineer.id}</li>
                    <li class="list-group-item">${engineer.email}</li>
                    <li class="list-group-item">${engineer.github}</li>
                </ul>
            </div>
        </div>
    `;
};

// Create employee card for Intern.
const generateInternCard = (intern) => {
    return `
        <div class="justify-content-center p-2" id="manager">
            <div class="card text-center" style="width: 15rem">
                <ul class="list-group">
                    <h5 class="card-header">Intern</h5>
                    <li class="list-group-item">${intern.name}</li>
                    <li class="list-group-item">${intern.id}</li>
                    <li class="list-group-item">${intern.email}</li>
                    <li class="list-group-item">${intern.github}</li>
                </ul>
            </div>
        </div>
    `;
};

generateHTML = (data) => {
    HTMLArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        switch (role) {
            case 'Manager':
                const managerCard = generateManagerCard(employee);
                HTMLArray.push(managerCard);
                break;
            case 'Engineer':
                const engineerCard = generateEngineerCard(employee);
                HTMLArray.push(engineerCard);
                break;
            case 'Intern':
                const internCard = generateInternCard(employee);
                HTMLArray.push(internCard);
                break;
            default:
                break;
        }
    }

    const employeeCards = HTMLArray.join('')

    const generateTeam = generateTeamInHTML(employeeCards)
    return generateTeam; 
}

const generateTeamInHTML = function(employeeCards) {
    return`
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <title>Team Profile Sample Template</title>
        </head>

        <body>
            <header>
                <div class="container-fluid">
                    <nav class="navbar bg-info border-2 justify-content-center">
                        <h1>My Team Profile</h1>
                    </nav>
                </div>
            </header>

            <main>
                <div class="container">
                    <div class="row">
                        <!-- Team Cards go here -->
                        ${employeeCards}
                    </div>
                </div>
            </main>

            <footer>
                <div class="container-fluid bg-info border-2 text-center">
                    <div class="row">
                        <div class="col-sm-12 col-lg-6 align-self-center">
                            <h4>Contact APP Developer</h4>
                        </div>

                        <div class="col-sm-12 col-lg-3">
                            <ul class="list-group">
                                <a href="https://github.com/MiinoSil" target="_blank" class="list-group-item list-group-item-action list-group-item-secondary">GitHub Profile</a>
                                <a href="https://www.linkedin.com/in/andrew-ngo-13659760" target="_blank" class="list-group-item list-group-item-action list-group-item-secondary">LinkedIn Profile</a>
                            </ul>
                        </div>

                        <div class="col-sm-12 col-lg-3">
                            <ul class="list-group">
                                <a href="mailto:andvngo@mgail.com" target="_blank" class="list-group-item list-group-item-action list-group-item-secondary">📧 Email</a>
                                <a href="tel:949-636-2225" target="_blank" class="list-group-item list-group-item-action list-group-item-secondary">☎️ (949) 636-2225</a>
                            </ul>
                        </div>
                    </div>
        
                    <div class="row">
                        <h5>©️ 2022, Made with 💕 by Andrew Ngo</h5>
                    </div>
                </div>
            </footer>
        </body>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </html>
    `
};


// Module export function.
module.exports = generateHTML;