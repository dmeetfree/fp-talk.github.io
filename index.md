#  Functional Programming talk page

### Table of content

1. [Introduction](introduction)
1.
1.
1.
1. [External links](external-links)


### Introduction

##### Functional programming
Functional programming is a programming paradigm where programs are constructed by applying and composing functions.
In functional programming, functions are treated as first-class citizens, meaning that they can be bound to names 
(including local identifiers), passed as arguments, and returned from other functions, just as any other data type can.
Functional programming is sometimes treated as synonymous with purely functional programming, a subset of functional 
programming which treats all functions as deterministic mathematical functions, or pure functions. 
Functional programming has its roots in academia, evolving from the lambda calculus, 
a formal system of computation based only on functions. 

##### The Lambda Calculus
The Lambda Calculus is a symbol manipulation framework developed by the mathematician Alonzo Church in the 1930s. 
It was intended to be an extremely tiny syntax which could nevertheless suffice to calculate anything computable. 
The mathematical advantage of such a syntax is that with such extreme simplicity, 
it becomes easier to write formal proofs about computational logic – 
demonstrated when Church solved David Hilbert’s famous Decision Problem using LC.

Another famous mathematician, Alan Turing, formulated a different model of universal computation – the eponymous Turing Machine. 
A TM is a hypothetical device, again of extreme simplicity; it can read or write to cells on an infinite tape, 
each cell containing data or instructions. Turing published a paper also solving the Decision Problem, mere months after Church.

Turing proved that the Turing Machine and Lambda Calculus are totally equivalent. 
Everything that one can calculate, the other can. Not only this, 
but Turing and Church posited (in the “Church-Turing Thesis”) that these systems capture the definition of
computability in a universal way.

Turing Machines are exciting because if a hypothetical machine can compute anything computable, 
then perhaps a real machine can as well. Modern computers add many features and optimizations beyond what is 
featured in an actual Turing Machine; these features make the machine more convenient and performant, 
but do not compromise its essential nature as a universal computing device.

As machine codes, assemblers, compilers, and higher-level languages have developed to program these real machines, 
they have largely evolved with a focus on the essence of the machine – memory, statefulness, effects, 
imperative instructions and so forth. Over time, some of these languages have shifted ever farther 
into pure abstractions and conceptual description over more machine-centric and stateful models.

##### Identity



```javascript
    const one = 1;
    
    const identity = I => I;
    
    function log(string){
      console.log(string);
    }
```


### External links
[Functional programming](https://en.wikipedia.org/wiki/Functional_programming)   
[Lambda calculus](https://en.wikipedia.org/wiki/Lambda_calculus)   
[Lambda as JS, or a flock of functions](https://glebec.github.io/lambda-talk/)   

### Videos
[Lambda Calculus - Fundamentals of Lambda Calculus & Functional Programming in JavaScript](https://youtu.be/3VQ382QG-y4)   
[A Flock of Functions: Combinators, Lambda Calculus, & Church Encodings in JS - Part II](https://youtu.be/pAnLQ9jwN-E)   
[Brian Beckman: Don't fear the Monad](https://youtu.be/ZhuHCtR3xq8)   
[Category Theory 10.1: Monads](https://youtu.be/gHiyzctYqZ0)   
[Functional Objects, Functors, and Monads in JavaScript(RUS)](https://youtu.be/3Z7f0Gi8pxw)   
[Lambda calculus and functional programming. Part 1 | Lecture(RUS)](https://youtu.be/dowYB_dPkmU)   
[Functors and monads. Functional programming. Part 2 | Lecture(RUS)](https://youtu.be/t2SaSHQhkdE)   
[]()   
