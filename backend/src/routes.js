const express = require("express");
const multer = require("multer");

const uploadConfig = require("./config/upload");
const SessionController = require("./app/controllers/SessionController");
const SpotController = require("./app/controllers/SpotController");
const DashboardController = require("./app/controllers/DashboardController");
const BookingsController = require("./app/controllers/BookingController");

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post("/sessions", SessionController.store);

routes.post("/spots", upload.single("thumbnail"), SpotController.store);
routes.get("/spots", SpotController.index);

routes.get("/dashboard", DashboardController.show);

routes.post("/spots/:id/bookings", BookingsController.store);

module.exports = routes;
