import React, { useMemo, useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForn from "./components/PostForn";
import PostFilter from "./components/PostFilter";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description 3" },
    { id: 2, title: "JavaScript 2", body: "Description 2" },
    { id: 3, title: "JavaScript 3", body: "Description 1" },
  ]);

  const [filter, setFilter] = useState({ sort: "", query: "" });
  // const [selectedSort, setSelectedSort] = useState("");
  // const [searhQuery, setSearchQuery] = useState("");

  const sortedPosts = useMemo(() => {
    console.log("Is called");
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPost = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [sortedPosts, filter.query]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  //Get post from child component
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  // const sortPost = (sort) => {
  //   setSelectedSort(sort);
  // };

  return (
    <div className="App">
      <PostForn create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPost}
        title={"Post about JS"}
      />
    </div>
  );
}

export default App;
