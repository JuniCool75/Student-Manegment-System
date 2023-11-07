// import inquirer from "inquirer";

// class Student {
//     name;
//     id;
//     balance;
//     course;
//     constructor(name: any, id: number, balance: number, course: any) {
//         this.name = name;
//         this.id = id;
//         this.balance = balance;
//         this.course = course;
//     }
//     viewBalance() {
//         console.log(`Current Balance: ${this.balance}`);
//     }
//     payTuitionFees(fees: number) {
//         this.balance = this.balance - fees;
//     }
//     studentStatus() {
//         return (`
//             Name: ${this.name}
//             Roll No: ${this.id}
//             Balance: ${this.balance}
//             Enrolled Course: ${this.course}
//         `);
//     }
// }
// let newStudent: Student;
// async function HandleInput() {
//     // random roll no generated
//     let studentRollNoGenerated = Math.floor(Math.random() * 90000) + 10000;
//     let data = await inquirer.prompt([
//         {
//             type: "input",
//             name: "name",
//             message: ("Enter Your Name"),
//         },
//         {
//             type: "input",
//             name: "balance",
//             message: ("Enter Your Balance"),
//         },
//         {
//             type: "list",
//             name: "course",
//             message: ("Select The course you want to enroll"),
//             choices: ['Data Science', 'Software Engineering', 'WordPress Developer', 'Web designer', 'App Developer'],
//         }
//     ])

//     newStudent = new Student(data.name, studentRollNoGenerated, parseFloat(data.balance), data.course);
// };


// await HandleInput();
// async function PerformOperation() {
//     let operations = await inquirer.prompt([
//         {
//             type: "list",
//             name: "action",
//             message:("Select Your action you want to perform"),
//             choices: ['Show Balance', 'Pay Tuition Fees', 'Show Status']
//         },
//     ])
//     if (operations.action === "Show Balance") {
//         newStudent.viewBalance();
//     }
//     if (operations.action === "Pay Tuition Fees") {
//         let fees = await inquirer.prompt([
//             {
//                 type: "number",
//                 name: "amount",
//                 message: ("Enter The course fees"),
//             }
//         ]);
//         newStudent.payTuitionFees(fees.amount);
//         newStudent.viewBalance();
//     }
//     if (operations.action === "Show Status") {
//         console.log(newStudent.studentStatus());
//     }
// }

// async function AskQuestions() {
//     let restart;
//     do {
//         await PerformOperation();
//         restart = await inquirer.prompt([
//             {
//                 type: "list",
//                 name: "restart",
//                 message: "Another Action Want to Perfrom ?",
//                 choices: ['Yes', 'No'],
//             },
//         ]);
//     } while (restart.restart === 'Yes');
//     console.log(`App close again start by running "npx ahsan-student_management_system_07" `);
// }





import inquirer from "inquirer";

class Student {
    name;
    id;
    balance;
    course;
    constructor(name: any, id: number, balance: number, course: any) {
        this.name = name;
        this.id = id;
        this.balance = balance;
        this.course = course;
    }
    viewBalance() {
        console.log(`Current Balance: ${this.balance}`);
    }
    payTuitionFees(fees: number) {
        this.balance = this.balance - fees;
    }
    studentStatus() {
        return (`
            Name: ${this.name}
            Roll No: ${this.id}
            Balance: ${this.balance}
            Enrolled Course: ${this.course}
        `);
    }
}

let newStudent: Student;

async function HandleInput() {
    // random roll no generated
    let studentRollNoGenerated = Math.floor(Math.random() * 90000) + 10000;
    let data = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: ("Enter Your Name"),
        },
        {
            type: "input",
            name: "balance",
            message: ("Enter Your Balance"),
        },
        {
            type: "list",
            name: "course",
            message: ("Select The course you want to enroll"),
            choices: ['Data Science', 'Software Engineering', 'WordPress Developer', 'Web designer', 'App Developer'],
        }
    ])

    newStudent = new Student(data.name, studentRollNoGenerated, parseFloat(data.balance), data.course);
};

async function PerformOperation() {
    await HandleInput();  // call fuction 
    let operations = await inquirer.prompt([
        {
            type: "list",
            name: "action",
            message:("Select Your action you want to perform"),
            choices: ['Show Balance', 'Pay Tuition Fees', 'Show Status']
        },
    ])
    if (operations.action === "Show Balance") {
        newStudent.viewBalance();
    }
    if (operations.action === "Pay Tuition Fees") {
        let fees = await inquirer.prompt([
            {
                type: "number",
                name: "amount",
                message: ("Enter The course fees"),
            }
        ]);
        newStudent.payTuitionFees(fees.amount);
        newStudent.viewBalance();
    }
    if (operations.action === "Show Status") {
        console.log(newStudent.studentStatus());
    }
}

async function AskQuestions() {
    let restart;
    do {
        await PerformOperation();
        restart = await inquirer.prompt([
            {
                type: "list",
                name: "restart",
                message: "Another Action Want to Perfrom ?",
                choices: ['Yes', 'No'],
            },
        ]);
    } while (restart.restart === 'Yes');
    console.log(`App close again start by running "npx ahsan-student_management_system_07" `);
}

AskQuestions()



