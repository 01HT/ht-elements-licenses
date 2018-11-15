"use strict";
import { LitElement, html } from "@polymer/lit-element";
import { repeat } from "lit-html/directives/repeat.js";

import "./ht-elements-licenses-empty.js";
import "./ht-elements-licenses-item.js";

class HTElementsLicenses extends LitElement {
  render() {
    const { items } = this;
    return html`
    ${SharedStyles}
    <style>
      :host {
        display: block;
        position: relative;
        box-sizing: border-box;
      }

      #list {
        display:grid;
        grid-gap: 16px;
        margin-top: 32px;
      }
    </style>
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
                html`<ht-elements-licenses-item .data=${item}></ht-elements-licenses-item>`
            )}
        </div>`
      }
    </div>
`;
  }

  static get is() {
    return "ht-elements-licenses";
  }

  static get properties() {
    return {
      items: { type: Array }
    };
  }
}

customElements.define(HTElementsLicenses.is, HTElementsLicenses);
