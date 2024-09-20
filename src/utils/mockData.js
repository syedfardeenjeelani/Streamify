// src/utils/mockData.js
import { subMonths, format } from 'date-fns';

export const generateMockData = () => {
  const currentDate = new Date();
  

   // func to  generateMonthlyData


   
  const generateMonthlyData = (months) => {
    return Array.from({ length: months }, (_, i) => ({
      date: format(subMonths(currentDate, i), 'MMM yyyy'),
      totalUsers: Math.floor(Math.random() * 10000) + 50000,
      activeUsers: Math.floor(Math.random() * 8000) + 40000,
    })).reverse();
  };


    // func to  generateTopSongs

  const generateTopSongs = () => {
    return Array.from({ length: 5 }, (_, i) => ({
      title: `Song ${i + 1}`,
      streams: Math.floor(Math.random() * 500000) + 100000,
    })).sort((a, b) => b.streams - a.streams);
  };


  // func to  generateStreamData
  const generateStreamData = () => {
    return Array.from({ length: 100 }, (_, i) => ({
      id: i + 1,
      songName: `Song ${Math.floor(Math.random() * 20) + 1}`,
      artist: `Artist ${Math.floor(Math.random() * 10) + 1}`,
      dateStreamed: format(subMonths(currentDate, Math.floor(Math.random() * 12)), 'yyyy-MM-dd'),
      streamCount: Math.floor(Math.random() * 1000) + 1,
      userId: `user${Math.floor(Math.random() * 1000) + 1}`,
    }));
  };

  const monthlyData = generateMonthlyData(12);
  const topSongs = generateTopSongs();
  const streamData = generateStreamData();

  return {
    keyMetrics: {
      totalUsers: monthlyData[11].totalUsers,
      activeUsers: monthlyData[11].activeUsers,
      totalStreams: streamData.reduce((sum, stream) => sum + stream.streamCount, 0),
      revenue: Math.floor(Math.random() * 1000000) + 500000,
      topArtist: `Artist ${Math.floor(Math.random() * 10) + 1}`,
    },
    userGrowth: monthlyData,
    revenueDistribution: [
      { source: 'Subscriptions', amount: Math.floor(Math.random() * 800000) + 200000 },
      { source: 'Ads', amount: Math.floor(Math.random() * 200000) + 50000 },
    ],
    topStreamedSongs: topSongs,
    recentStreams: streamData,
  };
};