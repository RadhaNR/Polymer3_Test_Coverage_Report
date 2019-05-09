import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

import "@polymer/paper-button/paper-button.js";
/**
 * @customElement
 * @polymer
 */
class Test_demoApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <div>{{prop1}}</div>
      <paper-button raised>Hello Button</paper-button>
      
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'test_demo-app'
      }
    };
  }
}

window.customElements.define('test_demo-app', Test_demoApp);
