"use strict";
import { LitElement, html } from "@polymer/lit-element";
import "@polymer/paper-button";

class HTElementsLicensesEmpty extends LitElement {
  render() {
    return html`
    ${SharedStyles}
    <style>
        :host {
            display: flex;
            position: relative;
            box-sizing: border-box;
        }

        a {
            color:inherit;
            text-decoration: none;
        }

        img {
            width: 15vw;
            max-width: 164px;
            min-width: 128px;
        }

        #container {
            display:flex;
            align-items:center;
            flex-direction:column;
            margin:32px auto 0 auto;
        }

        #text {
            margin-top:16px;
        }

        #sub {
            text-align:center;
            margin: 8px 0 16px 0;
            font-size: 16px;
            color: var(--secondary-text-color);
        }
    </style>
    <div id="container">
        <img src="${
          window.cloudinaryURL
        }/image/upload/apps/elements/pages/my-licenses/empty.svg" alt="No licenses">
        <div id="text" class="mdc-typography--headline5">У вас пока нет лицензий</div>
        <div id="sub-text">
          <div id="sub">Для покупки лицензии воспользуйтесь каталогом</div>
        </div>
        <a href="/catalog">
            <paper-button raised>Каталог</paper-button>
        </a>
    </div>
`;
  }

  static get is() {
    return "ht-elements-licenses-empty";
  }
}

customElements.define(HTElementsLicensesEmpty.is, HTElementsLicensesEmpty);
