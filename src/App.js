// import React from 'react';
// import { Route, Routes } from 'react-router-dom'; // Import Route and Routes for routing
// import Dashboard from './pages/Dashboard'; // Dashboard page component
// import Claims from './pages/Claims'; // Claims page component
// import NotFound from './pages/NotFound'; // 404 page for unmatched routes
// import Navbar from './components/Navbar'; // Optional: Navbar for navigation (if desired)

// const App = () => {
//   return (
//     <div>
//       {/* Navbar or sidebar can be added for navigation */}
//       <Navbar />
      
//       {/* Define routes */}
//       <Routes>
//         {/* Dashboard route */}
//         <Route path="/" element={<Dashboard />} />
        
//         {/* Claims route */}
//         <Route path="/claims" element={<Claims />} />
        
//         {/* Fallback route for 404 page */}
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Claims from './pages/Claims';
import NotFound from './pages/NotFound';
// import Analytics from './pages/Analytics';
// import Settings from './pages/Settings';
// import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ marginLeft: '200px', padding: '20px', width: '100%' }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/claims" element={<Claims />} />
            {/* <Route path="/reports" element={<Reports />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} /> */}
          </Routes>
        </div>
      </div>
    
  );
};

export default App;
