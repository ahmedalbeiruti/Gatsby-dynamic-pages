// import React from "react";

const React = require("react")

module.exports = ({children})=>{
    return(
        <div>
        <h3>
            Hi this is the second component
        </h3>
        <div>
            {children}
        </div>
        </div>
    )
}

// export default SecondComponent