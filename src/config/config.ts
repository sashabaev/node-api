import * as dotenv from "dotenv";
dotenv.config();

export default {
  APP: process.env.APP || "development",
  PORT: process.env.PORT || "3200",

  DB_DIALECT: process.env.DB_DIALECT || "mongo",
  DB_HOST:
    process.env.DB_HOST ||
    "mongodb+srv://sashabaev:Qwerty@123@cluster0-fxp9n.mongodb.net/test",
    //"mongodb+srv://sa:sapassword@cluster0-vkwgu.mongodb.net/test?retryWrites=true",
  DB_NAME: process.env.DB_NAME || "test",
  DB_PASSWORD: process.env.DB_PASSWORD || "Qwerty@123",
  DB_PORT: process.env.DB_PORT || "27017",
  DB_USER: process.env.DB_USER || "root",

  JWT_ENCRYPTION: process.env.JWT_ENCRYPTION || "jwt_please_change",
  JWT_EXPIRATION: process.env.JWT_EXPIRATION || "1h",
  SALT_ROUNDS: process.env.SALT_ROUNDS || 10
};
