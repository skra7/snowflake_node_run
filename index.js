const {getSnowflakeConnection} = require('./infra/snowflake');

const {executeFirst10} = require('./infra/statements');

process.on('uncaughtException', async (err, data) => {
    console.error(data, err.message);
    const snowflakeConnection = getSnowflakeConnection();
    snowflakeConnection.destroy((err,conn) => {
        if (err) {
            console.error('Unable to disconnect: ' + err.message);
          } else {
            console.log('Disconnected connection with id: ' + conn.getId());
          }
    })
});

async function main() {
    const data = await executeFirst10();

    console.log(`I am here as main`);
}

module.exports = {main};