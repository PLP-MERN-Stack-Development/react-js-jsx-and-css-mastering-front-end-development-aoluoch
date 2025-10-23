import React, { useState, useEffect } from 'react';
import { fetchPosts, searchPosts } from '../api/jsonPlaceholder';
import Card from './Card';
import Button from './Button';

/**
 * Component for displaying API data with pagination and search
 */
const ApiDataDisplay = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const postsPerPage = 10;

  // Fetch posts on component mount and page change
  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchPosts(page, postsPerPage);
        setPosts(data);
      } catch (err) {
        setError('Failed to load posts. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (!isSearching) {
      loadPosts();
    }
  }, [page, isSearching]);

  // Handle search
  const handleSearch = async (e) => {
    e.preventDefault();
    
    if (!searchQuery.trim()) {
      setIsSearching(false);
      setPage(1);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setIsSearching(true);
      const results = await searchPosts(searchQuery);
      setPosts(results);
    } catch (err) {
      setError('Failed to search posts. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery('');
    setIsSearching(false);
    setPage(1);
  };

  // Handle pagination
  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    setPage((prev) => Math.max(1, prev - 1));
  };

  return (
    <div className="space-y-6">
      <Card title="API Data from JSONPlaceholder">
        {/* Search Form */}
        <form onSubmit={handleSearch} className="mb-6">
          <div className="flex gap-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search posts by title..."
              className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <Button type="submit" variant="primary">
              Search
            </Button>
            {isSearching && (
              <Button type="button" variant="secondary" onClick={clearSearch}>
                Clear
              </Button>
            )}
          </div>
        </form>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-200 px-4 py-3 rounded relative">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        {/* Posts Grid */}
        {!loading && !error && (
          <>
            {posts.length === 0 ? (
              <p className="text-center text-gray-500 dark:text-gray-400 py-8">
                No posts found.
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="p-4 border rounded-lg hover:shadow-md transition-shadow dark:border-gray-700 bg-gray-50 dark:bg-gray-700"
                  >
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white capitalize">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                      {post.body}
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        Post ID: {post.id}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        User ID: {post.userId}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination Controls */}
            {!isSearching && posts.length > 0 && (
              <div className="flex justify-center items-center gap-4 mt-6">
                <Button
                  variant="secondary"
                  onClick={handlePrevPage}
                  disabled={page === 1}
                >
                  Previous
                </Button>
                <span className="text-gray-700 dark:text-gray-300">
                  Page {page}
                </span>
                <Button
                  variant="secondary"
                  onClick={handleNextPage}
                  disabled={posts.length < postsPerPage}
                >
                  Next
                </Button>
              </div>
            )}

            {isSearching && (
              <p className="text-center text-gray-500 dark:text-gray-400 mt-4">
                Found {posts.length} result(s) for "{searchQuery}"
              </p>
            )}
          </>
        )}
      </Card>
    </div>
  );
};

export default ApiDataDisplay;
