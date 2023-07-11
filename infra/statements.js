const {executeStatement} = require('./snowflake');

const executeFirst10 = async () => {
    const sqlText = `select * from json_weather_data limit :1;`
    const binds = [10];
    const finalData = await executeStatement(sqlText,binds);
    return finalData;
}

module.exports = {
    executeFirst10,
}