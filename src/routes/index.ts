import { Router } from "express";

const healthRouter: Router = Router();

healthRouter.get("/", (req, res) => {
  res.send("Hello World!");
});

export default {
  health: healthRouter,
};
