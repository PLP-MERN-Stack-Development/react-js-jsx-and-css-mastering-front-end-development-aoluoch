import React from 'react';
import TaskManager from '../components/TaskManager';

/**
 * Tasks page component
 */
const Tasks = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Task Manager
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Organize your tasks efficiently. Add, complete, and manage your to-do list.
        </p>
      </div>
      
      <TaskManager />
    </div>
  );
};

export default Tasks;
