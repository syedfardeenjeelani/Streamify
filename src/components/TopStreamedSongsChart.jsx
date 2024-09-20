import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TopStreamedSongsChart = ({ data }) => {
  const chartData = {
    labels: data.map(song => song.title),
    datasets: [
      {
        label: 'Streams',
        data: data.map(song => song.streams),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Top 5 Streamed Songs',
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default TopStreamedSongsChart;