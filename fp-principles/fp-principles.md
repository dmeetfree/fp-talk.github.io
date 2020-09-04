# Functional programming patterns

### OOP patterns
* 

## Functional programming principles

* Function — first class citizen
* [Composition](#composition)


### Composition
```ts
    function first(a: number): string{
        return a.toString();
    }

    function second(b: string): boolean {
        return b !== '0';
    }

    // composition is fractal
    function composition(a: number): boolean{
        return second(first(a));
    }
```
