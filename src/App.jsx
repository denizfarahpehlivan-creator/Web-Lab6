import { useEffect, useReducer, useState } from "react";
import { fetchPosts } from "./api/postsApi.js";
import { initialState, postsReducer } from "./reducer/postsReducer.js";
import PostList from "./components/PostList.jsx";
import FilterForm from "./components/FilterForm.jsx";
import "./App.css";

export default function App() {
  const [state, dispatch] = useReducer(postsReducer, initialState);
  const [filter, setFilter] = useState("");

  const { posts, loading, error } = state;

  useEffect(() => {
    const controller = new AbortController();

    async function loadPosts() {
      dispatch({ type: "FETCH_START" });

      try {
        const data = await fetchPosts(controller.signal);

        if (!controller.signal.aborted) {
          dispatch({
            type: "FETCH_SUCCESS",
            payload: data,
          });
        }
      } catch (error) {
        if (!controller.signal.aborted) {
          dispatch({
            type: "FETCH_ERROR",
            payload: error.message || "Unable to load posts.",
          });
        }
      }
    }

    loadPosts();

    return () => {
      controller.abort();
    };
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(filter.trim().toLowerCase()),
  );

  return (
    <main>
      <h1>Post Dashboard</h1>

      <FilterForm filter={filter} onFilterChange={setFilter} />

      {loading ? (
        <p role="status">Loading posts...</p>
      ) : error ? (
        <p role="alert">Error: {error}</p>
      ) : posts.length === 0 ? (
        <p>No posts available.</p>
      ) : filteredPosts.length === 0 ? (
        <p>No posts match your filter.</p>
      ) : (
        <PostList posts={filteredPosts} />
      )}
    </main>
  );
}
