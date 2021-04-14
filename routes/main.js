const controllers = require("../controllers/conversionControllers")();

module.exports = (app) => {

    app.post("/uppercase", controllers.uppercase);
    
    app.post("/lowercase", controllers.lowercase);
    
    app.post("/camelCase", controllers.camelCase);

    return app;
}
