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
    const editButton = this.card.querySelector(".edit");
    editButton.addEventListener("click", () => {
      const descriptionElem = this.card.querySelector(".description");
      const textarea = this.card.querySelector(".editDescription");

      // Hide description, show textarea
      descriptionElem.classList.add("hidden");
      textarea.classList.remove("hidden");

      // Pre-populate textarea and focus/select text
      textarea.value = descriptionElem.textContent;  // Copy current description
      textarea.focus();  // Set focus on textarea
      textarea.select();  // Select all text

      // When user clicks or tabs away, update description and return to normal state
      textarea.addEventListener("blur", () => {
        // Set new description
        const newDescription = textarea.value;
        this.setDescription(newDescription);

        // Hide textarea, show description
        textarea.classList.add("hidden");
        descriptionElem.classList.remove("hidden");
      }, { once: true });  // Ensure listener is removed after triggering
    });

    // Setup the move button
    const moveButton = this.card.querySelector(".startMove");
    moveButton.addEventListener("click", () => {
      // Start moving this card
      this.mover.startMoving(this.card);
    });
  }

  addToCol(colElem, mover) {
    //TODO
    this.mover = mover; // Store the Mover instance
    colElem.appendChild(this.card);

  }

  setDescription(text) {
    //TODO
    const descriptionElem = this.card.querySelector('.description');
    if (text !== "") descriptionElem.textContent = text;
  }

  //TODO
  
}
