import 'reflect-metadata';

class MathClass {
  @subtract(1)
  @multiply(2)
  addOne(number: number) {
    return number + 1;
  }
}
// console.log(new MathClass().addOne(2)); //should print 5

function subtract(number = 1) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    Reflect.defineMetadata('overridenName', true, target, propertyKey);

    const originalMethod = descriptor.value;
    descriptor.value = function (...args: number[]) {
      console.log('sub args :', args);
      args[0] = args[0] - number;
      return originalMethod.apply(this, args);
    };
    return descriptor;
  };
}

function multiply(number = 1) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    Reflect.defineMetadata('overridenName', true, target, propertyKey);

    const originalMethod = descriptor.value;
    descriptor.value = function (...args: number[]) {
      console.log('mul args :', args);
      args[0] = args[0] * number;
      return originalMethod.apply(this, args);
    };
    return descriptor;
  };
}


//console.clear();
