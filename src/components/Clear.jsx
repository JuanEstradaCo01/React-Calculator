import React from "react";
import "../components-styles/Clear.css"

function Clear (props) {
    return (
        <div className="buttonClear" onClick={props.clearButton}> 
            {props.children}
        </div>
    )
}

export default Clear