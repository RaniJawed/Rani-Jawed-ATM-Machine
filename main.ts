#! /user/bin/env node
import inquirer from "inquirer";


// initialize user balance and pin code 


let myBalance = 5000;
let myPin = 1234;

// print Welcome Message
console.log("Welcome to Code With Rani Jawed - ATM Machine");

let pinAnswer = await inquirer.prompt([
    {
        name:"pin",
        type: "number",
        message: "Enter your pin code :"
    }
]);
   
if (pinAnswer.pin === myPin)
    console.log("pin is correct, login successfully!");


let OperationAns = await inquirer.prompt([
    {

 name: "Operation",
 type: "list",
 message : "select an operation:",
 choices : ["Withdraw Amount","Check Balance"]

}
])


if(
    
    OperationAns.Operation === "Withdraw Amount"){
 let amountAns = await inquirer.prompt ([
    {
        name : "amount",
        type : "number",
        message : "Enter the amount to withdraw:"
    }
 ]
 )

 if(amountAns.amount > myBalance){
    console.log("Insufficient Balance");
 }
 else{
      myBalance -= amountAns.amount;
      console.log(`${amountAns.amount} Withdraw successfully`);
      console.log(`your Remaining Balance is: ${myBalance}`);


 }


}
else if (OperationAns.Operation === "Check Balance"){
    console.log(` your Account Balance is: ${myBalance} `);

}


else {
    console.log("pin is incorrect, Try Again");
}
