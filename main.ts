export {}
let message = "welcome back to ts and js";
console.log(message);

let x = 10;
const y = 20;
let a ;
const title = "manu";
//declare data types in ts
let z:number = 30;
let data:boolean = true;
let str:string = "manu";
//template 
let name: string = "minakshi";


 //let ms: string = ' my name is'+ ${name} 'I am  b'
 //declare array in ts
 let list1: number[] = [1,2,3];
 let list2: Array<number> = [1,2,3];
 let student: [string, number] = ['manu',25];
 enum color {red=6,green,blue};
 let c: color = color.green;
 //console.log(c);
 let names: string[] = ["manu","didi","bhaiya"];
 //console.log(names);
 let randomvalue: any = 10;
 randomvalue = true;
 randomvalue = "manu";
 let myvariable: unknown= 10;
 function hasname(obj: any): obj is { name: string}{
     return !!obj &&
     typeof obj === "object" && "name" in obj
 }
  if (hasname(myvariable)){
// console.log(myvariable.name);
  }
 (myvariable as string).toUpperCase();
 var b: number | boolean;
 b = 10;
 b = true;
 function add(num1:number, num2:number):number{
     return num1+num2;
  }
  add(10,25);