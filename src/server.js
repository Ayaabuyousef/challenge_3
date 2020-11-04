const express=require('express');
let app= express();
const bodyParser = require('body-parser');

app.use(express.static(__dirname+'/public'))


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// POST /login gets urlencoded bodies
// app.post('/login', urlencodedParser, function (req, res) {
//     res.send('welcome, ' + req.body.username);
//   });


let port=7777;
app.listen(port,()=>{
    console.log(`Example server listening on ${port}`)
});
