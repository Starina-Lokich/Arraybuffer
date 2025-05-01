export default class ArrayBufferConverter {
    constructor() {
      this.buffer = null;
    }
  
    load(buffer) {
      if (!(buffer instanceof ArrayBuffer)) {
        throw new Error('Invalid buffer');
      }
      this.buffer = buffer;
    }
  
    toString() {
      const dataView = new Uint16Array(this.buffer);
      return String.fromCharCode(...dataView);
    }
  }