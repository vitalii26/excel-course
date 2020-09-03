import {DomListener} from '@core/DOMListener';

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
  }
  // Return component layout
  toHTML() {
    return '';
  }
  
  init() {
    this.initDOMListeners();
  }

  destroy() {
    this.removeDomListener();
  }
}