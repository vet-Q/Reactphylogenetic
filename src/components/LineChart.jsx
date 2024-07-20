import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const LineChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const data = [
            { date: '2021-01-01', value: 10 },
            { date: '2021-01-02', value: 15 },
            { date: '2021-01-03', value: 13 },
            { date: '2021-01-04', value: 18 },
            { date: '2021-01-05', value: 20 },
        ];

        const svg = d3.select(chartRef.current)
            .append("svg")
            .attr("width", "100%")
            .attr("height", 200)
            .attr("viewBox", "0 0 500 200")
            .style("background", "#f4f4f4")
            .style("margin", "50px")
            .style("padding", "10px");

        const x = d3.scaleTime()
            .domain(d3.extent(data, d => new Date(d.date)))
            .range([0, 500]);

        const y = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.value)])
            .range([200, 0]);

        const line = d3.line()
            .x(d => x(new Date(d.date)))
            .y(d => y(d.value));

        svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 1.5)
            .attr("d", line);

        svg.append("g")
            .attr("transform", "translate(0,200)")
            .call(d3.axisBottom(x));

        svg.append("g")
            .call(d3.axisLeft(y));
    }, []);

    return (
        <div ref={chartRef} style={{ width: '100%', height: '400px' }}></div>
    );
};

export default LineChart
