// Monad class object.

class Monad  {
  constructor (state) {
    this.state = state;
  }
  bind (func) {
    return new Monad(func(this.state));
  }
  result () {
    return this.state;
  }
  static do (...args) {
     return a => container(...args)(new Monad(a));
  }
}

function curryRight (fn, ...curryArgs) {
  if (typeof fn !== 'function') 
    throw new Error('first argument must be a function');
  return (...args) => {
    return fn(...[].concat(args).concat(curryArgs));
  }
}

function container (...args) {
  return (a) => {
    if (typeof a.bind !== 'function' || typeof a.result !== 'function')
      throw Error('argument must have declared bind and result methods');

    return args.reduce((acc, func) => {
      if (typeof acc.bind !== 'function')
        throw new Error('possible invalid implementation of bind function. Undefined bind method.');
      return acc.bind(func);
    }, a).result();
  }

}

const print = (prefix = '') => a => {
  console.log(prefix, a);
  return a;
}

function linearSearch (arr, elem) {
  for( var i=0; i < arr.length; i ++) {
    if(arr[i] === elem)
      return i
    else continue;
  }
  return new Error('Letter' + elem + 'not found! Please try again!');
  
}
/// Program

console.log('\nSearch\n');

Monad.do(
  print('Source::'),
  curryRight(linearSearch, 'k'),
  print('Result:: index ->')
)('haskell');

