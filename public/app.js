import Card from "./card.js";
import Mover from "./mover.js";

export default class App {
  constructor() {
    //TODO
    // Find the TODO column
    this.todoCol = document.getElementById("todo");
  }

  addCard(col, title, color) {
    //TODO
    // Create a new card
    const newCard = new Card(title, color);

    // Find the corresponding column
    const colElement = document.getElementById(col);

    // Add the card to the column
    //newCard.addToCol(col, new Mover());
    newCard.addToCol(colElement);
  }

  //TODO
}
