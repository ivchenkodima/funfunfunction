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
// helpers
function ordA(a) {
  return a.charCodeAt(0) - 65;
}

function curryRight (fn, ...curryArgs) {
  if (typeof fn !== 'function') throw new Error('first argument must be a function');
  return (...args) => {
    return fn(...[].concat(args).concat(curryArgs));
  }
}

function times (n, iterator) {
  var accum = Array(Math.max(0, n));
  for (var i = 0; i < n; i++) accum[i] = iterator.call();
  return accum;
};

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

function beaufortCipher(textSource, keySource, decode = 0) {
  const key = keySource.toUpperCase().replace(/[^A-Z]/g, '');
  const text = textSource.toUpperCase().replace(/[^A-Z]/g, '').split('');
  return text.map( (a, i) => {
    let b = key[i % key.length];
    let offset = ((ordA(b) - ordA(a) + Number(decode) * 26) + 26) % 26;
    return String.fromCharCode(offset + 65);
  }).join('');
}

/// Program
console.log('\nAtbash cipher\n');

const CIPHER_KEY = 'secret';

const destCipher = Monad.do(
  print('Source:'),
  curryRight(beaufortCipher, CIPHER_KEY),
  print('Result:'),
  curryRight(beaufortCipher, CIPHER_KEY, true), // decode
  print('Decode: ')
)('DIVCHENKO');