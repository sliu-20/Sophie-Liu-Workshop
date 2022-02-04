// Team (Liu)^2 :: Sophie Liu, Qina Liu
// SoftDev pd2
// K27 -- Basic functions in JavaScript
// 2022-02-04
// --------------------------------------------------


// as a duo...
// pair programming style,
// implement a fact and fib fxn

var fact = (n) => {
  if (n == 0) {
    return 1;
  }
  else {
    return (fact(n - 1) * n);
  }
};

// (define fact (int n)
//   (lambda (n)
//     (if (n = 0)
//         1
//         else {
//
//         }
//          (fact(- n 1)) n)
//         )
//     )
//   )
//
// (define fib
//   (lambda (n)
//     (if (<= n 1)
//         n
//         (+ (fib(- n 1)) (fib(- n 2)))
//         )
//     )
//   )

//Do whatever you think is needed. Think: S I M P L E.   Think: S M A R T.
