//Decorator on a class
@classDecorator class Boat {
    //Decorator on a property
    @testDecorator
    color: string = 'red';

    get formattedColor(): string {
        return `This boats color is ${this.color}`
    };

    //Error decorator
    @logError("Ooops, something bad happened to our boat!")
    pilot(@parameterDecorator speed: string, @parameterDecorator generateWake: boolean): void {
        // /|\ arg decorator
        if(speed === 'fast'){
            console.log('swish');
        }else {
            console.log('nothing')
        }
    }
}

function classDecorator(constructor: typeof Boat) {
    console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number){
    console.log(key, index);
}

function testDecorator(target: any, key: string){
    console.log(key);
    //This returns undefined because decorators only ever have access
    // to the object prototype, which only stores a record of methods
}

function logError(errorMessage: string){
    return function (target: any, key: string, desc: PropertyDescriptor): void {
        const method = desc.value;
        desc.value = function() {
            try {
                method();
            } catch(e){
                console.log(errorMessage)
            }
        }
    }
}

