let age = Number(prompt("Enter your age"));

if(age>0&&age<=12)
{
    console.log("Your are child, your are :- "+ age + " Year old");
}
else if(age>12&&age<=18)
{
    console.log("Your are Teenager, your are :- "+ age + " Year old");
}
else if(age>18&&age<=35)
{
    console.log("Your are Adult, your are :- "+ age + " Year old");
}
else 
{
    console.log("Your are Senior citizen, your are :- "+ age + " Year old");
}