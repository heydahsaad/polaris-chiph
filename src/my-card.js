import { LitElement, html, css } from 'lit';
import "@haxtheweb/meme-maker/meme-maker.js";

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
    //is default setting
    super();
    this.title = "Bluey";
    this.link = "https://haxtheweb.com";
    this.image = "https://www.disneyclips.com/images3/images/bluey-birds.png";
    this.color = "black";
    this.fancy = false;
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
        display: inline-block;
      }

      :host([fancy]) .boxcolor{
        background-color: rosybrown;
        color: white;
      }

      .name{
        font-weight:bold;
        font-size: 110%;
      }

      .boxcolor{
        padding: 8px;
        background: #fff8e7;
        width:300px;
        display:block;
        box-shadow: 0 5px 15px 0 rgba(0,0,0,0.5);
        border-radius:25px;
        border: 10px solid rgb(81,155,204);
        min-height:50em;
        transition: top ease 0.5s;
        top: 0;
        position: relative;
        margin:8px;
      }

      .boxcolor:hover{
        transition:0.3s;
        display:block;
        box-shadow: 5px -15px 20px 5px rgba(0,0,0,0.5);
        top: -15px;
      }

      img{
        display: block;
        margin-left: auto;
        margin-right: auto;
        max-width: 80%;
        height: auto;
      }

      h1{
        font-size:clamp(20px, 2vw, 45px);
        display: block;
        padding: 8px 8px 16px;
        margin: 10px auto 0 auto;
        color: rgb(81,155,204);
        text-align: center;
        font-family: "Bebas Neue", cursive;
        overflow: auto;
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

      details summary {
        text-align: center;
        font-size: 20px;
        padding: 5px;
        cursor: pointer;
        box-shadow: 3px 3px 15px black;
        border-radius: 25px;
        margin: 15px;
      } 

      details[open] summary {
        font-weight: bold;
      }

      details div {
        border: 1px solid black;
        text-align: left;
        padding: 8px;
        height: 70px;
        overflow: auto;
      }
  
      ::slotted(p) {
        font-size: 120%;
        font-family: "Bebas Neue", cursive;
        text-align: center;
      }
    `;
  }

  // put this anywhere on the MyCard class; just above render() is probably good
  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  render() {
    return html`
    <div class="boxcolor" style="border: 10px solid ${this.color};">
      <!-- ${this.title.length > 20 ? this.title.substring(0,10) + "..." : this.title} -->
      <h1 style="color: ${this.color}">${this.title}</h1>
      <!-- Place to put the slot -->
      <slot name="character">Default characteristic: Like a dog</slot>
      <img src=${this.image} alt=${this.title}>
      <p>Bluey is an Australian animated preschool television series which premiered on ABC Kids on 1 October 2018</p>
      <details>
        <summary>Description</summary>
          <div>
            <table class="card_stat">
            <tbody>
              <tr><th>Full Name</th><td>${this.title}</td></tr>
              <tr><th>Age</th><td>7</td></tr>
              <tr><th>Breed</th><td>Blue Heeler</td></tr>
              <tr><th>Also known as</th><td> Barnicus</td></tr>
            </tbody>
            </table>
          </div>
      </details>
      <!-- put this in your render method where you had details -->
      <details ?open="${this.fancy}" @toggle="${this.openChanged}">
        <summary>Details</summary>
        <div>They are the cutest ones ^^</div>
      </details>
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
      description: {type: String},
      fancy: {type: Boolean, reflect: true},
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);