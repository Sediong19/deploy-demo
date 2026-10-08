const { greet } = require('./greet');

if (greet('Sediong') !== 'Hello, Sediong!') {
  console.log('FAIL: greet is not working');
  process.exit(1);
}

console.log('PASS: greet works correctly');
