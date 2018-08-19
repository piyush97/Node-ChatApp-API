
const request = require('superagent');

request
  .get('https://slika.herokuapp.com/')
  .end((err, res) => {
    console.log(res.body.notes);
  });