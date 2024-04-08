var express = require("express");
var router = express.Router();

const tasks = require("../Services/tasks");

// GET
router.get("/task", tasks.getTasks);

// Post
router.post("/newTask", tasks.postTask);

//Update
router.patch("/updateTask/:id", tasks.updateTask);

//Delete
router.delete("/removetask/:id", tasks.DeleteTask);

module.exports = router;
