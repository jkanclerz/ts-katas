import {multiply} from './samples'

describe("Testing...", () => {
    it('add', function() {
      let result = multiply(2, 2)
      expect(result).toBe(4);
    });
});