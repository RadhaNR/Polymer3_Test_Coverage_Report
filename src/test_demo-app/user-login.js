import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
class UserLogin extends PolymerElement {
    static get template() {
        return html`
            <div>Hello</div>
        `
    }
}

customElements.define('user-login', UserLogin);