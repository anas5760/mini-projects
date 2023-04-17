const request = require('request');
const cheerio = require('cheerio');

const url = 'https://facebook.com';

request(url, (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
    const title = $('title').text();
    const body = $('body').html();
    console.log('Title:', title);
    console.log('Body:', body);
  } else {
    console.error('Error:', error);
  }
});
