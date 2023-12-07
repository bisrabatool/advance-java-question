// write a function which return array , call the function and destructure array array values and print the value
const myArr =()=>["orange", "banana","peach"]
const res = myArr();
console.log("res");
let [fruit1, fruit2, fruit3] = res
console.log(fruit1);
console.log(fruit2);
console.log(fruit3);
// Q2: make a car obj
let car = {
    model:"Ctss",
    year:"2016",
    color:"black"
}
let {model,year,color} = car
// 
//  make Three variables that use litreals
let firstName = "bisra";
let lastName = "batool";
let greeting = `Hello, my name is ${firstName} ${lastName} `;
console.log(greeting);
// 
// Q4 if a car speed = 80 print car is slow ,if car speed>80
let carSpeed = 80;
if(carSpeed>=80 ){
    console.log("car is slow");

}
else if(carSpeed>80 && carSpeed==120){
    console.log("Car's speed is moderate")
}
else{
console.log("car is fast");
}
let carSpeed1 = 130
let str = (carSpeed1<= 80)? "slow":(carSpeed1 >80 && carSpeed1<=120)?"moderate":"fast";
console.log(str);



// the number is positive or negative or zero
let number = 8
if (number < 0) {
  console.log("This number is negative.");
} else if (number > 0) {
  console.log("This number is positive.");
} else {
  console.log("This number is zero.");
}
let number1 =2
let str1 = (number1>0)?"positive":(number1<0 && number1==0)?"negative":"zero"
console.log(str1);



