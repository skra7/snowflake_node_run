const snowflake = require('snowflake-sdk');
const {snowflakeconfig} = require('../config');
const snowflakeConnection = snowflake.createConnection({
  ...snowflakeconfig
});

 function executeStatement(stmt,params) {
    return new Promise((resolve,reject) => {
        const snowflakeConn = getSnowflakeConnection();
    snowflakeConn.execute({
          sqlText: stmt,
          binds: params,
          complete: (err,stmt,rows) => {
            if(err) {
                reject(err);
            }
            resolve(rows);
          }
        });
    })
    
}

function getSnowflakeConnection() {
    return snowflakeConnection;
}

module.exports = {
    getSnowflakeConnection,
    executeStatement
};