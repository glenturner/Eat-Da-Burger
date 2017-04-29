var express = require("express");
var router = express.Router();

//Read route
router.get("/", function(req, res) {
    // connection.query("SELECT * FROM burgers;", function(err, data) {
    //     if (err) {
    //         throw err;
    //     }
    //
    //     res.render("index", { eat: data });
    //
    // });
});

//Create Route
router.post("/", function(req, res) {
    // connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.plan], function(err, result) {
    //     if (err) {
    //         throw err;
    //     }
    //
    //     res.redirect("/");
    // });
});

//Update Route
router.put("/", function(req, res) {

    // connection.query("UPDATE plans SET plan = ? WHERE id = ?", [
    //     req.body.plan, req.body.id
    // ], function(err, result) {
    //     if (err) {
    //         throw err;
    //     }
    //
    //     res.redirect("/");
    // });
});

//Delete Route
router.delete("/:id", function(req, res) {
    // connection.query("DELETE FROM burger_name WHERE id = ?", [req.params.id], function(err, result) {
    //     if (err) {
    //         throw err;
    //     }
    //
    //     res.redirect("/");
    // });
});

module.exports = router;