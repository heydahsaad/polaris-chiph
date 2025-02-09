import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "Bluey";
    this.link = "https://haxtheweb.com";
    this.image = "https://www.disneyclips.com/images3/images/bluey-birds.png";
    this.style = "black";

    
    var sheet = document.createElement("style")
      sheet.innerHTML = "div {border: 2px solid black;}";
      document.body.appendChild(sheet)
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .boxcolor{
        padding: 8px;
        background: #fff8e7;
        width:300px;
        transition:0.3s;
        display:block;
        box-shadow: 0 5px 15px 0 rgba(0,0,0,0.5);
        border-radius:25px;
        border: 10px solid rgb(81,155,204);
      }

      img{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 80%;
      }

      h1{
      font-size: 40px;
      display: block;
      padding: 8px 8px 16px;
      margin: 10px auto 0 auto;
      color: rgb(81,155,204);
      text-align: center;
      font-family: "Bebas Neue", cursive;
    }

      a {
        padding:10px 20px;
        display: flex;
        background-color:#0492c2;
        border: 2px solid #1f456e;
        border-radius: 25px;
        font-family: "Bebas Neue", cursive;
        font-size: 17px;
        font-weight: bold; 
        color: white;
      }
    `;
  }

  render() {
    return html`
    <div class="boxcolor">
    <h1>${this.title}</h1>
    <img src=${this.image}>
    <p>Bluey is an Australian animated preschool television series which premiered on ABC Kids on 1 October 2018</p>
    <table class="card_stat">
      <tbody>
        <tr><th>Full Name</th><td>Bluey Heeler</td></tr>
        <tr><th>Age</th><td>7</td></tr>
        <tr><th>Breed</th><td>Blue Heeler</td></tr>
        <tr><th>Also known as</th><td> Barnicus</td></tr>
      </tbody>
    </table>
    <a class="btn" href=${this.link} target="_blank">Learn more</a>
    </div>
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      link: {type: String},
      image: {type: String},
      style: {type: String},
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
