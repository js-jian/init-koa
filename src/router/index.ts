import * as Controller from "../controller";
import { RouterPathEnum } from "../constants";
import { RouterValueObj } from "../interface";

export const router: Record<RouterPathEnum, RouterValueObj> = {
  [RouterPathEnum.SIGN]: {
    method: "POST",
    controller: Controller.sign,
  },
  [RouterPathEnum.LOGIN]: {
    method: "POST",
    controller: Controller.login,
  },
}
