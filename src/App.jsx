import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Employees from './components/Employees';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed inset-y-0 left-0 z-30 w-64 bg-gray-800 text-white transition duration-300 ease-in-out transform md:relative md:translate-x-0`}
      >
        <div className="flex items-center justify-center h-16 bg-gray-900">
          <span className="text-xl font-semibold">EMS Menu</span>
        </div>
        <nav className="mt-8">
          <Link
            to="/"
            className="block py-2 px-4 text-sm hover:bg-gray-700"
            onClick={() => setSidebarOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            to="/employees"
            className="block py-2 px-4 text-sm hover:bg-gray-700"
            onClick={() => setSidebarOpen(false)}
          >
            Employees
          </Link>
          <Link
            to="/attendance"
            className="block py-2 px-4 text-sm hover:bg-gray-700"
            onClick={() => setSidebarOpen(false)}
          >
            Attendance
          </Link>
          <Link
            to="/leave-requests"
            className="block py-2 px-4 text-sm hover:bg-gray-700"
            onClick={() => setSidebarOpen(false)}
          >
            Leave Requests
          </Link>
          <Link
            to="/reports"
            className="block py-2 px-4 text-sm hover:bg-gray-700"
            onClick={() => setSidebarOpen(false)}
          >
            Reports
          </Link>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-semibold text-gray-900">Employee Management System</h1>
              <button
                onClick={toggleSidebar}
                className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/attendance" element={<h2 className="text-2xl font-bold">Attendance</h2>} />
              <Route path="/leave-requests" element={<h2 className="text-2xl font-bold">Leave Requests</h2>} />
              <Route path="/reports" element={<h2 className="text-2xl font-bold">Reports</h2>} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
