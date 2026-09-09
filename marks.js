let num = Number(prompt("Enter your percent of marks"));

if(num>=90)
{
    console.log("Your Grade :- A");
}
else if(num<90&&num>=80)
{
    console.log("Your Grade :- B");

}
else if(num<80&&num>=70)
{
    console.log("Your Grade :- C");
}
else if(num<70&&num>=60)
{
    console.log("Your Grade :- D");
}
else 
{
    console.log("Your Grade :- fail");
    console.log("Again Start");
}