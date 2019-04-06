import { Calculator } from "./calculator";

describe('calculate', () => {
    it('add', () => {
      let result = new Calculator().sum(5, 2);
      expect(result).toBe(7);
    });
});