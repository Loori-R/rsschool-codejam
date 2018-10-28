const assert = require('assert');
Object.freeze(assert);
const recursion = require('./../recursion');
describe('function "recursion"', () => {  
      it('0', () => {
        let tree = {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}};
        const solutions = recursion(tree);
        assert.deepEqual(solutions,[[100], [90, 120], [70,99,110,130]]);
      });
});
