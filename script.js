
const url= 'https://freedictionaryapi.com/api/v1/entries/en/<word>'; 

fetch(url)
  .then((response) => {
    if (!response.ok){
        throw new Error('HTTP Error.');
    }
        return response.json();
    })
  .then((data) => {
    console.log(data);
  })
  