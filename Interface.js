const DB = require('./classes/Db');
const Query = require('./classes/Query');
const config = require('./classes/config');
const db = new DB(config.db);
const fs = require("fs");


const  getTree = async (request, response) => {
    
    const item = await Query.getMyTable;
    console.log(item);
    
    fs.readFile("./views/mytable.html", "utf-8", (error, data) => {

        let htmlData = '';
        Object.values(item).forEach(item => {
            console.log('stepstep');
            htmlData += `<li>${item.name} ${item.lastname} ${item.birthday} ${item.biletnum}</li>`
        } )
        let message = "Введите данные студента";
        let header = "Я думаю это попытка микросервиса";
        data = data.replace("{header}", header)
                   .replace("{message}", message)
                   .replace("{selectResult}", htmlData);
        response
            .status(200)
            .end(data);
    })
}


const saveTree = async (request, response) => {
   console.log(request.body);
   const data = JSON.stringify(request.body);
   console.log('Step1');
   console.log(`insert into mytable (name, lastname, birthday, biletnum) values (\'${request.body.name}\',\'${request.body.lastname}\',to_date(\'${request.body.birthday}\','DD.MM.YYYY),\'${request.body.biletnum}\');`);
   //const res = await db.insert(`insert into mytable (name, lastname, birthday, biletnum) values (\'${request.body.name}\',\'${request.body.lastname}\',\'${request.body.birthday}\',\'${request.body.biletnum}\');`);
/*закоменчено, что бы просто тестить, а не отправлять каждый раз в базу рандомные наборы в форме*/
    
    response
       .status(200)
       .json({name:'Great'});

}



module.exports = {
    getTree,
    saveTree
}
