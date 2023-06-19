import React, { useEffect, useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForn from "./components/PostForn";
import PostFilter from "./components/PostFilter";
import MyMoal from "./components/UI/modal/MyMoal";
import MyButton from "./components/UI/button/MyButton";
import { usePosts } from "./hooks/usePosts";
import PostServise from "./components/API/PostServise";
import Loader from "./components/UI/loader/Loader";

function App() {
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [isPostsLoading, setIsPostsLoading] = useState(false);

  const sortedAndSearchedPost = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    setIsPostsLoading(true);
    setTimeout(async () => {
      const posts = await PostServise.getAll();
      console.log(posts);
      setPosts(posts);
      setIsPostsLoading(false);
    }, 2000);
  }

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
      {isPostsLoading ? (
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
        >
          <Loader />
        </div>
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPost}
          title={"Post about JS"}
        />
      )}
    </div>
  );
}

export default App;
