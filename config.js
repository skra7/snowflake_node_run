
require('dotenv').config();

const config = {
    snowflakeconfig : {
    account: process.env.SNOWFLAKE_ACCOUNT,
    username : process.env.SNOWFLAKE_USERNAME,
    password: process.env.SNOWFLAKE_PASSWORD,
    warehouse: process.env.SNOWFLAKE_WAREHOUSE,
    database: process.env.SNOWFLAKE_DATABASE,
    schema: process.env.SNOWFLAKE_SCHEMA,
    }
};

module.exports = config;