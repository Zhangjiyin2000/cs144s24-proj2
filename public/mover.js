/* Text to add to the move here button */
const MOVE_HERE_TEXT = "— Move here —";

export default class Mover {
  constructor() {
    //TODO
    this.movingCard = null; // The currently selected card for moving

    
  }

  moveCard(col, index) {
    if (!this.movingCard) return;

    const cards = col.querySelectorAll(".card");
    const referenceCard = cards[index];

    if (referenceCard) {
      referenceCard.before(this.movingCard);  // Insert before reference card
    } else {
      col.appendChild(this.movingCard);  // Append to the end
    }

    this.stopMoving();  // Reset the move state after completing the move
  };

  startMoving(card) {
    //TODO
    // Cancel any ongoing move before starting a new one
    if (this.movingCard) {
      this.stopMoving(); 
    }

    this.movingCard = card; // Mark this card as the one being moved
    this.movingCard.classList.add("moving"); // Add "moving" CSS class
    
    // Add "Move Here" buttons
    const columns = document.querySelectorAll(".column");
    columns.forEach((col) => {
      // Add a "Move Here" button at the top of the column
      const moveHereTop = document.createElement("button");
      moveHereTop.className = "moveHere";
      moveHereTop.textContent = MOVE_HERE_TEXT;
      moveHereTop.addEventListener("click", (event) => {
        this.moveCard(col, 0);
        event.currentTarget.remove();  // Remove the "Move Here" button after moving
      }); // Move to the top of the column
      col.querySelector(".columnTitle").after(moveHereTop);

      // Add "Move Here" buttons after each card
      const cards = col.querySelectorAll(".card");
      cards.forEach((c, index) => {
        const moveHere = document.createElement("button");
        moveHere.className = "moveHere";
        moveHere.textContent = MOVE_HERE_TEXT;
        moveHere.addEventListener("click", (event) => {
          this.moveCard(col, index + 1);
          event.currentTarget.remove();  // Remove the "Move Here" button after moving
        }); // Move after this card
        c.after(moveHere);
      });
    });
  }

  stopMoving() {
    //TODO
    if (!this.movingCard) return;

    this.movingCard.classList.remove("moving");
    this.movingCard = null;

    const moveHereButtons = document.querySelectorAll(".moveHere");
    moveHereButtons.forEach((button) => button.remove());
  }

  //TODO
  
  // for 10 extra credit points

  // handleDrop(section) {
  //   if (!this.movingCard) return;

  //   // Append the moving card to the section
  //   section.appendChild(this.movingCard);

  //   // Reset state after dropping
  //   this.stopMoving();
  // }

  // for additional 5 extra credit points

  handleDropCardToMoveHereButton(moveHereButton) {
    if (!this.movingCard) return;

    // Move the moving card into the moveHere Button 
    moveHereButton.prepend(this.movingCard);

    // Reset state after dropping
    this.stopMoving();
  }
}
