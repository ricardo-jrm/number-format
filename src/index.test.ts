import { formatNumber } from './index';

describe('formats numbers', () => {
  it('should format 1337 to "1,337"', () => {
    expect(formatNumber(1337)).toBe('1,337');
  });
});
