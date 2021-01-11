const express = require('express');
const {saveTree} = require("./Interface");
const {getTree} = require("./Interface");
const app = express();
const Query = require('./classes/Query');
const DB = require('./classes/Db');
const config = require('./classes/config');
const db = new DB(config.db);



app
    .set('view engine', 'html')
    .use(express.urlencoded())
    .use(express.json())
    .route('/mytable')
    .get(getTree)
    .post(saveTree)

app.listen(4444, function(){   // порт 4444 можно указать любой свободный
    console.log('Api start')
})
