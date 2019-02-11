"use strict";
import { LitElement, html, css } from "lit-element";
import { repeat } from "lit-html/directives/repeat.js";

import "./ht-elements-licenses-empty.js";
import "./ht-elements-licenses-item.js";

import { styles } from "@01ht/ht-theme/styles";

class HTElementsLicenses extends LitElement {
  static get styles() {
    return [
      styles,
      css`
        #list {
          display: grid;
          grid-gap: 16px;
          margin-top: 32px;
        }
      `
    ];
  }

  render() {
    const { items } = this;
    return html`
    <div id="container">
      ${
        items.length === 0
          ? html`<ht-elements-licenses-empty></ht-elements-licenses-empty>`
          : html`
          <h1 class="mdc-typography--headline5">Мои лицензии</h1>
          <div id="list">
            ${repeat(
              items,
              item =>
                html`<ht-elements-licenses-item .data="${item}"></ht-elements-licenses-item>`
            )}
        </div>`
      }
    </div>
`;
  }

  static get properties() {
    return {
      items: { type: Array }
    };
  }
}

customElements.define("ht-elements-licenses", HTElementsLicenses);
