import React from 'react';

import rd3 from 'react-d3-library';

import './styles.css';
import useD3 from '../../hooks/useD3.js';

function calculateInputData(minInput, maxInput){
    return d3.range(minInput, maxInput, 1);
}




export default function Graphic({formula}){
    const width = 1000,
          height = 400,
          customScale=2;
    const data = useD3((d3, node) => {
        
        
        const data = d3.range(0, 500, 1);
        const svg = d3.select(node)
                .append("svg")
                .attr("width", width)
                .attr("height", height)
                
        const XScaleLabel = d3.scaleLinear()
            .domain([0, d3.max(data)])
            .range([0, width]);
        
        const YScaleLabel = d3.scaleLinear()
            .domain([d3.max(data), 0])
            .range([0, height]);
        
        
        const xAxisLabel = d3.axisTop().scale(XScaleLabel);
        const yAxisLabel = d3.axisRight().scale(YScaleLabel);

        const XScale = d3.scaleLinear()
            .domain([0, d3.max(data)])
            .range([0, width]);

        
        const YScale = d3.scaleLinear()
            .domain([d3.max(data), 0])
            .range([0, height]);

        const xAxis = d3.axisTop().scale(XScale);
        const yAxis = d3.axisRight().scale(YScale);
        
        // svg.append("g")
        //     .attr("transform", "translate(0, 400)")
        //     .call(xAxis)
        // svg.append("g")
        //     .attr("transform", "translate(0,0)")
        //     .call(yAxis)
        
        svg.append("g")
            .attr("transform", "translate(0, 400)")
            .call(xAxisLabel)
        svg.append("g")
            .attr("transform", "translate(0,0)")
            .call(yAxisLabel)
        
            
        const dataSet = [];
        
        data.forEach(number => {
            dataSet.push([number, formula({"x":number})])
        })
        
        svg.append("path")
            .attr("d", d3.line()(dataSet.map(array => {
                array[1] = height - array[1]
                return array
            })))
            .attr("stroke", "var(--royal-blue)")
            .attr("stroke-width", "3px")
    }, formula)
    return (<>
        <article>
            <rd3.Component data={data}/>
        </article>
    </>)
}

