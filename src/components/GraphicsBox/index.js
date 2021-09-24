import React, { useEffect, useRef, useState } from 'react';
import * as math from 'mathjs';

import Graphic from '../Graphic';

import "./styles.css"

function findAllEnglishCharacters(string){
    return string.trim().replace(" ", "").split("").filter(letter => /^[a-zA-Z]+$/.test(letter))
}
function findAllVariables(string){
    return Array.from(new Set( findAllEnglishCharacters(string) ))
}
function parseFormula(textFormula){
    textFormula = textFormula.trim().replace(" ", "");
    
    if (textFormula.search("=") === -1){
        throw new Error(`Parsing error: '=' not defined(Formula = ${textFormula})`)
    }
    const rightPartFormula = textFormula.split("=")[1];
    const variables = findAllVariables(rightPartFormula);
    if (variables.length > 1){
        throw new Error(`Parsing error: too many variables(${variables})`)
    }
    const execFormula = math.compile(rightPartFormula)
    return (scope) => execFormula.evaluate(scope);
}
export default function GraphicsBox(){
    const inputRef = useRef();

    const [formula, setFormula] = useState(() => parseFormula("y=2x"));
    const [error, setError] = useState(null);
    
    useEffect(() => {
        console.log(error)
    }, [error])

    function submitFormula(clickEvent){
        try{
            const formula = parseFormula(inputRef.current.value);
            setFormula(() => formula);
        }
        catch(error){
            setError(error);
        }
    }
    return (<>
        <section className="graphic-box">
            <h1>Draw 2D Graphic</h1>
            <Graphic formula={formula} />

            <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" name="formula" ref={inputRef} placeholder="y=2x"/>
                <input type="submit" value="Draw" onClick={submitFormula}/>
            </form>
        </section>
    </>)
}