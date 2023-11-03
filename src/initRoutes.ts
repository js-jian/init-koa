import Fs from "fs";
import Router from "koa-router";
import { RouterPathEnum } from "./constants";
import { RouterValueObj } from "./interface";

const router = new Router();

function handleUrl(fileMapping: Record<string, Record<RouterPathEnum, RouterValueObj>>) {
  Object.entries(fileMapping).forEach(([fileName, routerData]) => {
    Object.entries(routerData).forEach(([path, { method, controller }]) => {
      switch (method) {
        case "GET":
          router.get(path, controller);
        case "POST":
          router.post(path, controller);
      }
    });
  });
}

export function initRoutes() {
  const path = __dirname + "/router/";
  const files = Fs.readdirSync(path);
  const jsFiles = files.filter(fileName => fileName.endsWith(".js"));

  for (let file of jsFiles) {
    console.log(`Process controller: ${file}...`);
    
    handleUrl(require(path + file));
  }

  return router.routes();
}
