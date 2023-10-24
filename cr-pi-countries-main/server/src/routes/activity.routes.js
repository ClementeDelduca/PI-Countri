const { Router } = require("express");

const { createActivityHandler, activityRouterGetHandler  } = require("../handlers/activity.handlers");

const activityRouter = Router();

activityRouter.post("/", createActivityHandler ); //activityRouterPostHandler

activityRouter.get("/", activityRouterGetHandler);

module.exports = activityRouter;