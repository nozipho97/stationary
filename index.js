// const http = require('http');

// //port

// const port = parseInt(process.env.port)
//     || 4000;

// //web server

// http.createServer((req, res) => {
//             //a viriable to create a url
//     const currUrl = req.url;
//     console.log('Url: ', currUrl, '\nMethod: ', req.method);
//             //what kind of content will be on your browser:specify it
//     res.writeHead(200, {'Content-type': 'text/html'});
//     switch(currUrl) {
//         case '/':
//             res.end('You are home');
//         break
//         case '/about':
//             res.end('About me page');
//         break
//         case '/data':
//             res.end('Page data');
//         break
//         default:
//             res.end('Page / content was not found');
//     }
// }).listen(port, () => {
//     console.log(`Server is running at port ${port}`);
// })

const express = require("express");
//port
const port = parseInt(process.env.port) || 3000;
//express app
const app = express();
//router
const route = express.Router();

app.use(route);
//Home or /
route.get("/", (req, res) => {
  res.status(200).send("Well done");
});


app.listen(port, () => console.log(`Server is running at port ${port}`));
