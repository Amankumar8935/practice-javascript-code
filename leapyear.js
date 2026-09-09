let year = Number(prompt("Enter the any year"))

if(year%4==0 || (year % 4 == 0 && year % 100 != 0))
{
    console.log("This is leap year :-  " + year);
}
else 
{
    console.log("This is not leap year :- " + year);
}

