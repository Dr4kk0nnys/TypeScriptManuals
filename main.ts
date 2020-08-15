// This file is for testing purposes

interface IPoint2D {
    x: number;
    y: number;
}
interface IPoint3D {
    x: number;
    y: number;
    z: number;
}

var point2D: IPoint2D = { x: 0, y: 10 };
var point3D: IPoint3D = { x: 0, y: 10, z: 20 };

function iTakePoint2D(point: IPoint2D) { console.log(point); }

iTakePoint2D(point2D); // exact match okay
iTakePoint2D(point3D); // extra information okay
// iTakePoint2D({ x: 0 }); // Error: missing information 'y'


function sum(n1: number, n2: number): number {
    return n1 + n2;
}


const aString: string[] = ['a', 'b'];
const aNumber: number[] = [1, 2, 3];
const aAll: any[] = [1, 'a'];


var foo = {};
var bar = foo;
var baz = {};

console.log(foo == bar); // true
console.log(foo == baz); // false


function a(arg: string | null | undefined): void {
    if (arg != null) {
        console.log('It is not null!');
    }
}

a('0')


function b() {
    if (1 + 1 == 2) {
        return { a: 1, b: 2 };
    }

    return { a: 1, b: undefined };
}
function c(a: number, b?: number): Object {
    if (1 + 1 == 2) {
        return { a: 1, b: 2 };
    }

    return { a: 1 };
}


function d(): void {
    console.log(this);
}

// d();


function e(arg: string) {
    const e1 = arg;

    return function () {
        console.log(e1);
    }
}

const e2 = e('Hello World');

e2();


const n = 'Dr4kk0nnys';
const hasN = !!n;

console.log(hasN);


class Baz {
    members: number[] = [];

    add(x: number): void {
        this.members.push(x)
    }
}