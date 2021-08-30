var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
//first Method
var student = {
    name: 'Alex',
    rollNo: 10
};
//console.log(student.rollNo);
//console.log(student.name);
//second
var stud = new Object();
stud['marks'] = 12;
stud['name'] = "manu";
//console.log(stud);
//third
var person = Object.create({ fname: 'Alex', marks: 500 });
//console.log(person.fname);
//console.log(person.marks);
var per = { fnm: 'Alex' };
var per2 = { lname: 'rodjer' };
//const pers= Object.assign({},per, per2);
//console.log(pers);
var pers = __assign(__assign(__assign({}, per), per2), { age: 24 });
//console.log(pers);
var temp4 = [1, 2, 3];
var temp5 = [4, 5, 6];
var temp = __spreadArray(__spreadArray(__spreadArray([12], temp4), temp5), [2]);
//console.log(temp);
var names = ['manu', 'didi', 'soham'];
var nm2 = ['babu'];
var nm = __spreadArray(__spreadArray([], names), nm2);
//console.log(nm);
var pn = { x: 2021, y: 'manu' };
var pn1 = __assign(__assign({}, pn), { z: true });
//console.log(pn1);
var arr = [12, 14, 16];
for (var value in arr) {
    //console.log(value);
}
var arr = [12, 14, 16];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var value1 = arr_1[_i];
    //  console.log(value1);
}
function add() {
    return 2 + 5;
}
var test = add();
//console.log(test);
var test1 = function (a, b) { return a - b; };
//console.log(test1(67,9));
var test2 = function (a, b) { return a; };
//console.log(test2(21));
var test3 = function (a, b) {
    if (b === void 0) { b = 30; }
    return a / b;
};
//console.log(test3(60));
var nam = 'manu';
var nam1 = "My name is  " + nam + "  I am begineer in Typescript";
//console.log(nam1);
var mytuple = [12, 'hello', 123, 'world', 'typescript'];
//console.log(mytuple[3]);
var val;
val = 12;
val = 'manu';
val = true;
console.log(val);
var age = 25;
age = true;
age = 'minakshi';
age = { fname: 'manu' };
//console.log(age);
var mixed = [];
mixed.push(10);
mixed.push('anu');
mixed.push(false);
//console.log(mixed);
var mn;
mn = { nm: 'aradhya', age: 20 };
//console.log(mn);
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["green"] = 1] = "green";
    color[color["yellow"] = 2] = "yellow";
})(color || (color = {}));
;
var c = color.green;
console.log(c);
console.log(color[2]);
// class className{
//     public testt:any='Gorakh';
// }
// class className2{
// }
