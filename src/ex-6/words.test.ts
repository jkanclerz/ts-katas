import { findShortest, findLongest } from './words';

describe('given a string of words', () => {
    it('find shortest one', () => {
      expect(findShortest('bitcoin take over the world maybe who knows perhaps'))
        .toBe('the');

      expect(findShortest('turns out random test cases are easier than writing out basic ones'))
        .toBe('are')

      expect(findShortest('i want to travel the world writing code one day'))
      .toBe('i')
    });

    it('find longest one', () => {
      expect(findShortest('bitcoin take over the world maybe who knows perhaps'))
        .toBe('findLongest');
    });
});