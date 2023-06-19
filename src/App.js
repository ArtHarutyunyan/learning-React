import React, { useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForn from "./components/PostForn";
import PostFilter from "./components/PostFilter";
import MyMoal from "./components/UI/modal/MyMoal";
import MyButton from "./components/UI/button/MyButton";
import { usePosts } from "./hooks/usePosts";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description 3" },
    { id: 2, title: "JavaScript 2", body: "Description 2" },
    { id: 3, title: "JavaScript 3", body: "Description 1" },
  ]);

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);

  const sortedAndSearchedPost = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  //Get post from child component
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Create New Post
      </MyButton>
      <MyMoal visible={modal} setVisible={setModal}>
        <PostForn create={createPost} />
      </MyMoal>
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
