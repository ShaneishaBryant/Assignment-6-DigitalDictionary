
const url= 'https://freedictionaryapi.com/api/v1/entries/en/<word>'; 

fetch(url)
  .then((response) => {
    if (!response.ok){
        throw new Error(`HTTP Error: ${response.status}`);
    }
        return response.json();
    })
  .then((data) => {
    //checking is data not in array & checks if array is empty 
    if(!Array.isArray(data) || data.length === 0){
        console.log("Word not found");
        return;
    }
    const key = data[0].word;
    //selects first word, first meaning, first definition, reads text
    const firstDefinition = data[0].meanings[0]?.definitions[0]?.definition;

    console.log("Word: " + key);
    console.log("Definition: " + firstDefinition);

  })
  .catch((error) => {
    console.error("Error: Could not connect to the dictionary service.", error);
  })
  