import React, { useState, useMemo } from 'react';

const DataTable = ({ data }) => {
  const [sortColumn, setSortColumn] = useState('dateStreamed');
  const [sortDirection, setSortDirection] = useState('desc');
  const [filter, setFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items to display per page

  // Sorting function
  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  // Memoized sorted and filtered data
  const processedData = useMemo(() => {
    // Sort the data
    const sortedData = [...data].sort((a, b) => {
      if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1;
      if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });

    // Filter the data
    return sortedData.filter(
      item =>
        item.songName.toLowerCase().includes(filter.toLowerCase()) ||
        item.artist.toLowerCase().includes(filter.toLowerCase())
    );
  }, [data, sortColumn, sortDirection, filter]);

  // Calculate pagination
  const totalPages = Math.ceil(processedData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = processedData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <input
        type="text"
        placeholder="Filter by song or artist"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-4 p-2 border rounded"
      />
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort('songName')}>Song Name</th>
            <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort('artist')}>Artist</th>
            <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort('dateStreamed')}>Date Streamed</th>
            <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort('streamCount')}>Stream Count</th>
            <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort('userId')}>User ID</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item) => (
            <tr key={item.id}>
              <td className="border px-4 py-2">{item.songName}</td>
              <td className="border px-4 py-2">{item.artist}</td>
              <td className="border px-4 py-2">{item.dateStreamed}</td>
              <td className="border px-4 py-2">{item.streamCount}</td>
              <td className="border px-4 py-2">{item.userId}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-between items-center">
        <button 
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button 
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DataTable;