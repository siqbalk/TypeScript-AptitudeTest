class Calculation { }

class MathClass extends Calculation {
  
  addOne(number:number)
  {
    return number+1;
  }
}

interface Calculation {
  subtract(number:number): number;
  multiply(number:number): number;
}

Calculation.prototype.subtract = function (number:number) { 
  return number-1;
};

Calculation.prototype.multiply = function (number:number) { 
  return number*2;
};
let add = new MathClass().addOne(2);
let sub = new MathClass().multiply(add)
let subtract = new MathClass().subtract(sub);
console.log(subtract);