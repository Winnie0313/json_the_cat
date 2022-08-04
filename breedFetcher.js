const request = require('request');

const args = process.argv[2];

const endPoint = 'https://api.thecatapi.com/v1/breeds/search?q='
const catBreed = args.slice(0,3);
const catBreedEndPoint = endPoint + catBreed;


request(catBreedEndPoint, (error, response, body) => {
  if (error) {
    return console.log('Failed to request details: ', error);
  } 

  // trun string to JSON object
  const data = JSON.parse(body);
  
  const breed = data[0];
  if (breed) {
    console.log(breed.description);
  } else {
    console.log (`failed to fint bread ${catBreed}`);
  }



  //console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
});

