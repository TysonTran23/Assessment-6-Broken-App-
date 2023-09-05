//Import fs module
const fs = require("fs");
const axios = require("axios");

//Async function that grabs an array of URL's and creates GET request to each indivdual URL
//We write to a file using the URL hostname
//Added error handling to the function
async function getURLs(urlArray) {
  for (let url of urlArray) {
    let urlObj = new URL(url);
    let hostname = urlObj.hostname;
    try {
      let response = await axios.get(url);
      fs.writeFile(`${hostname}.html`, response.data, (err) => {
        if (err) {
          console.log(`Couldn't write to ${hostname}: `, err);
        } else {
          console.log(`Wrote to ${hostname}`);
        }
      });
    } catch (err) {
      console.log(`Couldn't download ${url} `, err);
    }
  }
}

//Read the files
fs.readFile("urls.txt", "utf8", function (err, data) {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  let dataSplit = data.split("\n");
  getURLs(dataSplit);
});
