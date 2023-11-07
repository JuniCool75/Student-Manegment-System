import inquirer from "inquirer";
class Student {
    constructor(name, id, balance, course) {
        this.name = name;
        this.id = id;
        this.balance = balance;
        this.course = course;
    }
    viewBalance() {
        console.log(`Current Balance: ${this.balance}`);
    }
    payTuitionFees(fees) {
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
let newStudent;
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
    ]);
    newStudent = new Student(data.name, studentRollNoGenerated, parseFloat(data.balance), data.course);
}
;
await HandleInput();
async function PerformOperation() {
    let operations = await inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: ("Select Your action you want to perform"),
            choices: ['Show Balance', 'Pay Tuition Fees', 'Show Status']
        },
    ]);
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
// import inquirer from "inquirer";
// class Student {
//     studentCount: number = 0;
//     studentID: string;
//     name: string;
//     enrolledCourses: string[];
//     balance: number;
//     static studentCount: any;
//    constructor(name: string) {
//      this.name = name;
//      this.studentID = this.generateStudentID();
//      this.enrolledCourses = [];
//      this.balance = 0;
//      Student.studentCount++;
//    }
//    private generateStudentID(): string {
//      const randomNumber: number = Math.floor(10000 + Math.random() * 90000);
//      return `${randomNumber}`;
//    }
//    enroll(course: string): void {
//      this.enrolledCourses.push(course);
//      console.log(`${this.name} has enrolled in ${course}`);
//    }
//    viewBalance(): void {
//      console.log(`${this.name}'s balance: RS.${this.balance}`);
//    }
//    payTuition(amount: number): void {
//      this.balance -= amount;
//      console.log(`${this.name} has paid RS.${amount} towards tuition.`);
//    }
//    showStatus(): void{
//      console.log(`
//        Student Name: ${this.name}
//        Student ID: ${this.studentID}
//        Enrolled Courses: ${this.enrolledCourses.join(', ')}
//        Balance: RS.${this.balance}
//      `);
//    }
//  }
//  const student1 = new Student("Bilal");
//  student1.enroll("Math");
//  student1.enroll("English");
//  student1.viewBalance();
//  student1.payTuition(1000);
//  student1.viewBalance();
//  student1.showStatus();
//  const student2 = new Student("Ali");
//  student2.enroll("History");
//  student2.viewBalance();
//  student2.payTuition(800);
//  student2.showStatus();
//  console.log(`Total Students: ${Student.studentCount}`);
// class Student {
//     name: string;
//     studentID: string;
//     enrolledCourses: string[];
//     balance: number;
//     constructor(name: string) {
//       this.name = name;
//       this.studentID = this.generateStudentID();
//       this.enrolledCourses = [];
//       this.balance = 0;
//     }
//     generateStudentID(): string {
//       const idChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//       let id = '';
//       for (let i = 0; i < 5; i++) {
//         id += idChars.charAt(Math.floor(Math.random() * idChars.length));
//       }
//       return id;
//     }
//     enrollCourse(course: string, cost: number) {
//       this.enrolledCourses.push(course);
//       this.balance += cost;
//     }
//     viewBalance() {
//       console.log(`Balance: $${this.balance.toFixed(2)}`);
//     }
//     payTuition(amount: number) {
//       this.balance -= amount;
//       console.log(`Payment of $${amount.toFixed(2)} received. Thank you!`);
//       this.viewBalance();
//     }
//     showStatus() {
//       console.log(`Name: ${this.name}`);
//       console.log(`Student ID: ${this.studentID}`);
//       console.log(`Enrolled Courses: ${this.enrolledCourses.join(', ')}`);
//       this.viewBalance();
//     }
//   }
//   // Example usage:
//   const student1 = new Student('John Doe');
//   const student2 = new Student('Jane Smith');
//   student1.enrollCourse('Math', 1000);
//   student1.enrollCourse('English', 800);
//   student1.showStatus();
//   console.log('--------------------------------------');
//   student2.enrollCourse('History', 1200);
//   student2.payTuition(500);
//   student2.showStatus();
