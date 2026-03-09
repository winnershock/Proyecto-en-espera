const express = require("express");
const router = express.router();
const usercontroller = requiere("../controllers/userController");

router.post("/empresa", userController.registrarEmpresa);
router.post("/indepemdiente", userController.registrarIndependiente);
router.post("/grupo-sena", userController.registrarGupo);
router.post("/admin/login", userController.loginAdmin);

module.exports = router;