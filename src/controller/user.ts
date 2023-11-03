import { Context } from "koa";

export const sign = async (ctx: Context) => {
  ctx.response.body = "sign" // todo
}

export const login = async (ctx: Context) => {
  ctx.response.body = "login"; // todo
}
