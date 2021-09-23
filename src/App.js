import React, { useEffect, useState } from 'react';
import MathJax from "mathjax3-react";

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


import "./index.css";

export default function App(){
    return (
        <>
            <MathJax.Provider>
                <Header />
                <Main />
                <Footer />
            </MathJax.Provider>
        </>
    )
}