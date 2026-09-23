How are you passing data from one then() call to another?

We are passing data by returning a value from the callback function inside the first .then(). When the value is returned it is automatically passed as the argument in the next .then().
