var one =[1,2,3]
var two =[4,5,6]
var three = one + two
console.log(typeof(three) ,three)
// question what wrong in above array declearation one or two
var combinArray = [...one, ...two]
console.log(combinArray)
console.log(one.concat(two))
console.log(one)
console.log(two)
// web mdn excersize
function sum(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [1, 2, 3];
  
  console.log(sum(...numbers));
  
  console.log(sum.apply(null, numbers));
// used for push method
const stu =["abc","efg"]
const newArray = stu
newArray.push("xyz")
console.log(newArray)
// used for copy array
const correctArr = [...stu]
correctArr.push("xyz")
console.log(correctArr)
// used for marging two obj
 const user1 = {
	name: 'bisra',
	age: 22,
};

const user2 = {
	name: "batool",
	location: "karachi"
};

const mergedUsers = { ...user1, ...user2 };
console.log(mergedUsers);

function display(para ,...para2){
    document.write( para, ...para2)

}
display("hi am bisra"," ","yours name");


