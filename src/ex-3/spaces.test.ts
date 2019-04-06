import { removeSpaces } from "./spaces";

describe('spaces removal', () => {
    it('remove space from string', () => {
      let result = removeSpaces('0 700 700 700 ')
      expect(result).toBe('0700700700');
    });
});