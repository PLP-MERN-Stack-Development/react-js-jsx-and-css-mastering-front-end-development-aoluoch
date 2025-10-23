import React from 'react';
import ApiDataDisplay from '../components/ApiDataDisplay';

/**
 * API Data page component
 */
const ApiData = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          API Data Integration
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Browse posts from JSONPlaceholder API with pagination and search functionality.
        </p>
      </div>
      
      <ApiDataDisplay />
    </div>
  );
};

export default ApiData;
