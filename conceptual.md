### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
  - callbacks
  - promises
  - then/catch
  - async/await
- What is a Promise?
  - A promise is a object that represents the completion or failure of a asynchronous function
  - Three types include: Pending, Fulfilled and Rejected
  - Promises are not immutable when either fulfilled/rejected
  - 
- What are the differences between an async function and a regular function?
  - async function will always return a promise
  - Regular functions execute generally immediately without any pause in the code
  - Async functions typically can be paused in the middle of executions when it reaches a await keyword which then returns a promise and then continues on
  - 
- What is the difference between Node.js and Express.js?
  - Node.js is a runtime environment that allows you to write backend/server side development in JS. It is the building blocks of writing backend code with JS
  - Express.js is a framework that works with Node.js making it simpler and easier to write complex features by simplifying them.  This includes things like routing, middleware support
  
- What is the error-first callback pattern?
  - The first argument passed to the callback function is an error object, where we are able to use that error results to display/manipulate however we like. the function then returns undefined. If there is no error, the error object becomes null, and the function will return the data
  
- What is middleware?
    - middleware functions will have access to the (req, res, next) objects
    - Example: Write your routes in a different file and export them to your main application file 
    - Middleware also occurs (depends on where you put it) everytime a request is made 

- What does the `next` function do?
  - the next function is used to procceed to the next middleware functions
  - when a middleware function is done and wishes to pass control to the next middleware function, it will call next()
  - A nice example with error handling is that if you run into a error, you can pass the next function which skips all middleware functions and goes straight to the first error-handling function

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
  - no error handling, if any of the await functions fails, the entire function will fail
  - fetches data one by one, can be done at the same time to improve performance
  - the username are hardcoded, making the function not reusable and versatile
  

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
