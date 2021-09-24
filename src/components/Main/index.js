import React from 'react';
import MathJax from "mathjax3-react";

import Advertisement from '../Advertisement';
import GraphicsBox from '../GraphicsBox';

import './styles.css'
import "./decor.css"


       
export default function Main(){

    return (<>
        <main>
        
            <div className="decor">
                <div className="bubble"></div>
                {/* <div className="formula item-1">

                    <div className="wrapper">
                        <MathJax.Formula formula="$$F = G\frac{m_1m_2}{r^2}$$" />
                    </div>
                </div> */}
                
            </div>
            <Advertisement />
            <GraphicsBox />
        </main>
    </>)
}