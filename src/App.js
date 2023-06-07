import React, { useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import MyButton from "./components/UI/Button/MyButton";
import MyInput from "./components/UI/Input/MyInput";
import { useRef } from "react";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "JavaScript 2", body: "Description" },
    { id: 3, title: "JavaScript 3", body: "Description" },
  ]);

  const [post, setPost] = useState({
    title: "",
    body: "",
  });
  const [body, setBody] = useState("");

  const addNewPost = (e) => {
    e.preventDefault();
    setPosts([...posts, { ...post, id: Date.now() }]);
    setPost({
      title: "",
      body: "",
    });
    setBody("");
  };

  return (
    <div className="App">
      <form>
        <MyInput
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          value={post.title}
          type="text"
          placeholder="Post Name"
        />

        <MyInput
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          value={post.body}
          type="text"
          placeholder="Post Description"
        />
        <MyButton onClick={addNewPost}>Create Post</MyButton>
      </form>
      <PostList posts={posts} title={"Post List 1"} />
    </div>
  );
}

export default App;
