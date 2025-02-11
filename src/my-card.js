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
    this.color = "black";
  }
  
  handleClick() {
    //const popupUrl = `https://www.bluey.tv/watch/`;
    //const popupTitle = `${this.title} Info`;
    //const popupOptions = "width=600,height=400,left=200,top=200,resizable=yes";

    //window.open(popupUrl, popupTitle, popupOptions);
    alert("Hello! This is my attempt to use the button")
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
        min-height:45em;
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
        display: block;
        background-color:#0492c2;
        border: 2px solid #1f456e;
        border-radius: 25px;
        font-family: "Bebas Neue", cursive;
        font-size: 17px;
        font-weight: bold; 
        color: white;
        margin: 20px;
      }

      a:hover{
        padding:10px 20px;
        display: block;
        background-color:#173d4a;
        border: 2px solid #1f456e;
        border-radius: 25px;
        font-family: "Bebas Neue", cursive;
        font-size: 17px;
        font-weight: bold; 
        color: white;
        margin: 20px;

      }

      .btnchange{
        padding: 10px 8px;
        display: flex;
        background-color:gray;
        border: 2px solid #1f456e;
        border-radius: 25px;
        font-family: "Bebas Neue", cursive;
        font-size: 17px;
        font-weight: bold; 
        color: white;
        margin: 0 auto 0 auto;
      }

      .btnchange:hover{
        padding: 10px 8px;
        display: flex;
        cursor:pointer;
        background-color:blue;
        border: 2px solid #1f456e;
        border-radius: 25px;
        font-family: "Bebas Neue", cursive;
        font-size: 17px;
        font-weight: bold; 
        color: white;
        margin:0 auto 0 auto;
      }


    p{
      text-align: center;
      font-size: 16px;
    }

    .card_stat{
      margin: 1em 0;
    }
    `;
  }

  render() {
    return html`
    <div class="boxcolor" style="border: 10px solid ${this.color};">
    <h1>${this.title}</h1>
    <img src=${this.image}>
    <p>Bluey is an Australian animated preschool television series which premiered on ABC Kids on 1 October 2018</p>
    <table class="card_stat">
      <tbody>
        <tr><th>Full Name</th><td>${this.title}</td></tr>
        <tr><th>Age</th><td>7</td></tr>
        <tr><th>Breed</th><td>Blue Heeler</td></tr>
        <tr><th>Also known as</th><td> Barnicus</td></tr>
      </tbody>
    </table>
    <a class="btn" href=${this.link} target="_blank" style="background-color:${this.color}">Learn more</a>
    <button class="btnchange" href=${this.link} @click=${this.handleClick}>Try</button>
    </div>
    `;
  }

  static get properties() {
    return {
      title: {type: String },
      link: {type: String},
      image: {type: String},
      color: {type: String},
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
