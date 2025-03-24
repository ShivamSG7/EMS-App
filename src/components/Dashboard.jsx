import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MetricCard = ({ title, value, icon, bgColor, onClick }) => (
  <div 
    className={`${bgColor} rounded-lg shadow-md p-6 cursor-pointer transition-transform hover:scale-105`}
    onClick={onClick}
  >
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600 uppercase">{title}</p>
        <p className="mt-1 text-3xl font-semibold text-gray-900">{value}</p>
      </div>
      <div className={`p-3 rounded-full bg-opacity-30 ${bgColor}`}>
        {icon}
      </div>
    </div>
  </div>
);

const Dashboard = () => {
  const [metrics, setMetrics] = useState({
    totalEmployees: 0,
    attendance: 0,
    leaveRequests: 0,
    reports: 0,
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from local storage
    const storedMetrics = localStorage.getItem('emsMetrics');
    if (storedMetrics) {
      setMetrics(JSON.parse(storedMetrics));
    } else {
      // Set default values if no data in local storage
      const defaultMetrics = {
        totalEmployees: 150,
        attendance: 142,
        leaveRequests: 5,
        reports: 10,
      };
      setMetrics(defaultMetrics);
      localStorage.setItem('emsMetrics', JSON.stringify(defaultMetrics));
    }
  }, []);

  const handleCardClick = (module) => {
    navigate(`/${module}`);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Employees"
          value={metrics.totalEmployees}
          icon={<svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
          bgColor="bg-blue-100"
          onClick={() => handleCardClick('employees')}
        />
        <MetricCard
          title="Attendance Today"
          value={metrics.attendance}
          icon={<svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>}
          bgColor="bg-green-100"
          onClick={() => handleCardClick('attendance')}
        />
        <MetricCard
          title="Leave Requests"
          value={metrics.leaveRequests}
          icon={<svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
          bgColor="bg-yellow-100"
          onClick={() => handleCardClick('leave-requests')}
        />
        <MetricCard
          title="Reports"
          value={metrics.reports}
          icon={<svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>}
          bgColor="bg-purple-100"
          onClick={() => handleCardClick('reports')}
        />
      </div>
    </div>
  );
};

export default Dashboard;
