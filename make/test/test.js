const assert = require('assert');
Object.freeze(assert);
const make = require('./../make');

describe('make function return amount', () => {  
  function sum(a, b) {
    return a + b;
  }
    it('0', () => {
        const solutions = make(0)(1, 2, 3)(4)(sum);
        assert.equal(solutions,10);
      });
    it('1', () => {
        const solutions = make(2, 5, 3)(5)(5)(sum);
        assert.equal(solutions,20);
      }); 
    it('2', () => {
        const solutions = make(38)(57, 536, 387)(978)(sum);
        assert.equal(solutions,1996);
      }); 
    it('3', () => {
        const solutions = make(15)(34, 21, 666)(41)(sum);
        assert.equal(solutions,777);
      }); 
    it('4', () => {
        const solutions = make(0)(1, 2, 3)(4)(0)(1, 2, 3)(4)(0)(1, 2, 3)(4)(0)(1, 2, 3)(4)(0)(1, 2, 3)(4)(sum);
        assert.equal(solutions,50);
      });
    it('5', () => {
        const solutions = make(1, 2, 3)(1, 2, 3)(1, 2, 3)(sum);
        assert.equal(solutions,18);
      });
});
