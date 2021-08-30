"use strict";
exports.__esModule = true;
var message = "welcome back to ts and js";
console.log(message);
var x = 10;
var y = 20;
var a;
var title = "manu";
//declare data types in ts
var z = 30;
var data = true;
var str = "manu";
//template 
var name = "minakshi";
//let ms: string = ' my name is'+ ${name} 'I am  b'
//declare array in ts
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var student = ['manu', 25];
var color;
(function (color) {
    color[color["red"] = 6] = "red";
    color[color["green"] = 7] = "green";
    color[color["blue"] = 8] = "blue";
})(color || (color = {}));
;
var c = color.green;
//console.log(c);
var names = ["manu", "didi", "bhaiya"];
//console.log(names);
var randomvalue = 10;
randomvalue = true;
randomvalue = "manu";
var myvariable = 10;
function hasname(obj) {
    return !!obj &&
        typeof obj === "object" && "name" in obj;
}
if (hasname(myvariable)) {
    // console.log(myvariable.name);
}
myvariable.toUpperCase();
var b;
b = 10;
b = true;
function add(num1, num2) {
    return num1 + num2;
}
add(10, 25);
