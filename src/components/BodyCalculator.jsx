import React from "react"
import "../components-styles/BodyCalculator.css"
import Button from "./Button"
import Screen from "./Screen"
import Clear from "./Clear"
import { useState } from 'react';
import { evaluate } from "mathjs"
import Swal from "sweetalert2"
  
function BodyCalculator () {
    const [input, setInput] = useState("")

    const addInput = value => {
        setInput(input + value)
    }

    const operationResult = () => {
        //Se usa la libreria "Mathjs" para las operaciones matematicas
        if(input){
            const result = setInput(evaluate(input))
            return result
        }else{
            return Swal.fire({
                title: "Operation invalid",
                text: "The operation is invalid, please enter a valid operation",
                icon: "error"
              })
        }
    }

    return (
        <div className="bodyCalculator">
            <div className="setting">
                <div className="file">
                    <Screen input={input}/>
                </div>
                <div className="containerClear">
                    <div className="file clear">
                        <Clear clearButton={ () => setInput("")}>C</Clear>
                    </div>
                </div>
                <div className="file">
                    <Button click={addInput}>7</Button>
                    <Button click={addInput}>8</Button>
                    <Button click={addInput}>9</Button>
                    <Button click={addInput}>/</Button>
                </div>
                <div className="file">
                    <Button click={addInput}>4</Button>
                    <Button click={addInput}>5</Button>
                    <Button click={addInput}>6</Button>
                    <Button click={addInput}>*</Button>
                </div>
                <div className="file">
                    <Button click={addInput}>1</Button>
                    <Button click={addInput}>2</Button>
                    <Button click={addInput}>3</Button>
                    <Button click={addInput}>-</Button>
                </div>
                <div className="file">
                    <Button click={addInput}>0</Button>
                    <Button click={addInput}>.</Button>
                    <Button click={operationResult}>=</Button>
                    <Button click={addInput}>+</Button>
                </div>
            </div>
        </div>
    )
}

export default BodyCalculator