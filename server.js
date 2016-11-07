var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));

var articles={
 {
     article one;
    title: 'articleone | Kalluri sai kalyan',
    heading: 'Article one',
    date: 'Nov5,2016'
    content:
    <p>
    This is content for my first article. This is content for my first web app
}
   article two:{
   {
        title: 'article two| Kalluri sai kalyan',
    heading: 'Article two',
    date: 'Nov5,2016'
    content:
    <p>
    This is content for my second article. This is content for my first web app
    }
    article three:{
        title: 'articlethree | Kalluri sai kalyan',
    heading: 'Article three',
    date: 'Nov5,2016'
    content:
    <p> This is content for my third article. This is content for my first web app 
    },
          }
function createTemplate(data){
    var title= data.title;
    var date = data.date;
    var heading= data.heading;
    var content= data.content;
 var html template=
<html>
<head>
<title>
${title}
</title>
<meta name="viewpoint" content="width=device-width,Initial-Scale=1"/>
        <link href="/ui/style.css" rel="style sheet"/>
        </head>
        <body>
        <divclass="container">
        </div>
         <a> href="/">Home</a>
         </div>
         <hr/>
         <h3>
         ${heading}
         </h3>
         <div>
         ${date}
         </div>
         <div>
         ${content}
         </div>
         </body>
         </html>
         ;
         return html template
}
app.get('/articleone', function(req,res){
    res.send(createtemplate(articleone);
});

app.get('/articletwo', function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/articlethree', function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
