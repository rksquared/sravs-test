import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";

// import App from "./components/App";
import Earth from "./components/trainTicket/TrainTicket";

const app = <Earth />;

ReactDOM.render(app, document.getElementById("root"));
