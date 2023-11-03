import Koa from "koa";
import Session from 'koa-session-minimal';
import MysqlStore from 'koa-mysql-session';
import BodyParser from 'koa-bodyparser';
import { config } from "./config";
import { initRoutes } from "./initRoutes";
import { SESSION_KEY } from "./constants";

const app: Koa = new Koa();

// session存储配置
const sessionMysqlConfig= {
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  host: config.database.HOST,
};

// 配置session中间件
app.use(Session({
  key: SESSION_KEY,
  store: new MysqlStore(sessionMysqlConfig)
}));

app.use(initRoutes());
app.use(BodyParser());

app.listen(config.port);

console.log(`Server running on http://localhost:${config.port}`);
