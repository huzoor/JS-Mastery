# Java Script

i. **Everything In Java Script Happen Inside an "Execution Context"**

ii. **Java Script is a 'Synchronous' & 'Single Threaded Language'**

## Execution Context
1. Whenever any JavaScript code is executed an execution context is created and it is the Global Execution Context.
2. An Execution Context is basically a box which has two components called Memory Component(Variable Environment) and Code Component(Thread Of Execution).
3. The Execution context is created in two phases
   a. **Memory Creation Phase** : In this Phase, Memory is allocated to all the variables and functions which are present in the global scope. Special keyword Undefined in case of variables and literally the whole function in case of functions.
   b. **Code Execution Phase** : In this Phase, code is executed line by line.

4. Whenever there is a function invocation an all new execution context is created and same process is followed again.
5. If there is any function parameter then it is also allocated memory while creating the execution context of the function.
6. Whenever return keyword is encountered , it means the task of function is over and it returns back the control of the program back to the place where it was invoked. and with this this execution context is deleted from stack.

7. Call Stack is basically a stack which maintains the order of execution of execution context. Whenever a code is executed the Global Execution Context is pushed into the stack first and later on as per the function invocation the  execution context is pushed into the stack. When the function code is done executing the execution context is popped out and last the Global Execution Context s also deleted.


## HOISTING

1. In JS, before the code is executed, the variables get initialized to **undefined**.
2. **Arrow functions** enact as variables and get "undefined" during the memory creation phase while functions actually get run.
3. Hoisting: Mechanism in JS where the variable declarations are moved to the top of the scope before execution. Therefore it is possible to call a function before initializing it.
4. Whenever a JS program is run, a global execution context/block is created, which comprises of 2, i.e.
   
   i.**Memory creation**
   and
   ii.**Code execution**
6. Variable declarations are scanned and are made undefined
7. Function declarations are scanned and are made available


## Block Scope and Shadowing

1. Code inside curly bracket is called block.
2. Multiple statements are grouped inside a block so it can be written where JS expects single statements like in if, else, loop, function etc.
3. Block values are stored inside separate memory than global. They are stored in block. (the reason let and const are called block scope)
4. Shadowing of variables using var, let and const.
5. The shadow should not cross the scope of original otherwise it will give error.
6. shadowing let with var is illegal shadowing and gives error.
7. var value is stored in nearest outer function or global scope and hence can be accessed outside block as well whereas same is not the case with let and const.

## JS Architecture

1. JS runtime environment contains all elements required to run JS.
2. It contains JS engine, set of API's, callback queue, microtask queue, event loop.
3. JS engine is a piece of code.
4. Process includes Parsing ---> Compilation -----> Execution.
5. Parsing breaks code into tokens and converts it into AST(Abstract Syntax Tree).
6. Modern JS engine follows JIT compilation, it interprets while it optimises code as much as it can.
7. Execution and Compilation are done together.
8. Execution has Garbage collector and other optimisation such as inlining, copy elusion, inline caching etc.

## Generators / Iterators
Here are **10 clear bullet points** summarizing the video on **JavaScript Generator Functions**:

1. Generator functions are declared using the special syntax **`function*`**.
2. They return a **generator object**, which is an iterator that can pause and resume execution.
3. The **`yield`** keyword pauses the function and outputs a value to the caller.
4. Each call to **`next()`** resumes the generator from where it last paused.
5. Generators help implement **lazy evaluation**, producing values only when needed.
6. They remember their **internal state** between pauses, including variables and execution position.
7. Ideal for creating **custom iterators** or infinite sequences without memory overhead.
8. Useful in scenarios where you need **step-by-step control** over execution flow.
9. Can simplify asynchronous patterns by allowing pausing/resuming logic flow manually.
10. Often used in system design, interview questions, and functional patterns to demonstrate control over iteration.
### Basic Generator Function
```
function* simpleGenerator() {
  yield "Hello";
  yield "World";
}

const gen = simpleGenerator();

console.log(gen.next()); // { value: 'Hello', done: false }
console.log(gen.next()); // { value: 'World', done: false }
console.log(gen.next()); // { value: undefined, done: true }
```

### Yielding Values in a Loop
```

function* numberGenerator(limit) {
  for (let i = 1; i <= limit; i++) {
    yield i;
  }
}

for (const num of numberGenerator(5)) {
  console.log(num);
}
```
