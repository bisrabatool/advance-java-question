// function sum (a,b){
//     return Promise(function(resolve,reject){
//     setTimeout(function(){
//         if(typeof a !=="number"||typeof b !=="number"){
//             return reject(new TypeError("input must be a number"));
//         }
//         resolve(a+b);
//     },1000);    
//     });
// }
// var myPromise= sum(10,5);
// myPromise.then(function(result){
//     document.write("10 + 5:",result);
//     return sum(null,"foo");

// }).then(function(){
// }).catch(function(err){
//     console.log(err);
// });
// myPromise
// .then((res)=> console.log("i am fulfilled",res))
// .catch((res)=>console.log("i am failure",res))

// .fetch()

// let gender = "male"
// const myPrime = new Promise((resolve, reject) => {
//     if (gender === "female") {
//         resolve('sucess')
//     } else {
//         reject("failure")
//     }
// })
// myPrime
//     .then((data) => console.log(data, 1))
//     .then((data) => console.log(data, 2))
//     .catch((data) => console.log(data))

let age = 18
const myAge = new Promise((resolve, reject) => {
    if (age === 18) {
        resolve('sucess')
    } else {
        reject("failure")
    }
})
myAge
    .then((data) => console.log(data, 1))
    .then((data) => console.log(data, 2))
    .catch((data) => console.log(data))