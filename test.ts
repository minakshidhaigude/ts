//first Method
let student ={
    name: 'Alex',
    rollNo: 10
}
//console.log(student.rollNo);
//console.log(student.name);
//second
 var stud = new Object();
stud['marks']=12;
stud['name']="manu";
//console.log(stud);

//third

let person = Object.create({ fname: 'Alex',marks: 500});
//console.log(person.fname);
//console.log(person.marks);

let per ={fnm:'Alex'};
let per2 ={lname:'rodjer'};
//const pers= Object.assign({},per, per2);
//console.log(pers);
let pers = {...per,...per2,age:24};
//console.log(pers);


var temp4 = [1,2,3];
var temp5 =[4,5,6];
var temp = [12,...temp4,...temp5,2];
//console.log(temp);

let names = ['manu','didi','soham'];
let nm2 = ['babu'];
let nm = [...names,...nm2];
//console.log(nm);

const pn = {x: 2021, y:'manu'};
const pn1 = {...pn,z:true};
//console.log(pn1);

var arr = [12,14,16];
for(var value in arr){
//console.log(value);
}
var arr = [12,14,16];
for(var value1 of arr){
  //  console.log(value1);
}

function add(){
    return 2+5;
}
var test= add();
//console.log(test);

var test1 = (a,b?)=>a-b;
//console.log(test1(67,9));

var test2 = (a,b?)=>a;
//console.log(test2(21));

var test3 = (a,b=30)=>a/b;
//console.log(test3(60));

var nam: string ='manu';
var nam1: string =`My name is  ${nam}  I am begineer in Typescript`;
//console.log(nam1);


var mytuple = [12,'hello',123,'world','typescript'];
//console.log(mytuple[3]);

var val: number|string | boolean;
val = 12;
val = 'manu';
val = true;
console.log(val);

let age: any = 25;
age = true;
age = 'minakshi';
age ={fname:'manu'};
//console.log(age);

let mixed: any[] = [];
mixed.push(10);
mixed.push('anu');
mixed.push(false);
//console.log(mixed);

let mn: {nm:any, age:any};
mn = {nm:'aradhya',age: 20};
//console.log(mn);
 enum color {red,green,yellow};
 let c: color = color.green;
 console.log(c);
 console.log(color[2]);
// class className{
//     public testt:any='Gorakh';
// }
// class className2{

// }

