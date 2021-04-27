import React from "react";  

import ReactDOM from "react-dom";  
let output = (
	<span> 
        James is <strong>12</strong> years old 
    </span>
);

const myDiv = document.querySelector("#myDiv");

ReactDOM.render(output, myDiv);