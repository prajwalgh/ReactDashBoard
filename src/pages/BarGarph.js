// import React from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


// const BarGraph = ({ data, orientation = 'vertical' }) => {
//   const isVertical = orientation === 'vertical';

//   return (
//     <ResponsiveContainer width="100%" height={400}>
//       <BarChart
//         data={data}
//         layout={isVertical ? 'vertical' : 'horizontal'}
//         margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         {isVertical ? <XAxis type="number" /> : <XAxis dataKey="name" />}
//         {isVertical ? <YAxis dataKey="name" type="category" /> : <YAxis />}
//         <Tooltip />
//         <Legend />
//         <Bar dataKey="value" fill="#8884d8" />
//       </BarChart>
//     </ResponsiveContainer>
//   );
// };

// export default BarGraph;
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BarGarph = ({ data, orientation = 'vertical' }) => {
  const isVertical = orientation === 'vertical';

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        layout={isVertical ? 'vertical' : 'horizontal'}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        barGap={8}  // Optional: Space between bars in the same group
        barCategoryGap={16}  // Optional: Space between each category
      >
        <CartesianGrid strokeDasharray="3 3" />
        {isVertical ? <XAxis type="number" /> : <XAxis dataKey="name" />}
        {isVertical ? <YAxis dataKey="name" type="category" /> : <YAxis />}
        <Tooltip />
        <Legend />
        <Bar dataKey="goodReview" fill="#4CAF50" name="Good Reviews" stackId="a" />
        <Bar dataKey="badReview" fill="#F44336" name="Bad Reviews" stackId="a"/>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarGarph;
