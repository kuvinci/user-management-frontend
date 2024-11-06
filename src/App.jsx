import {useState} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import AdminPage from './pages/AdminPage';
import Unauthorized from './pages/Unauthorized';
import PrivateRoute from './components/PrivateRoute';
import RoleRoute from './components/RoleRoute';
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <RoleRoute requiredRole="admin">
                <AdminPage />
              </RoleRoute>
            }
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
