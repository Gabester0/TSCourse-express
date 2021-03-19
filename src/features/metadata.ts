import 'reflect-metadata';
import { router } from '../routes/loginRoutes';

@controller
class Plane {
    color: string = 'red';

    @get('/login')
    fly(): void {
        console.log('vrrrr');
    }
}

function get(path: string){
    return function (target: Plane, key: string){
        Reflect.defineMetadata('path', path, target, key)
    }
}

function controller(target: typeof Plane){
    for(let key in target.prototype){
        const path = Reflect.getMetadata('path', target.prototype, key)
        console.log(path)

        router.get(path, target.prototype[key]);
    }
}



// 1st Lesson, basics of metatdata:

// const plane = {
//     color: "red"
// };

// Reflect.defineMetadata('note', 'hi there I am red', plane, 'color');
// // Reflect.defineMetadata('note', 'hi there', plane);
// Reflect.defineMetadata('height', 10, plane);

// const note = Reflect.getMetadata('note', plane, 'color');
// // const note = Reflect.getMetadata('note', plane);
// const height = Reflect.getMetadata('height', plane);
// console.log(note)
// console.log(height)