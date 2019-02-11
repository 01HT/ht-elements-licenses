"use strict";
import { LitElement, html, css } from "lit-element";
import { repeat } from "lit-html/directives/repeat.js";
import "@01ht/ht-image";
import "@01ht/ht-date";
import "@polymer/iron-iconset-svg/iron-iconset-svg.js";
import "@polymer/iron-icon/iron-icon.js";
import "@polymer/iron-collapse";
import "./ht-elements-licenses-item-license";

import { styles } from "@01ht/ht-theme/styles";

class HTElementsLicensesItem extends LitElement {
  static get styles() {
    return [
      styles,
      css`
        a {
          display: block;
          color: inherit;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }

        ht-image {
          width: 64px;
          border-radius: 3px;
          overflow: hidden;
        }

        ht-elements-licenses-item-license {
          margin-top: 16px;
        }

        #container {
          width: 100%;
          font-size: 14px;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-radius: 3px;
          grid-gap: 16px;
          padding: 16px;
          background: #fff;
          overflow: hidden;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
            0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
        }

        #info {
          flex: 1;
        }

        #list {
          display: flex;
          flex-direction: column;
        }

        #header {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          align-items: center;
          max-width: 140px;
          color: var(--accent-color);
          font-weight: 500;
          cursor: pointer;
          margin-top: 8px;
          user-select: none;
        }

        .item {
          display: flex;
        }

        .item span {
          color: var(--secondary-text-color);
        }

        .name {
          font-size: 14px;
          font-weight: 500;
          line-height: 1.3;
        }

        .author {
          display: flex;
          position: relative;
          align-items: center;
        }

        .author {
          color: var(--secondary-text-color);
        }

        .author a {
          margin-left: 4px;
        }

        .info {
          margin-left: 16px;
        }

        [hidden] {
          display: none;
        }
      `
    ];
  }

  render() {
    const { data, opened } = this;
    return html`
    <iron-iconset-svg size="24" name="ht-elements-licenses-item">
      <svg>
          <defs>
            <g id="expand-less"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></g>
            <g id="expand-more"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></g>
          </defs>
      </svg>
    </iron-iconset-svg>
    ${
      data
        ? html`
        <div id="container">
          <div id="info">
            <div class="item">
              <div>
                <a class="image" href="/item/${data.nameInURL}/${
            data.itemNumber
          }">
                    <ht-image placeholder="${
                      window.cloudinaryURL
                    }/image/upload/c_scale,f_auto,w_60/v${data.image.version}/${
            data.image.public_id
          }.jpg" image="${
            window.cloudinaryURL
          }/image/upload/c_scale,f_auto,w_128/v${data.image.version}/${
            data.image.public_id
          }.jpg" size="16x9"></ht-image>
                </a>
              </div>
              <div class="info">
                    <a class="name" href="/item/${data.nameInURL}/${
            data.itemNumber
          }">${data.name}</a>
                    <div class="author">от <a href="/${
                      data.authorData.isOrg ? "organization" : "user"
                    }/${data.authorData.nameInURL}/${
            data.authorData.isOrg
              ? `${data.authorData.organizationNumber}`
              : `${data.authorData.userNumber}`
          }"> ${data.authorData.displayName}</a>
                    </div>
                </div>
              </div>
        <div>
            <div id="header" @click="${
              this.toggle
            }"><div>Список лицензий</div><iron-icon icon="ht-elements-licenses-item:${
            opened ? "expand-less" : "expand-more"
          }"></iron-icon></div>
          <iron-collapse ?opened="${opened}">
                ${html`
          <div id="list">
            ${repeat(
              data.items,
              item =>
                html`<ht-elements-licenses-item-license .data="${item}"></ht-elements-licenses-item-license>`
            )}
        </div>`}
              </iron-collapse>
        </div>
            
          </div>
      </div>`
        : null
    }
`;
  }

  static get properties() {
    return {
      data: { type: Object },
      opened: { type: Boolean }
    };
  }

  toggle() {
    this.opened = !this.opened;
  }
}

customElements.define("ht-elements-licenses-item", HTElementsLicensesItem);
