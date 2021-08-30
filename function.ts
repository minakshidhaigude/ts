function fullname(person:{firstname: string,lname: string}){
    console.log(` ${person.firstname} ${person.lname}`);
}
let p = {
    firstname: "manu",
    lname: "Dhaigude"

};
fullname(p);