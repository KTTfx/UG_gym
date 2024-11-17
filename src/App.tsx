import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PricingPlans from './components/PricingPlans';
import UserDashboard from './components/UserDashboard';  // Import the UserDashboard component

function App() {
  // State to hold user data
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user data exists in localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/plans" element={<PricingPlans userType="student" />} />
          {/* Pass the user prop to UserDashboard if user is available */}
          <Route path="/dashboard" element={user ? <UserDashboard user={user} /> : <Login setUser={setUser} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
