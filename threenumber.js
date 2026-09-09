let a = Number(prompt("Enter a number"));

let b=Number(prompt("Enter a Number"));

let c= Number(prompt("Enter a number"));

console.log(a);
console.log(b);
console.log(c);

if(a>b && a>c)
{
    console.log("Thee greatest number is :-  "+ a);
}
else if(b>a&&b>c)
{
    console.log("The greatest number is :-  "+ b);
}
else
{
    console.log("The greatest Number is :- " + c );
}