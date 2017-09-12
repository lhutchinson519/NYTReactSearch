// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// Grabs the Routes
var routes = require("./config/routes");

// This code here allows us to render our main component (in this case Form)
ReactDOM.render(routes, document.getElementById("app"));
