How are you passing data from one then() call to another?

We are passing data by returning a value from the callback function inside the first .then(). When the value is returned it is automatically passed as the argument in the next .then().





Explain what a “Promise” actually represents in this code. What happens if the API is down or the URL is wrong? How does .catch() help us handle that?

The Promise represents a value that isn't available immediately, but will either resolve with data or fail in the future. 

If the API is down or the URL is invalid then the request fails at the network level, skipping all .then() blocks and jumping directly to .catch(). fetch() still receives a response from the server, but response.ok will be false. The throw new Error(...) statement rejects the promise and passes control to .catch().

.catch() acts as the safety net at the end of the promise chain. It allows you to display a clear error message. 




How does using the Fetch API to update only a portion of the page improve the “User Experience” compared to a traditional page reload?

Using the Fetch API to update specific parts of a page makes user requests feel smooth and instantaneous. Because it avoids a full page refresh, users don't risk losing unsaved progress or input data. Additionally, transferring only the necessary data instead of an entire page significantly reduces bandwidth usage.