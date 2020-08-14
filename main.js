// This file is for testing purposes
var point2D = { x: 0, y: 10 };
var point3D = { x: 0, y: 10, z: 20 };
function iTakePoint2D(point) { console.log(point); }
iTakePoint2D(point2D); // exact match okay
iTakePoint2D(point3D); // extra information okay
// iTakePoint2D({ x: 0 }); // Error: missing information 'y'
function sum(n1, n2) {
    return n1 + n2;
}
const aString = ['a', 'b'];
const aNumber = [1, 2, 3];
const aAll = [1, 'a'];
var foo = {};
var bar = foo;
var baz = {};
console.log(foo == bar); // true
console.log(foo == baz); // false
function a(arg) {
    if (arg != null) {
        console.log('It is not null!');
    }
}
a(undefined);
