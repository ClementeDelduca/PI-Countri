const { Router } = require("express");

const { countryRouterHandler, countryRouterIdHandler } = require("../handlers/country.handlers");

const countryRouter = Router();

countryRouter.get("/", countryRouterHandler);

countryRouter.get("/:id", countryRouterIdHandler);

module.exports = countryRouter;