/* The text to use when description is empty */
const NO_DESCRIPTION_TEXT = "(No description)";

export default class Card {
  constructor(title, color) {
    //TODO
    // Fine the template card element and clone it
    const template = document.querySelector(".template.card");
    console.log(template);
    this.card = template.cloneNode(true);

    // Set the title
    this.card.querySelector(".title").textContent = title;

    // Set the color
    this.card.style.backgroundColor = color;

    // Set the description
    this.setDescription(NO_DESCRIPTION_TEXT);

    // Remove template class in newly created card to make it visible
    this.card.classList.remove("template");
  }

  addToCol(colElem, mover) {
    //TODO
    colElem.appendChild(this.card);

  }

  setDescription(text) {
    //TODO
    const descriptionElem = this.card.querySelector('.description');
    if (text !== "") descriptionElem.textContent = text;
  }

  //TODO
}
