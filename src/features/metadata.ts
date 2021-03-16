import 'reflect-metadata';

const plane = {
    color: "red"
};

Reflect.defineMetadata('note', 'hi there I am red', plane, 'color');
// Reflect.defineMetadata('note', 'hi there', plane);
Reflect.defineMetadata('height', 10, plane);

const note = Reflect.getMetadata('note', plane, 'color');
// const note = Reflect.getMetadata('note', plane);
const height = Reflect.getMetadata('height', plane);
console.log(note)
console.log(height)