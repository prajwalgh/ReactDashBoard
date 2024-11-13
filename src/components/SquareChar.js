// ProductWiseClaimDistribution.js
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const ProductWiseClaimDistribution = ({ data, squareSize = 20, gap = 5 }) => {
  const svgRef = useRef();

  useEffect(() => {
    // Clear any previous elements in the SVG
    d3.select(svgRef.current).selectAll('*').remove();

    // Calculate the total claims and percentages for each product
    const totalClaims = d3.sum(data, d => d.claims);
    const colorScale = d3.scaleOrdinal(d3.schemeTableau10); // Use a color scheme for differentiation

    // Add cumulative percentages
    const dataWithPercentages = data.map(d => ({
      ...d,
      percentage: (d.claims / totalClaims) * 100,
      squares: Math.round((d.claims / totalClaims) * 100), // number of squares per product based on percentage
    }));

    // Flatten data to get squares for each product
    const squaresData = [];
    dataWithPercentages.forEach((product, index) => {
      for (let i = 0; i < product.squares; i++) {
        squaresData.push({ color: colorScale(index), product: product.name });
      }
    });

    // Determine grid dimensions
    const columns = Math.ceil(Math.sqrt(squaresData.length));
    const rows = Math.ceil(squaresData.length / columns);

    // Define SVG container
    const svg = d3.select(svgRef.current)
      .attr('width', columns * (squareSize + gap))
      .attr('height', rows * (squareSize + gap));

    // Draw squares
    svg.selectAll('rect')
      .data(squaresData)
      .enter()
      .append('rect')
      .attr('width', squareSize)
      .attr('height', squareSize)
      .attr('fill', d => d.color)
      .attr('x', (_, i) => (i % columns) * (squareSize + gap))
      .attr('y', (_, i) => Math.floor(i / columns) * (squareSize + gap))
      .append("title")
      .text(d => `${d.product}`); // Tooltip to show product name on hover

  }, [data, squareSize, gap]);

  return <svg ref={svgRef}></svg>;
};

export default ProductWiseClaimDistribution;
