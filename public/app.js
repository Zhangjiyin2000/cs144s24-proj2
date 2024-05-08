import Card from "./card.js";
import Mover from "./mover.js";

export default class App {
  constructor() {
    //TODO
    // Find the TODO column
    this.todoCol = document.getElementById("todo");

    // Initialize a single instance of Mover
    this.mover = new Mover(); 

    // Setup event handlers
    this.setupEventHandlers();
  }

  setupEventHandlers() {
    const form = document.getElementById('addCard');  // Form reference
    const titleInput = document.getElementById('cardTitle');
    const colorInput = document.getElementById('cardColor');

    form.addEventListener('submit', (event) => {
      event.preventDefault();  // Prevent default form submission

      const title = titleInput.value.trim();
      // const color = colorInput.value.trim() || "#ffffff";  // Default color
      const color = colorInput.value;

      if (title === "") {
        console.error("Title is required.");
        return;
      }

      // Add a new card to the "To Do" section
      this.addCard("todo", title, color);

      // Clear the form inputs
      titleInput.value = "";
      colorInput.value = "";
    });

    // Handle "Enter" key to trigger form submission
    form.addEventListener('keydown', (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        form.dispatchEvent(new Event("submit"));  // Trigger form submission
      }
    });
  }

  addCard(col, title, color) {
    //TODO
    // Create a new card
    const newCard = new Card(title, color);

    // Find the corresponding column
    const colElement = document.getElementById(col);

    // Add the card to the column
    //newCard.addToCol(col, new Mover());
    newCard.addToCol(colElement, this.mover);

    return newCard;
  }

  //TODO
}
