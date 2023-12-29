
let obj1 = {
    name: "harron",
    displayName: function () {
        return this.name

    }
}
console.log(obj1.displayName());
function check() {

    console.log(this)
}
check();
let obj = {
    name: 123,
    foo: function () {
        console.log(this.name);
        setTimeout(function () {
            console.log(window);
        }, 2000)
    }
}
obj.foo();
let obj3 = {
    name: "bisra",
    foo1: function () {
        console.log(this.name);
        function chk2() {
            console.log(window);
        }
    }
}
obj3.foo1();

let obj1 = {
    name: "harron",
    displayName: function () {
        return this.name

    }
}
console.log(obj1.displayName());
function check() {

    console.log(this)
}
check();
let obj = {
    name: 123,
    foo: function () {
        console.log(this.name);
        setTimeout(function () {
            console.log(window);
        }, 2000)
    }
}
obj.foo();
let obj3 = {
    name: "bisra",
    foo1: function () {
        console.log(this.name);
        function chk2() {
            console.log(window);
        }
    }
}
obj3.foo1();