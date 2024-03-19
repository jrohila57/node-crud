import { Sequelize } from "sequelize";
import { environment } from "./env";

const config = {
  database: environment.PGDATABASE,
  username: environment.PGUSER,
  password: environment.PGPASSWORD,
  host: environment.PGHOST,
  port: Number(environment.PGPORT),
  
};

const { database, password, username, host, port } = config;

const db = new Sequelize(database, username, password, {
  dialect: "postgres",
  host,
  port,
});

export default db;
