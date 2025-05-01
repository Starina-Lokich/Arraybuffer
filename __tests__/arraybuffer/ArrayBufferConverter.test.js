import ArrayBufferConverter from '../../src/arraybuffer/ArrayBufferConverter';
import getBuffer from '../../src/arraybuffer/getBuffer';

describe('ArrayBufferConverter', () => {
  let converter;

  beforeEach(() => {
    converter = new ArrayBufferConverter();
  });

  test('should load buffer correctly', () => {
    const buffer = getBuffer();
    converter.load(buffer);
    expect(converter.buffer).toBe(buffer);
  });

  test('should throw error when loading invalid buffer', () => {
    expect(() => {
      converter.load(null);
    }).toThrow('Invalid buffer');

    expect(() => {
      converter.load(new Uint8Array(16));
    }).toThrow('Invalid buffer');
  });

  test('should convert buffer to string correctly', () => {
    const buffer = getBuffer();
    converter.load(buffer);
    const result = converter.toString();
    expect(result).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
  });
});