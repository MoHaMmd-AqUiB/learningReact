import React from  "react";
import ReactDOM from "react-dom/client";

const heading=React.createElement("h1",{},"Hello Janeman");
const heading2=<h2> Hello !</h2>
console.log(heading);
console.log(heading2)
const root=ReactDOM.createRoot(document.getElementById("aquib"));
root.render(heading2);