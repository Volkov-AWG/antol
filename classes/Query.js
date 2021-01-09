const DB = require('./Db');
const config = require('./config');
const db = new DB(config.db);



const getStud = async (request, response) => {
    const res = await db.select(`Select * from studentsdata`);
    console.log(res);
    response.status(200).json(res);
}
const getMyTable = async (request, response) => {
    const res = await db.select(`Select * from mytable`);
    //console.log(res);
    response.json(res);
}
module.exports = {
    getStud,
    getMyTable
}
