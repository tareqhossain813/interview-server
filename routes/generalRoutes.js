const express = require("express");
const router = express.Router();
const {
    getUserData,
    createUser,
    updateUser,
    deleteUser,
} = require("../controllers/generalControllers.js");

const { getSectors } = require("../controllers/sector.js");


router.route("/sectors").get(getSectors);

router
    .route("/")
    .get(getUserData)
    .post(createUser)
    .patch(updateUser)
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;
