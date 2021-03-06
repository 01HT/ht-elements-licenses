"use strict";
import { LitElement, html, css } from "lit-element";
import "@polymer/paper-button";

import { styles } from "@01ht/ht-theme/styles";

class HTElementsLicensesEmpty extends LitElement {
  static get styles() {
    return [
      styles,
      css`
        a,
        a:hover {
          color: inherit;
          text-decoration: none;
        }

        img {
          width: 15vw;
          max-width: 164px;
          min-width: 128px;
          margin: auto;
        }

        #container {
          display: flex;
          align-items: center;
          flex-direction: column;
          margin: 32px auto 0 auto;
        }

        #text {
          margin-top: 16px;
        }

        #sub {
          text-align: center;
          margin: 8px 0 16px 0;
          font-size: 16px;
          color: var(--secondary-text-color);
        }
      `
    ];
  }

  render() {
    return html`
    <div id="container">
        <img src="${
          window.appConfig.cloudinary.url
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
}

customElements.define("ht-elements-licenses-empty", HTElementsLicensesEmpty);
