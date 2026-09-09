let a= Number(prompt("Enter Side"));
let b= Number(prompt("Enter Side"));
let c= Number(prompt("Enter Side"));

if(a==b && b==c)
{
    console.log("This is Equilateral Triangle");
}

else if(a==b||b==c||c==a)
{
     console.log("This is Isoscale Triangle");
}
else 
{
    console.log("This is Scalane Triangle");
}
