const express = require("express");
const Router = express.Router();
const CourseController = require("../controllers/courses.controller");

/* lets assume there are no request parameters for now */
Router.get("/api/courses", (req, res) => {
  const course = new CourseController(req, res);
  course.getCourse();
});


module.exports = Router;
