# Broken App Issues
1. ReferenceError: err is not defined
   - The **catch** code is not catching any errors
2. TypeError: Cannot read property 'developers' of undefined
   - The req.body was undefined, due to the app not being set up properly for Express to parse incoming JSON
3. TypeError
   - Removed the async and await from the first map function in the variable result
   - We also turn results which was a array of promises, and use Promise.all() to fulfill those promises before we use the variable out to map them