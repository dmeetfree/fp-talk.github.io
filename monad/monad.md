


### Examples of functional objects in JavaScript

### Functor by prototype
```js
'use strict';

function Maybe(x){
    this.x = x;
}

Maybe.prototype.map = function (fn) {
    if(this.x && fn) {
        return new Maybe(fn(this.x));
    } else {
        return new Maybe(null);
    }
}

// Usage 

new Maybe(5).map().map(console.log); //
new Maybe(5).map(x => x * 2).map(console.log); // 10
new Maybe(null).map(x => x * 2).map(console.log); //
```

###  Functor by closure
```js
'use strict';

function maybe(x){
    return function (fn) {
        if(x && fn) {
            return maybe(fn(x));
        } else {
           return maybe(null);
        }   
    }
}
// or
const maybeLine = x => fn => maybe( x && fn ? fn(x) : null); 

// Usage

maybe(5)()(console.log); //
maybe(5)(x => ++x)(console.log); // 6
maybe(null)(x => ++x)(console.log); //
maybe(5)(x => ++x)(x => x * 2)(console.log); // 12
```

### Application Functor by prototype
```js
'use strict';

function Maybe(x){
    this.x = x;
}

Maybe.prototype.map = function (fn) {
    const response = (this.x && fn) ? fn(this.x) : null;
    return response instanceof Maybe ? res : new Maybe(response);
}

Maybe.prototype.apply = function (functor) {
    return this.map(every => functor.map(fn => fn(val)));
}


// Usage 
const a = new Maybe(5);  
const f1 = new Maybe(x => x * 2);   
const f1 = new Maybe(x => ++x);  

a.apply(f1).apply(f2).map(console.log) // 11
```

### Monad by closure
```js
'use strict';

const monad = {};

monad.mapNull = (fn, x) => (x && fn? fn(x) : null);
monad.maybe = x => fn => monad.maybe(monad.mapNull(fn, x));
monad.apply = applyFn => applyFn(fn => monad.mapNull(fn, this.x));
monad.chain = chainFn => chainFn(this.x);

// Usage

monad.maybe(5).apply(x => x * 2).apply(x => ++x).apply(console.log);
monad.maybe(5).apply(x => x * 2).apply(monad.maybe(x => ++x)).apply(console.log);
monad.maybe(5).chain(x => monad.maybe(x * 2)).apply(monad.maybe(x => ++x)).apply(console.log);
```
