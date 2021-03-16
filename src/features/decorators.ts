class Boat {
    @testDecorator
    color: string = 'red';

    get formattedColor(): string {
        return `This boats color is ${this.color}`
    };

    @logError("Ooops, something bad happened to our boat!")
    pilot(): void {
        throw new Error();
        console.log('swish');
    }
}

function testDecorator(target: any, key: string){
    console.log(target.color);
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

