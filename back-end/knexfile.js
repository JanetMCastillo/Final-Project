/**
 * Knex configuration file.
 *
 * You will not need to make changes to this file.
 */

require('dotenv').config();
const path = require("path");

const {
  DATABASE_URL="postgres://wnblgbji:gZsM6d3Wq4WYhYYyzwWGPfj-pDCA2zWi@bubble.db.elephantsql.com/wnblgbji",
  DATABASE_URL_DEVELOPMENT= "postgres://lxfbvwmt:crVPvOfv0kc0Ae4wwdefXImelmq4D7w0@bubble.db.elephantsql.com/lxfbvwmt",
  DATABASE_URL_TEST="postgres://aanmwkaf:PyJhqQzjcnXP7OTc2v-Ve5HuvAbofUa6@bubble.db.elephantsql.com/aanmwkaf",
  DATABASE_URL_PREVIEW="postgres://wcqsxyig:9VIiQmawdEiiyM-HnYV4qI7BhIyJRiBy@bubble.db.elephantsql.com/wcqsxyig",
  DEBUG,
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_DEVELOPMENT,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  test: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_TEST,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  preview: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_PREVIEW,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  production: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
};
