import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';

/**
 * Home page component
 */
const Home = () => {
  const features = [
    {
      title: 'Task Management',
      description: 'Create, manage, and track your tasks with an intuitive interface.',
      icon: '✓',
      link: '/tasks',
    },
    {
      title: 'API Integration',
      description: 'Fetch and display data from external APIs with pagination and search.',
      icon: '🔌',
      link: '/api-data',
    },
    {
      title: 'Dark Mode',
      description: 'Toggle between light and dark themes for comfortable viewing.',
      icon: '🌙',
    },
    {
      title: 'Responsive Design',
      description: 'Works seamlessly on mobile, tablet, and desktop devices.',
      icon: '📱',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to PLP Task Manager
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
          A modern, responsive task management application built with React.js, JSX, and Tailwind CSS.
          Manage your tasks efficiently with a beautiful user interface.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/tasks">
            <Button variant="primary" size="lg">
              Get Started
            </Button>
          </Link>
          <Link to="/api-data">
            <Button variant="secondary" size="lg">
              View API Demo
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center hover:scale-105 transition-transform cursor-pointer"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {feature.description}
              </p>
              {feature.link && (
                <Link to={feature.link}>
                  <Button variant="primary" size="sm">
                    Learn More
                  </Button>
                </Link>
              )}
            </Card>
          ))}
        </div>
      </div>

      {/* Technology Stack */}
      <Card title="Built With Modern Technologies">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl mb-2">⚛️</div>
            <h4 className="font-semibold text-gray-900 dark:text-white">React.js</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">UI Library</p>
          </div>
          <div>
            <div className="text-3xl mb-2">🎨</div>
            <h4 className="font-semibold text-gray-900 dark:text-white">Tailwind CSS</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Styling</p>
          </div>
          <div>
            <div className="text-3xl mb-2">⚡</div>
            <h4 className="font-semibold text-gray-900 dark:text-white">Vite</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Build Tool</p>
          </div>
          <div>
            <div className="text-3xl mb-2">🔀</div>
            <h4 className="font-semibold text-gray-900 dark:text-white">React Router</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Routing</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Home;
