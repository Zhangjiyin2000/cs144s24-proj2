/* The text to use when description is empty */
const NO_DESCRIPTION_TEXT = "(No description)";

export default class Card {
  constructor(title, color) {
    //TODO
    // Fine the template card element
    const template = document.querySelector(".template.card");

    //  Clone the template card
    this.card = template.cloneNode(true);

    // Set the title
    this.card.querySelector(".title").textContent = title;

    // Set the color
    this.card.style.backgroundColor = color;

    // Set the description
    this.setDescription(NO_DESCRIPTION_TEXT);

    // Remove template class in newly created card to make it visible
    this.card.classList.remove("template");

    // Setup event handlers
    this.setupEventHandlers();
  }

  setupEventHandlers() {
    // Setup the delete button
    const deleteButton = this.card.querySelector(".delete");
    deleteButton.addEventListener("click", () => {
      this.card.remove();
    });

    // Setup the edit button
    
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
