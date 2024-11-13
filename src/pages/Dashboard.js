// import React from 'react';
// import BarGarph from './BarGarph';
// const sampleData = [
//   { name: 'Product A', goodReview: 400, badReview: 150 },
//   { name: 'Product B', goodReview: 300, badReview: 100 },
//   { name: 'Product C', goodReview: 500, badReview: 200 },
//   { name: 'Product D', goodReview: 200, badReview: 120 },
// ];
// // 
// const Dashboard = () => {
//   return (

//     <div style={{ padding: '20px' }}>

//     <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
//       <h2>Vertical Bar Chart</h2>
//       <BarGarph data={sampleData} orientation="vertical" />

//       <h2>Horizontal Bar Chart</h2>
//       <BarGarph data={sampleData} orientation="horizontal" />
//     </div>
//     </div>
    
//   );
// };

// export default Dashboard;
// import React from 'react';
// import BarGarph from './BarGarph';
// import ProductWiseClaimDistribution from '../components/SquareChar';
// const sampleData1 = [
//   { name: 'Product A', goodReview: 400, badReview: 150 },
//   { name: 'Product B', goodReview: 300, badReview: 100 },
//   { name: 'Product C', goodReview: 500, badReview: 200 },
//   { name: 'Product D', goodReview: 200, badReview: 120 },
// ];
//   const productData = [
//     { name: 'Product 1', claims: 500 },
//     { name: 'Product 2', claims: 300 },
//     { name: 'Product 3', claims: 200 },  
//     { name: 'Product 4', claims: 200 },
//     { name: 'Product 5', claims: 2 },
//     { name: 'Product 6', claims: 241 },
//     { name: 'Product 7', claims: 21 },
  
  
//   ];
// const sampleData2 = [
//   { name: 'Service A', goodReview: 300, badReview: 130 },
//   { name: 'Service B', goodReview: 350, badReview: 120 },
//   { name: 'Service C', goodReview: 400, badReview: 190 },
//   { name: 'Service D', goodReview: 250, badReview: 110 },
// ];

// const Dashboard = () => {
//   return (
//     <div style={{
//       display: 'grid',
//       gridTemplateRows: '1fr 1fr',
//       gridTemplateColumns: '1fr 1fr 1fr',
//       gap: '20px',
//       padding: '20px'
//     }}>
//       {/* First Row with 2 Columns */}
//       <div style={{ gridColumn: '1 / 2' }}>
//         <BarGarph data={sampleData1} orientation="vertical" width="100%" height={300} />
//       </div>
//       <div style={{ gridColumn: '2 / 3' }}>
//         <BarGarph data={sampleData2} orientation="horizontal" width="100%" height={300} />
//       </div>

//       {/* Second Row with 3 Columns */}
//       <div style={{ gridColumn: '1 / 2' }}>
//         <BarGarph data={sampleData1} orientation="vertical" width="100%" height={300} />
//       </div>
//       <div style={{ gridColumn: '2 / 3' }}>
//         <BarGarph data={sampleData2} orientation="horizontal" width="100%" height={300} />
//       </div>
//       <div style={{ gridColumn: '3 / 4' }}>
      
//           <div >
//       <h2>Product Wise Claim Distribution</h2>
//       <ProductWiseClaimDistribution data={productData} squareSize={20} gap={5} />
//     </div> 
//         {/* <BarGarph data={sampleData1} orientation="horizontal" width="100%" height={300} /> */}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import React, { useState } from 'react';
import BarGarph from './BarGarph';
import ProductWiseClaimDistribution from '../components/SquareChar';

const sampleData1 = [
  { name: 'Product A', goodReview: 400, badReview: 150 },
  { name: 'Product B', goodReview: 300, badReview: 100 },
  { name: 'Product C', goodReview: 500, badReview: 200 },
  { name: 'Product D', goodReview: 200, badReview: 120 },
];

const productData = [
  { name: 'Product 1', claims: 500 },
  { name: 'Product 2', claims: 300 },
  { name: 'Product 3', claims: 200 },
  { name: 'Product 4', claims: 200 },
  { name: 'Product 5', claims: 2 },
  { name: 'Product 6', claims: 241 },
  { name: 'Product 7', claims: 21 },
];

const sampleData2 = [
  { name: 'Service A', goodReview: 300, badReview: 130 },
  { name: 'Service B', goodReview: 350, badReview: 120 },
  { name: 'Service C', goodReview: 400, badReview: 190 },
  { name: 'Service D', goodReview: 250, badReview: 110 },
];

const Dashboard = () => {
  // State to toggle between analytics views
  const [view, setView] = useState('claimAnalytics'); // Default to Claim Analytics

  return (
    <div style={{ padding: '20px' }}>
      {/* Buttons to toggle between views */}
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setView('claimAnalytics')}>Claim Analytics</button>
        <button onClick={() => setView('fraudRiskAnalytics')}>Fraud Risk Analytics</button>
      </div>

      {/* Render the selected view */}
      {view === 'claimAnalytics' && (
        <div style={{
          display: 'grid',
          gridTemplateRows: '1fr 1fr',
          gridTemplateColumns: '1fr 1fr',
          gap: '20px',
          padding: '20px'
        }}>
          {/* First Row with 2 Columns */}
          <div style={{ gridColumn: '1 / 2' }}>
            <BarGarph data={sampleData1} orientation="vertical" width="100%" height={300} />
          </div>
          <div style={{ gridColumn: '2 / 3' }}>
            <BarGarph data={sampleData2} orientation="horizontal" width="100%" height={300} />
          </div>

          {/* Second Row with 3 Columns */}
          <div style={{ gridColumn: '1 / 2' }}>
            <BarGarph data={sampleData1} orientation="vertical" width="100%" height={300} />
          </div>
          <div style={{ gridColumn: '2 / 3' }}>
            <BarGarph data={sampleData2} orientation="horizontal" width="100%" height={300} />
          </div>
          <div style={{ gridColumn: '3 / 4' }}>
            <h2>Product Wise Claim Distribution</h2>
            <ProductWiseClaimDistribution data={productData} squareSize={20} gap={5} />
          </div>
        </div>
      )}

      {view === 'fraudRiskAnalytics' && (
        <div style={{
          display: 'grid',
          gridTemplateRows: '1fr 1fr',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '20px',
          padding: '20px'
        }}>
          {/* Fraud Risk Analytics View */}
          <div style={{ gridColumn: '1 / 2' }}>
            <BarGarph data={sampleData1} orientation="horizontal" width="100%" height={300} />
          </div>
          <div style={{ gridColumn: '2 / 3' }}>
            <BarGarph data={sampleData2} orientation="vertical" width="100%" height={300} />
          </div>
          <div style={{ gridColumn: '3 / 4' }}>
            <h2>Fraud Risk Analytics Overview</h2>
            <ProductWiseClaimDistribution data={productData} squareSize={20} gap={5} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
