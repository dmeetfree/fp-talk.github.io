// def monad(): Unit = {
//     trait Monad[T[_]] {
//       // also called unit, or return in Haskell
//       def pure[A](a: A): T[A] // constructor

//       // also called bind
//       def >>=[A, B](f: A => T[B]): T[A] => T[B]

//       def flatMap[A, B](m: T[A])(f: A => T[B]): T[B]
//     }


//     val intToListDouble    = (x: Int) => List(x.toDouble)
//     val doubleToListString = (x: Double) => List(x.toString)

//     // Monad Laws
//     // 1. Left Identity
//     // pure(x) >>= f === f(x)
//     List(1).flatMap(intToListDouble) == intToListDouble(1)

//     // 2. Right Identity
//     // m >>= pure === m
//     List(1).flatMap(d => List(d)) == List(1)

//     // 3. Associativity
//     // m >>= f >>= g === m >>= (x => f(x) >>= g)
//     List(1).flatMap(intToListDouble).flatMap(doubleToListString) ==
//       List(1).flatMap(x => intToListDouble(x).flatMap(doubleToListString))
//   }

class FirstMonad<A extends any> {
    constructor(private input: A){}

    bind(){

    }

    flatMap() {

    }
}


