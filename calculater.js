let num = String(prompt("Enter any Operater"));
let a=Number(prompt("Enter First nummber"));
let b=Number(prompt("Enter econd Number"));


switch(num)
{
    case "+":
        let sum = a + b;
        console.log("Your Output :- " + sum);
        break;
    case "-":
        let sub =a-b;
        console.log("Your output :-  " + mult);
        break;
    case "*":
        let mult = a*b;
         console.log("Your output :- " + mult);
         break;
    case "%" :

        let div = a/b;
        console.log("Your output :- " + div);
        break;
    deafult:
           console.log("Enter invalid  ");

}