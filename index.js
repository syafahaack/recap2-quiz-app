// phew… not a lot going on here. Please add some code!
/* Toggle functionality only for the first card
document.addEventListener("DOMContentLoaded", () => {
  // Bookmark button toggle
  const bookmarkButton = document.querySelector(
    ".card-list__item:first-child .bookmark"
  );
  bookmarkButton.addEventListener("click", () => {
    bookmarkButton.classList.toggle("bookmark--active");
  });
  // Answer button toggle
  const answerButton = document.querySelector(
    ".card-list__item:first-child .card__button-answer"
  );
  const answer = document.querySelector(
    ".card-list__item:first-child .card__answer"
  );
  answerButton.addEventListener("click", () => {
    answer.classList.toggle("card__answer--active");
    answerButton.textContent = answer.classList.contains("card__answer--hidden")
      ? "Show answer"
      : "Hide answer";
  });
});
*/

document.addEventListener("DOMContentLoaded", function () {
  // Get all bookmark buttons
  const bookmarkButtons = document.querySelectorAll(".bookmark");

  // Add click event listener to each bookmark button
  bookmarkButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Toggle the 'bookmark--active' class
      this.classList.toggle("bookmark--active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Get all answer buttons
  const answerButtons = document.querySelectorAll(".card__button-answer");

  // Add click event listener to each answer button
  answerButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Find the associated answer element
      const answer = this.parentElement.querySelector(".card__answer");

      // Toggle the 'hidden' class on the answer element
      answer.classList.toggle("hidden");

      // Toggle the text on the answer button
      if (answer.classList.contains("hidden")) {
        this.textContent = "Show answer";
      } else {
        this.textContent = "Hide answer";
      }
    });
  });
});
