import React from 'react';
import ClaimPieChart from '../components/ClaimPieChart';
const Claims = () => {
  return (
    <div>
      <h1>Claims Page</h1>
      <p>Manage your warranty claims here.</p>
      <ClaimPieChart/>
      {/* Your claims content here */}
    </div>
  );
};

export default Claims;
