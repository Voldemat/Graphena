import React, { useEffect, useState } from 'react';

import './styles.css'
export default function Header(){
    const [headerScrollTheme, setHeaderScrollTheme] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", event => {
            if (window.pageYOffset <= 60){
                setHeaderScrollTheme(false);

                // if too small offset scroll to top
                if(window.pageYOffset <= 20){
                    window.scroll(0,0);
                }
            }
            else{
                setHeaderScrollTheme(true);
            }
        })
    }, [])
    return (<>
        <header className={headerScrollTheme ? "scroll" : ""}>
            <div className="logo">
                Graphena
            </div>
            <nav>
                <a>Documentation</a>
                <a>API</a>
                <a>About</a>
            </nav>
        </header>
    </>)
}