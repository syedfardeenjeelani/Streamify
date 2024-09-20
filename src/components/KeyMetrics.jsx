import React from 'react';

const KeyMetrics = ({ totalUsers, activeUsers, totalStreams, revenue, topArtist }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Total Users</h3>
        <p className="text-2xl font-bold">{totalUsers.toLocaleString()}</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Active Users</h3>
        <p className="text-2xl font-bold">{activeUsers.toLocaleString()}</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Total Streams</h3>
        <p className="text-2xl font-bold">{totalStreams.toLocaleString()}</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Revenue</h3>
        <p className="text-2xl font-bold">${revenue.toLocaleString()}</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Top Artist</h3>
        <p className="text-2xl font-bold">{topArtist}</p>
      </div>
    </div>
  );
};

export default KeyMetrics;
