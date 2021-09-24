import { useEffect, useState } from 'react'

import * as d3 from 'd3';



export default function useD3(callback, depend){
    const [d3Node, setD3Node] = useState("");
    
    const initialNode = document.createElement("div");
    callback(d3, initialNode);
    
    useEffect(() => {
        setD3Node(initialNode);
    }, depend)

    return d3Node;
}