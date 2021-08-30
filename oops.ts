class person{
    fname: string;
    lname: string
    grret(){
        console.log("hello");
    }
}
class programmer extends person{
    grret(){
        console.log("hi world");
    }
    greetpeople(){
        super.grret();
    }
}
//var pgm = new programmer();
var pgm: person = new programmer();
pgm.grret(); 