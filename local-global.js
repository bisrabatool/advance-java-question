
// problem of var
// var num = 1
// var num = "faiza"

// let a;
// a = 10
// a = "faiza"
// let a; //c an not re-declare

// let a = 10
// let b = 20
// e = "esdf"
// const c = 30
// if(true){
//     let a = 12
//     let d = 40
//     var f = 50
//     e = 60
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(f);
// }
// console.log(f);

// console.log(d);
// un caught error
// un caught error 12 20 30
// 12 20 30 error
// for (var i = 1; i <= 10; i++) {
//     console.log("Jago");    
// }
// console.log(i);
// 11
// closure child can access parent's variables
// function bare(){
//     const eidi = "yes"
//     let a = 500
//     var chk = 400
//     function chote(){
//         var chota = 10
//         console.log(eidi);
//         console.log(a);
//     }
//     chote()
//     console.log(chota);
// }
// // bare()
// // console.log(chk);
// if (true) {
//         const username = "faiza"
//         if (username === "faiza") {
//             const employee = " saylani"
//             console.log(username + employee);
    //     }
    //     // console.log(website);
    // }
    // // its possible
    // // addOne(3) // 4
    // // function addOne(num) {
    // //     return num + 1
    // // }

    // addTwo(3) //5
    // const addTwo = function(num) {
    //     return num + 2
    // }
    
// globalscope..declare variable out side the function
var a = "bisra";
let b = "batool";
const c = "baig";
 
function check_global_variables(){
    console.log(a);
    console.log(b);
    console.log(c);
}
 
check_global_variables();
// local scope... declare variable inside the function
function check_function_scope(){
	var variable1= "moona";
	let  fatherName= "naeem";
	const userName= "bushra";
	console.log(variable1);
	console.log(fatherName);
}

check_function_scope();
console.log(userName);


