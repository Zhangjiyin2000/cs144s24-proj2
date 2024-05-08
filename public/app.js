import Card from "./card.js";
import Mover from "./mover.js";

export default class App {
  constructor() {
    //TODO
    // Find the TODO, DOING and DONE column
    this.todoCol = document.getElementById("todo");
    this.doingCol = document.getElementById("doing");
    this.doneCol = document.getElementById("done");

    // Initialize a single instance of Mover
    this.mover = new Mover(); 

    // Setup event handlers
    this.setupEventHandlers();

    // Setup drag-and-drop listeners
    const columns = [this.todoCol, this.doingCol, this.doneCol];
    columns.forEach((col) => {
      col.addEventListener("dragover", (event) => {
        event.preventDefault(); // Allow dragging over this section
      });

      col.addEventListener("drop", (event) => {
        event.preventDefault();
        this.mover.handleDrop(col); // Handle card drop in this section
      });
    });

    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      card.addEventListener("dragover", (event) => {
        event.preventDefault();
      });

      card.addEventListener("drop", (event) => {
        event.preventDefault();
        this.mover.handleDropCard(card); // Handle card drop after this card
      });
    });
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
      // colorInput.value = "";
      colorInput.value = "#FFB6C1"; // Reset default color
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
