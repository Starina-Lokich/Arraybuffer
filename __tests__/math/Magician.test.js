import Magician from '../../src/math/Magician';

test('Magician.attack без дурмана', () => {
  const magician = new Magician();
  magician.distance = 2;
  expect(magician.attack).toBe(90);
});

test('Magician.attack с дурманом', () => {
  const magician = new Magician();
  magician.distance = 2;
  magician.stoned = true;
  expect(magician.attack).toBe(85);
});

test('Magician.stoned влияет на атаку', () => {
  const magician = new Magician();
  magician.distance = 3;
  expect(magician.attack).toBe(80);
  magician.stoned = true;
  expect(magician.attack).toBe(72);
});