const assert = require('assert');
Object.freeze(assert);
const sum = require('./../sumOfOther');
describe('sumOfOther function returns the sum of the remaining elements of the array', () => {  
    it('0', () => {
        const solutions = sum([0,0,0]);
        assert.deepEqual(solutions,[0,0,0]);
      });

      it('1', () => {
        const solutions = sum([5,5,2]);
        assert.deepEqual(solutions,[7,7,10]);
      });

      it('2', () => {
        const solutions = sum([-1,-2,3]);
        assert.deepEqual(solutions,[1,2,-3]);
      });

      it('3', () => {
        const solutions = sum([1]);
        assert.deepEqual(solutions,[0]);
      });
      it('4', () => {
        const solutions = sum([1,1,1,1,1,1,1,1,1,1,1,1]);
        assert.deepEqual(solutions,[11,11,11,11,11,11,11,11,11,11,11,11]);
      });
      it('5', () => {
        const solutions = sum([-1000,1000,1000,-4000]);
        assert.deepEqual(solutions,[-2000, -4000, -4000, 1000]);
      });     
});
