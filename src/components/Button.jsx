import React from "react";
import "../components-styles/Button.css"

function Button (props) {
 
    const  isOperator = (value) => {
        if(isNaN(value) && (value !== ".") && (value !== "=")){
            return true
        }else{
            return false
        }
    };

    return (
        //Uso operador ternario para definir si el boton es de tipo operador o tipo numerico y uso una funcion anonima en el onClick
        <button className= {`buttonContainer ${isOperator(props.children) ? "operator" : "notOperator"}`} onClick={ () => props.click(props.children)}>
            {props.children}
        </button>
    )
}

export default Button