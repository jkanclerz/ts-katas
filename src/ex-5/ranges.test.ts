import { rangeBorder } from "./ranges";

describe('find Lowes and highest', () => {
    it(' have to return the highest and lowest number.', () => {
      let result: [number, number] = rangeBorder("1 2 3 4 5")
      expect(result).toBe([1, 5]);
    });

    it('works with negative', () => {
      let result: [number, number] = rangeBorder("1 2 -3 4 5")
      expect(result).toBe([-3, 5]);
    });

    it('works with negative', () => {
      let result: [number, number] = rangeBorder("1 9 3 4 -5")
      expect(result).toBe([-5, 9]);
    });
});