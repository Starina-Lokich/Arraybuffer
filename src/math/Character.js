export default class Character {
  constructor(attack, distance) {
    this._attack = attack;
    this._distance = distance || 1;
    this._stoned = false;
  }

  get attack() {
    if (this._distance < 1 || this._distance > 5) return 0;

    // Базовый урон: от 100% на ближайшей клетке до 60% на пятой
    let baseAttack = this._attack * (1.1 - 0.1 * this._distance);

    // Уменьшение урона при дурмане
    if (this._stoned) {
      baseAttack -= Math.log2(this._distance) * 5;
    }

    return Math.max(Math.round(baseAttack), 0);
  }

  set attack(value) {
    this._attack = value;
  }

  get distance() {
    return this._distance;
  }

  set distance(value) {
    this._distance = value;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = Boolean(value);
  }
}