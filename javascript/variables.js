//first code
// let x=2;
// {
    
//     console.log(x);  
// }

// //second code
// var b=3;
// {
//     console.log(b);
// }


// //third code
// {
//     var x=10;
// }

// console.log(x);


// //fourth code
// {
//     let x=3;                  
// }
// console.log(x);
// //error


//fifth code
// var x=10;
// {
//     var x=6;
// }
// console.log(x);


//sixth code
// let x=10;
// {
//     var b=6;
// }
// console.log(x);


// //seventh code
// var x=10;          //redefining allowed
// var x=5;
// console.log(x);

//eigth code
// let b=10;
// b=4;                   //updation allowed
// console.log(b);


// //ninth code
// var a=20;
// var b=16;
// z=a+b;             //36
// console.log(z);
// var z;           //hoisting(JavaScript moves variable and function declarations to the top of the code before it runs — behind the scenes.)

// //10th code
// let a=20;
// let b=16;
// z=a+b;                  //error

// console.log(z);

// var z;



// hoisting-JavaScript moves variable and function declarations to the top of the code before it runs — behind the scenes.)
//In hoisting, only the declaration is moved to the top — not the initialization (value assignment).
//1.
// console.log(x);
// var x =5;            //undefined(declared but not initialized), bcz declaration will moved at the top of the code but not initialization

// console.log(x);           //hoisted but TDZ(Temporal Dead Zone)
// let x = 5;                //Reference error:cannot access  'x' before initialization

//same in const  



//3.
// z=a+b;
// console.log(z);
// var z;
// var z=5;


// console.log("5"+2);          //+ operator converts 2 into string(forces string conversion)
// console.log("5"-2);          //- operator converts 5 into number(forces number conversion)

// console.log(x);
// var x =5;


// console.log("5"+2+2);
// console.log(2+2+"5");

// console.log("5"==5);
// console.log("5"===5);

console.log("5"!=5);
console.log("5"!==5);


let a=5;
let b=10;
let c=a+b;
console.log(`the sum of ${a} and ${b} = ${c}`);             //string litral


