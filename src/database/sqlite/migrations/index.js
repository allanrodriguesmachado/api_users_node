const sqlConnection = require("../../sqlite")

const createUsers = require("./createUser");

async function migrationRun() {
    const schemas = [
        createUsers
    ].join('');

    sqlConnection().then(db => db.exec(schemas)).catch(error => console.log(error));
}

module.exports = migrationRun;