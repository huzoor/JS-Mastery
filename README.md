
# HOISTING

1. In JS, before the code is executed, the variables get initialized to **undefined**.
2. **Arrow functions** enact as variables and get "undefined" during the memory creation phase while functions actually get run.
3. Hoisting: Mechanism in JS where the variable declarations are moved to the top of the scope before execution. Therefore it is possible to call a function before initializing it.
4. Whenever a JS program is run, a global execution context/block is created, which comprises of 2, i.e.
   
   i.**Memory creation**
   and
   ii.**Code execution**
6. Variable declarations are scanned and are made undefined
7. Function declarations are scanned and are made available

