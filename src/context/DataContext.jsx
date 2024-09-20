// src/context/DataContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import { generateMockData } from '../utils/mockData';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const mockData = generateMockData();
    setData(mockData);
  }, []);

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
};