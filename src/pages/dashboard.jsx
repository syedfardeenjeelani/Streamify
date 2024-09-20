// src/pages/Dashboard.jsx
import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import KeyMetrics from '../components/KeyMetrics';
import UserGrowthChart from '../components/userGrowthChart';
import RevenueDistributionChart from '../components/RevenueDistributionChart';
import TopStreamedSongsChart from '../components/TopStreamedSongsChart';
import DataTable from '../components/DataTables';

const Dashboard = () => {
  const data = useContext(DataContext);

  if (!data) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-gray-400 text-center text-white p-6">
        <h1 className="text-3xl font-bold">Streamify Analytics Dashboard</h1>
      </header>

      <main className="flex-grow p-6 md:p-8 lg:p-10">
        <div className="max-w-7xl mx-auto">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Key Metrics</h2>
            <KeyMetrics {...data.keyMetrics} />
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">User Growth</h2>
            <div className="bg-white p-4 rounded-lg shadow">
              <UserGrowthChart data={data.userGrowth} />
            </div>
          </section>

          <div className="flex flex-col lg:items-center lg:flex-row gap-8 mb-8">
            <section className="flex-1">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Revenue Distribution</h2>
              <div className="bg-white p-4 rounded-lg shadow">
                <RevenueDistributionChart data={data.revenueDistribution} />
              </div>
            </section>
            <section className="flex-1">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Top Streamed Songs</h2>
              <div className="bg-white p-4 rounded-lg shadow">
                <TopStreamedSongsChart data={data.topStreamedSongs} />
              </div>
            </section>
          </div>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Recent Streams</h2>
            <div className="bg-white p-4 rounded-lg shadow overflow-x-auto">
              <DataTable data={data.recentStreams} />
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-gray-200 p-4 text-center text-gray-600">
        © 2024 Streamify. All rights reserved.
      </footer>
    </div>
  );
};

export default Dashboard;