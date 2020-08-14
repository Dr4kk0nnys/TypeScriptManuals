# Starting the book

### Download and run
* [Install yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable)
* Install Typescript
    * `yarn add typescript`
* Run your first code:
    1. inside the main.ts file: `console.log('Hello World');`
    1. run the command on terminal: `yarn tsc main.ts && nodejs main.js`

Differences between Javascript right at the start:  
```typescript
var foo: number = 123;

// Error: cannot assign a 'string' to a 'number'
foo = '123'
```

Don't be redundant with types.  
```typescript
// bad practice
const num: number = 23;

// good practice
const num = 23;
// good practice
var num: number;
```

### Running Typescript ( the right way )
1. Create a tsconfig.json
    ```json
    {
        "compilerOptions": {
            "target": "ESNext" // latest version of the ECMAScript
        }
    }
    ```
1. Run the command: `yarn tsc -p ./tsconfig.json && nodejs main.ts`
    * To change the name of the file you could run something like:  
    `yarn tsc -p ./tsconfig.json && nodejs file_name.ts`

## Variable assignment
```typescript
const foo: number = 'hello world'; // error
const boo: string = 123; // error

const s = 'hello world'; // okay
const _s:string = 'hello world'; // bad practice (redundant)

var x = 123; // ok
x = '456' // bad;

var y: any = 123; // ok
y = 'abc' // ok, but try to avoid if possible

$a: number; // okay
1a: number; // bad
```

## Same things as JS
This things are the same in both plain Javascript and Typescript
* loops
* if statement
* if else statement
* arrow function
* variable with value declaration
* ...
* destructuring

## Errors in TS, not in JS
```typescript
[] + []
// js: ""
// ts: error

{} + []
// js: 0
// ts: error

[] + {}
// js: "[object Object]"
// ts: error

{} + {}
// js: NaN
// ts: error

"hello" - 1;
// js: NaN
// ts: error

function sum(n1, n2) {
    return
        n1 + n2;
}
// js: undefined
// ts: unreachable code
```

## Nice functions
Javascript:
```javascript
function sum(n1, n2) {
    return n1 + n2;
}

sum('a', 'b'); // 'ab'
sum('a', 3);   // 'a3'
sum(3, 'a');   // '3a'
sum(3, 3);     // 6
```
Typescript:
```typescript
function sum(n1: number, n2: number): number {
    return n1 + n2;
}

sum('a', 'b'); // Argument of type 'string' is not assignable to parameter of type 'number'

sum(3, 'a');   // Argument of type 'string' is not assignable to parameter of type 'number'

sum(3, 3);     // 6
```

## Differences
```typescript
console.log(5 == '5'); // JS -> true, TS Error
console.log(5 === '5'); // JS -> false, TS Error
```
This condition will always return 'false' since the types 'number' and 'string' have no overlap.

## Lists ( arrays )
```typescript
const aStrings: string[] = ['a', 'b', 'c']; // only string

const aNumbers: number[] = [1, 2, 3]; // only number

const aAll: any[] = [1, 'a', 2, 'b', 3, 'c']; // everything
```

```typescript
// This whole example was given from the book

type IdDisplay = {
    id: string,
    display: string
}
const list: IdDisplay[] = [
    {
        id: 'foo',
        display: 'Foo Select'
    },
    {
        id: 'bar',
        display: 'Bar Select'
    },
]

const fooIndex = list.map(i => i.id).indexOf('foo');
console.log(fooIndex); // 0
```

## Mutations
```typescript
var foo = {};
var bar = foo;

foo.baz = 123;
console.log(bar.baz); // 123
```

## Equality
```typescript
var foo = {};
var bar = foo;
var baz = {};

console.log(foo === bar); // true
console.log(foo === baz); // false

console.log(foo == bar); // true
console.log(foo == baz); // false
```

## Null and Undefined
null: currently unavailable  
undefined: not initialized  

```typescript
console.log(null == null) // true
console.log(undefined == undefined) // true
console.log(null == undefined) // true

console.log(0 == undefined) // false
console.log('' == undefined) // false
console.log(false == undefined) // false
```

### IMPORTANT
```typescript
function foo(arg: string | null | undefined): void {
    if (arg != null) {
        console.log('It is not null!');
    } else {
        console.log('It is null');
    }
}

a('a') // It is not null!
a(undefined) // It is null
a(null) // It is null
```

Quote from the book.  
*`...'to check if a variable is defined or not at a global level you normally use typeof:'`*

```typescript
if (typeof someglobal !== 'undefined') {
    // someglobal is now safe to use
    console.log(someglobal)
}
```

## Abusing functions
```typescript
// standard javascript
function b() {
    if (1 + 1 == 2) {
        return { a: 1, b: 2 };
    }

    return { a: 1, b: undefined };
}

// typescript, more reliable
function c(a: number, b?: number): Object {
    if (1 + 1 == 2) {
        return { a: 1, b: 2 };
    }

    return { a: 1 };
}
// also; b?, means that b is optional
c(1)    // okay
c(1, 2) // okay
```

## Callbacks
```typescript
// Plain Js, NodeJs and Typescript:

fs.readFile('file_name.txt', 'UTF-8', (err, data) => {
    if (err) {
        // do something
        return err
    } else {
        // no error
        return
    }
})
```

## Using undefined as mean of denoting validity is bad
Quote from the book  
*`Don't use undefined as a means of denoting validity`*  
*`For example an awful function like this:`*  
```typescript
function toInt(str: string) {
    return str ? parseInt(str) : undefined;
}
```
*`can be much better written like this:`*  
```typescript
function toInt(str: string): { valid: boolean, int?: number } {
    const int = parseInt(str);

    if (isNaN(int)) {
        return { valid: false };
    }

    return { valid: true, int };
}
```