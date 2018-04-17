/**
 * @customElement
 * @polymer
 */
class PolymerWebpackZeroConfigApp extends Polymer.Element {
  static get is() { return 'polymer-webpack-zero-config-app'; }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'polymer-webpack-zero-config-app'
      }
    };
  }
}

window.customElements.define(PolymerWebpackZeroConfigApp.is, PolymerWebpackZeroConfigApp);