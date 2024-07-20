import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { phylotree } from 'phylotree';

const PhyloTree = () => {
    const treeContainerRef = useRef(null);

    useEffect(() => {
        const newickString = "(A:0.1,B:0.2,(C:0.3,D:0.4):0.5)";
        const tree = new phylotree(newickString);

        const container = d3.select(treeContainerRef.current);
        container.html(''); // Clear previous content

        tree.render({
            container: treeContainerRef.current, // Ensure correct container is passed
            layout: 'rectangular',
            align_tips: true,
            branches: 'step'
        });

        d3.select(treeContainerRef.current)
            .selectAll("text")
            .style("font-size", "10px");
    }, []);

    return (
        <div ref={treeContainerRef} style={{ width: '100%', height: '300px' }}></div>
    );
};

export default PhyloTree;
