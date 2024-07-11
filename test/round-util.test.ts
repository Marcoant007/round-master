import { roundTo } from '../src/round-util';

describe('roundTo', () => {
  it('should round 1.23456789 to 1.23 with 2 decimals', () => {
    expect(roundTo(1.23456789, 2)).toBe(1.23);
  });

  it('should round 1.23456789 to 1.235 with 3 decimals', () => {
    expect(roundTo(1.23456789, 3)).toBe(1.235);
  });

  it('should round 1.23456789 to 1 with 0 decimals', () => {
    expect(roundTo(1.23456789, 0)).toBe(1);
  });

  it('should round -1.23456789 to -1.23 with 2 decimals', () => {
    expect(roundTo(-1.23456789, 2)).toBe(-1.23);
  });


  it('should round 0.1 + 0.2 to 0.3 with 2 decimals', () => {
    expect(roundTo(0.1 + 0.2, 2)).toBe(0.3);
  });

  it('should throw TypeError when value is not a number', () => {
    expect(() => roundTo('not a number' as any, 2)).toThrow(TypeError);
  });

  it('should throw TypeError when decimals is not a number', () => {
    expect(() => roundTo(1.23456789, 'not a number' as any)).toThrow(TypeError);
  });
});
