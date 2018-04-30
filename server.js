const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();
var port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   var now = new Date().toString();
//
//   var log = `${now}: ${req.method} ${req.url}`;
//
//   console.log(log);
//   fs.appendFile('server.log', log + '\n', (err) => {
//     if (err) {
//       console.log('Unable to append to server.log.');
//     }
//   })
//   next();
// });

app.use((req, res, next) => {
  res.render('maintenance');
});
app.use(express.static(__dirname + "/public"));
hbs.registerPartials(__dirname + "/views/partials")
app.set('view engine', 'hbs');

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

app.get('/', (req, res) => {
  // res.send('<h1>Hello Express!</h1>');
  // res.send({
  //   name: "Thomas",
  //   likes: [
  //     "Coding",
  //     "Business",
  //     "Basketball"
  //   ]
  // });
  res.render('home', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to the Home Page!'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    pageTitle: 'About Page'
  });
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: "Wow, this IS bad!"
  });
});

app.listen(port, () => {
  console.log(`The server has started on port ${port}!`);
});
