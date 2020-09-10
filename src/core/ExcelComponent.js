import {DomListener} from '@core/DOMListener';

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
    this.emitter = options.emitter;
    this.unsubscribers = [];

    this.prepare();
  }

  // Setting component before init 
  prepare() {}

  // Return component template
  toHTML() {
    return '';
  }

  // Notify listeners about events
  $emit(event, ...args) {
    const unsub = this.emitter.emit(event, ...args);
    this.unsubscribers.push(unsub);
  }

  // Subscribe to events
  $on(event, fn) {
    this.emitter.subscribe(event, fn);
  }
  
  // Init component
  // Add DOM listeners
  init() {
    this.initDOMListeners();
  }

  // Delete component
  // Clean listeners
  destroy() {
    this.removeDOMListeners();
    this.unsubscribers.forEach(unsub => unsub());
  }
}
