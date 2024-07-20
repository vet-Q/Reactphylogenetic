import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const BarChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const data = [12, 5, 6, 7, 10, 3, 8];
        const svg = d3.select(chartRef.current)
            .append("svg")
            .attr("width", "100%")
            .attr("height", 200)
            .attr("viewBox", "0 0 500 200")
            .style("background", "#f4f4f4")
            .style("margin", "50px")
            .style("padding", "10px");

        const tooltip = d3.select(chartRef.current)
            .append("div")
            .style("position", "absolute")
            .style("background", "#fff")
            .style("padding", "5px")
            .style("border", "1px solid #000")
            .style("border-radius", "5px")
            .style("opacity", 0)
            .style("pointer-events", "none");

        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 70)
            .attr("y", (d) => 200 - d * 20)
            .attr("width", 65)
            .attr("height", (d) => d * 20)
            .attr("fill", "teal")
            .on("mouseover", function (event, d) {
                d3.select(this).attr("fill", "orange");
                tooltip.transition().duration(200).style("opacity", 0.9);
                tooltip.html("Value: " + d)
                    .style("left", (event.pageX + 10) + "px")
                    .style("top", (event.pageY - 15) + "px");
            })
            .on("mouseout", function () {
                d3.select(this).attr("fill", "teal");
                tooltip.transition().duration(500).style("opacity", 0);
            });
    }, []);

    return (
        <div ref={chartRef} style={{ width: '100%', height: '400px' }}></div>
    );
};

export default BarChart;
