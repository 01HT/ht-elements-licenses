"use strict";
import { LitElement, html, css } from "lit-element";
import "@01ht/ht-date";
import "@polymer/iron-iconset-svg/iron-iconset-svg.js";
import "@polymer/iron-icon/iron-icon.js";

class HTElementsLicensesItemLicense extends LitElement {
  static styles = [
    window.SharedStyles,
    css`<style>
      :host {
        display: flex;
        position: relative;
        box-sizing:border-box;
      }

      iron-icon {
        margin: 0 2px;
      }

      #container {
        width:100%;
        font-size: 14px;
        position:relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-radius:3px;
        grid-gap:16px;
        padding-top: 16px;
        background: #fff;
        overflow:hidden;
        border-top: 1px solid #ddd;
      }

      #info {
        flex: 1;
      }

      #info > * {
          min-height: 26px;
          line-height: 26px;
          font-weight: 500;
      }

      .value {
        color: var(--secondary-text-color);
        font-weight: 400;
      }

      .name {
        font-size :14px;
        font-weight: 500;
        margin-bottom: 8px;
        color: var(--secondary-text-color);
      }

      .amount .value {
        font-weight: 500;
        color: var(--accent-color);
      }

      .status {
        display:flex;
        align-items:center;
        flex-wrap:wrap;
      }

      #header {
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        max-width: 140px;
        color: var(--accent-color);
        font-weight: 500;
        cursor:pointer;
        margin: 8px 0;
        user-select: none;
      }

      paper-button {
        margin: 0;
        margin-left: 8px;
      }

      #actions {
        display:flex;
        justify-content: flex-end;
        margin-top: 8px;
      }

      iron-icon[icon="ht-elements-licenses-item-license:warning"] {
        color: #f9a825;
      }

      iron-icon[icon="ht-elements-licenses-item-license:check-circle"] {
        color: #4caf50;
      }

      [hidden] {
        display:none;
      }
    </style>`
  ];

  render() {
    const { data } = this;
    return html`
    <iron-iconset-svg size="24" name="ht-elements-licenses-item-license">
      <svg>
          <defs>
            <g id="check-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></g>
            <g id="warning"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></g>
          </defs>
      </svg>
    </iron-iconset-svg>
    ${
      data
        ? html`
        <div id="container">
          <div id="info">
            <div class="name">${data.license.name}</div>
            <div class="license-id">ID лицензии: <span class="value">${
              data.licenseId
            }</span></div>
            <div class="project">Идентификатор проекта: <span class="value">${
              data.project === "" ? "-" : data.project
            }</span></div>
            <div class="license-id">Версия: <span class="value"><a id="license-type" href="https://github.com/01HT/elements-single-commercial-license/tree/v${
              data.version
            }" target="_blank" rel="noopener">
              ${data.version}
            </a></span></div>
            <div class="order-id">№ заказа: <span class="value">${
              data.orderNumber
            }</span></div>
            <div class="created">Дата создания: <span class="value"><ht-date .data="${
              data.created
            }"></ht-date></span></div>
            <div class="status">Статус:
                ${
                  data.project === ""
                    ? html`<iron-icon icon="ht-elements-licenses-item-license:warning"></iron-icon><span class="value">Не активирована</span>`
                    : html`<iron-icon icon="ht-elements-licenses-item-license:check-circle"></iron-icon><span class="value">Активирована</span>`
                }
            </div>
          </div>
          ${
            data.project === ""
              ? html`<div id="actions">
            <paper-button raised ?hidden="${data.project !== ""}" @click="${
                  this._bindProject
                }">Активировать</paper-button>
          </div>`
              : null
          }
      </div>`
        : null
    }
`;
  }

  static get properties() {
    return {
      data: { type: Object }
    };
  }

  _bindProject() {
    this.dispatchEvent(
      new CustomEvent("on-bind-project", {
        bubbles: true,
        composed: true,
        detail: {
          licenseId: this.data.licenseId
        }
      })
    );
  }
}

customElements.define(
  "ht-elements-licenses-item-license",
  HTElementsLicensesItemLicense
);
