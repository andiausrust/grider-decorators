@classDecorator
class Boat {

    @testDecorator
    color: string = 'red';

    @testDecorator
    get formattedColor(): string {
        return `
        this boat color is ${this.color};
        `
    }

    @logError('boat sunk...')
    pilot(
        @parameterDecorator speed: string,
        @parameterDecorator generateWake: boolean
    ): void {
        // throw new Error('in error message');
        if (speed === 'fast') {
            console.log('swish');
        } else {
            console.log('nothing');
        }

    }
}

function classDecorator(constructor: Function) {
    console.log('class decorator', constructor);
}

function parameterDecorator(target: any, key: string, index: number) {
    console.log(key, index);
}

function testDecorator(target: any, key: string) {
    console.log(target);
    console.log(key);
}

function logError(errorMessage: string) {
    return function (target: any, key: string, desc: PropertyDescriptor): void {
        const method = desc.value;
        desc.value = () => {
            try {
                method();
            } catch (e) {
                console.log(errorMessage);
            }
        };
        console.log(method);
    }
}

new Boat().formattedColor;
