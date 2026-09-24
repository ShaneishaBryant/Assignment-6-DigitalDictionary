// Grab input element and UI controls
const wordInput = document.querySelector("#word-input");
const wordHeading = document.querySelector("h2"); // Target h2
const resultContainer = document.querySelector("#result-container"); // Container element
const searchBtn = document.querySelector("#search-btn");

function searchWord() {
  const word = wordInput.value.trim();

  if (!word) {
    wordHeading.textContent = "Please enter a word:";
    return;
  }

  const url = `https://freedictionaryapi.com/api/v1/entries/en/${word}`;

  // Clear previous content
  resultContainer.innerHTML = "";
  wordHeading.textContent = "Loading...";

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      resultContainer.innerHTML = ""; // Clear previous results

      const entry = data.entries?.[0];
      const senses = entry?.senses;

      if (!entry || !senses || senses.length === 0) {
        wordHeading.textContent = `No definitions found for "${word}".`;
        return;
      }

      wordHeading.textContent = entry.word || word; // Set heading to returned word

      const list = document.createElement("ul"); // Create list element

      // Loop through definitions and append
      senses.forEach((sense) => {
        if (sense.definition) {
          const listItem = document.createElement("li");
          listItem.textContent = sense.definition;
          list.appendChild(listItem);
        }
      });

      resultContainer.appendChild(list); // Add list to result-container element
    })
    .catch((error) => {
      wordHeading.textContent = "Error fetching definition.";
      console.error("Error: Could not connect to the dictionary service.", error);
    });
}

// Trigger search when user clicks the button
searchBtn.addEventListener("click", searchWord);