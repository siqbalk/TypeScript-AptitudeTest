"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
require("reflect-metadata");
var MathClass = /** @class */ (function () {
    function MathClass() {
    }
    MathClass.prototype.addOne = function (number) {
        return number + 1;
    };
    __decorate([
        subtract(1),
        multiply(2)
    ], MathClass.prototype, "addOne");
    return MathClass;
}());
// console.log(new MathClass().addOne(2)); //should print 5
function subtract(number) {
    if (number === void 0) { number = 1; }
    return function (target, propertyKey, descriptor) {
        Reflect.defineMetadata('overridenName', true, target, propertyKey);
        var originalMethod = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log('sub args :', args);
            args[0] = args[0] - number;
            return originalMethod.apply(this, args);
        };
        return descriptor;
    };
}
function multiply(number) {
    if (number === void 0) { number = 1; }
    return function (target, propertyKey, descriptor) {
        Reflect.defineMetadata('overridenName', true, target, propertyKey);
        var originalMethod = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log('mul args :', args);
            args[0] = args[0] * number;
            return originalMethod.apply(this, args);
        };
        return descriptor;
    };
}
//console.clear();
