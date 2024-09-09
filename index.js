//console.log(Math.round(4.5));

// let names = { 
//     fname: "Dillion", 
//     lname: "Megida" 
// } 
// console.log(names.fname);
//  console.log(names.hasOwnProperty("lname")); 
//  console.log(names);

//  class Animals { 
//     constructor(name, specie) { 
//              this.name = name; 
//              this.specie = specie; 
// } 
// sing() { 
//    return `${this.name} can sing`; 
// } 
// dance() { 
//     return `${this.name} can dance`; 
// } 
// } 
// let bingo = new Animals("Bingo", "Hairy"); 
// console.log(bingo); 
// console.log(bingo.sing());
// console.log(bingo.dance());

// class Animals { 
//     constructor(name, specie) { 
//              this.name = name; 
//              this.specie = specie; 
// } 
// sing() { 
//    return `${this.name} can sing`; 
// } 
// dance() { 
//     return `${this.name} can dance`; 
// } 
// } 
// let tiger = new Animals('lion', 'carnivarus','red');

// class Cats extends Animals { 
//      constructor(name, age, whiskerColor) { 
//            super(name, age); 
//            this.whiskerColor = whiskerColor; 
//     } 
//     whiskers() { 
//           return `I have ${this.whiskerColor} whiskers`; 
//     } 
// } 
// let clara = new Cats("mara", 33, "indigo"); 
// console.log(clara);
// console.log(clara.sing());
// console.log(clara.whiskers());
// console.log(clara.dance());
// console.log(tiger);
// console.log(tiger.whiskers());

// sayHello();

// function  sayHello() {
//     console.log('I am here');
// } 

// sayWelcome();

// const sayWelcome = function() {}

// const c = new Circle()
// class Circle {

// }
// const square = class {
// }

// function BankAccount(accountNumber, accountHolderName, balance) {
//     let _accountNumber = accountNumber;
//     let _accountHolderName = accountHolderName;
//     let _balance = balance;

//     function showAccountDetails() {
//     console.log(`Account Number: ${_accountNumber}`);
//     console.log(`Account Holder Name: ${_accountHolderName}`);
//     console.log(`Balance: ${_balance}`);
//     }

//    function deposit(amount) {
//     _balance += amount;
//     showAccountDetails();
//     }
//     function withdraw(amount) {
//         if (_balance >= amount) {
//         _balance -= amount;
//         showAccountDetails();
//     } else {
//         console.log("Insufficient Balance");
//     }
//         }
        
//         return {
//         deposit: deposit,
//         withdraw: withdraw
//         };
//         }
    
//         let myBankAccount = BankAccount("123456", "John Doe", 1000);
    
//         myBankAccount.deposit(500);
//         myBankAccount.withdraw(2000); 
//         myBankAccount.showAccountDetails();

// class BankAccount {
//         constructor(accountNumber, accountHolderName, balance) {
//             this._accountNumber = accountNumber;
//             this._accountHolderName = accountHolderName;
//             this._balance = balance;
//         }
//       
//         showAccountDetails() {
//             console.log(`Account Number: ${this._accountNumber}`);
//             console.log(`Account Holder Name: ${this._accountHolderName}`);
//             console.log(`Balance: ${this._balance}`);
//         }
//       
//         deposit(amount) {
//             this._balance += amount;
//             this.showAccountDetails();
//         }
//         withdraw(amount) {
//                 if (this._balance >= amount) {
//                     this._balance -= amount;
//                     this.showAccountDetails();
//                 } else {
//                     console.log("Insufficient Balance");
//                 }
//             }
//         }
//           
//         let myBankAccount = new BankAccount("123456", "John Doe", 1000);
//         myBankAccount.deposit(500); 
      

// const pathRegex = /[a-z]/;
// console.log(pathRegex.test("cyril"))

// //Regular expression to check for integer is
 
// const pRegex = /[0-9]/;
// console.log(pRegex.test("cyril2"))

// //For uppercase , }/[A-Z]/

// //For synbols: 
// const symbolRegex = /[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]/

// const x = function(){
//     console.log('here i am');
// };
// // x();
// const login = function(){
//     this.email = document.querySelector(".email");
//     this.password = document.querySelector(".password");
//     this.submitBtn = document.querySelector(".submit"); 
//     };
//     login.prototype.logUser = function(){
//         this.submitBtn.addEventListener("click",()=>{
//         if (this.email.value !== "" && this.password.value !== "") {
//         localStorage.setItem("userMail",this.email.value)
//         localStorage.setItem("userPass",this.password.value)
//            alert("user logged in with: " +   localStorage.getItem("userMail"))
//         } 
//         else {
//           alert("Please enter email and password");
//         }
//         })
//         }
//         const user = new login();
//         user.logUser();
        