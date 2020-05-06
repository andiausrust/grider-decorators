"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
require("reflect-metadata");
var Plane = /** @class */ (function () {
    function Plane() {
        this.color = 'red';
    }
    Plane.prototype.fly = function () {
        console.log('vrrrr');
    };
    __decorate([
        markFunction
    ], Plane.prototype, "fly");
    return Plane;
}());
function markFunction(target, key, desc) {
    Reflect.defineMetadata('secret', 123, target, key);
}
var secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');
console.log(secret);
/*const plane = {
    color: 'red'
};

Reflect.defineMetadata('note', 'hi there', plane, 'color');*/
/*
const colorNote = Reflect.getMetadata('note', plane, 'color');
console.log(colorNote);*/
/*Reflect.defineMetadata('note', 'hi there', plane);
Reflect.defineMetadata('height', '10', plane);

const note = Reflect.getMetadata('note', plane);
const height = Reflect.getMetadata('height', plane);

console.log(note);
console.log(height);*/
