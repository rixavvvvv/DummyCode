const router = require("express").Router();

const controller = require("../controllers/user.controller");

// Health check of the server
router.get("/", controller.att);

router.get("/:id", controller.getUser);
router.get("/", controller.getAllUsers);
router.post("/", controller.createUser);
router.put("/:id", controller.updateUser);
router.delete("/:id", controller.deleteUser)



module.exports = router
