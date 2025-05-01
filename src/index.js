// === Math (log/trig) ===
import Magician from './math/Magician';
import Daemon from './math/Daemon';

// Создаём персонажей
const magician = new Magician();
const daemon = new Daemon();

// Настраиваем атаку
magician.distance = 2;
daemon.distance = 4;

// Включаем "дурман" для демона
daemon.stoned = true;

console.log('=== Атака персонажей ===');
console.log(`Magician (расстояние 2): ${magician.attack}`); // 90
console.log(`Daemon (расстояние 4 + дурман): ${daemon.attack}`); // 79
console.log('');

// === ArrayBuffer ===
import ArrayBufferConverter from './arraybuffer/ArrayBufferConverter';
import getBuffer from './arraybuffer/getBuffer';

// Получаем буфер и конвертируем его в строку
const converter = new ArrayBufferConverter();
converter.load(getBuffer());

const jsonData = converter.toString();
console.log('=== Данные из ArrayBuffer ===');
console.log(jsonData);