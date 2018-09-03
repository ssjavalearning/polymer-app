import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `polymer-app`
 * /nmbm
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class PolymerApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'polymer-app',
      },
    };
  }
}

window.customElements.define('polymer-app', PolymerApp);
