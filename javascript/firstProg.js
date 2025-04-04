//fiest code
let x=2;
{
    
    console.log(x);
}

//second code
var b=3;
{
    console.log(b);
}


//third code
{
    var x=10;
}

console.log(x);


//fourth code
{
    let x=3;                  
}
console.log(x);
//error


//fifth code
var x=10;
{
    var x=6;
}
console.log(x);


//sixth code
let x=10;
{
    var x=6;
}
console.log(x);


//seventh code
var x=10;          //redefining allowed
var x=5;
console.log(x);

//eigth code
let b=10;
b=4;                   
console.log(b);


//ninth code
var a=20;
var b=16;
z=a+b;             //36

console.log(z);

var z;

//10th code
let a=20;
let b=16;
z=a+b;                  //error

console.log(z);

var z;



hoisting
var a=10;
z=a+b;

console.log(z);

var z;
var z=5;


console.log("5"+2);
console.log("5"-2);