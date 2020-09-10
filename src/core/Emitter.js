export class Emitter {
  constructor() {
    this.listeners = {};
  }

  emit(eventName, ...args) {
    if (!Array.isArray(this.listeners[eventName])) {
      return false;
    }
    this.listeners[eventName].forEach(listener => {
      listener(...args);
    });
    return true;
  }

  subscribe(eventName, fn) {
    this.listeners[eventName] = this.listeners[eventName] || [];
    this.listeners[eventName].push(fn);
    return () => {
      this.listeners[eventName] =
      this.listeners[eventName].filter(listener => listener !== fn);
    };
  }
}

// const emitter = new Emitter();

// const unsub = emitter.subscribe('vladilen', data =>
//  console.log('Sub', data));

// emitter.emit('vladilen', 42);

// setTimeout(() => {
//   emitter.emit('vladilen', 'After two seconds');
// }, 2000);