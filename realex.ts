export class Animal{
  /*legs: number;
  eyes: number;
  constructor(legs: number,
    eyes: number
    ){
      this.legs = legs;
      this.eyes = eyes;

  }*/
  constructor(
    private legs: number,
    private eyes: number
  ){

  }
  run(): void{
      this.legs += 5;
      
  }
}
let an = new Animal(4,2);
an.run();

