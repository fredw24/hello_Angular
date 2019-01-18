//require controller so we have access to our logic
const controller = require("./controller");

//this module.exports is a function so we can pass the 'app' to routes.js
module.exports = function(app){
    app.get("/task", controller.users)
    app.get("/task/:id", controller.getone)
    app.post("/task/create", controller.create)
    app.put("/task/update/:id", controller.update)
    app.delete("/task/delete/:id", controller.delete)
}