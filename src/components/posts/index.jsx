import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import axios from "axios";

const BASE_URL = "https://6a4be282f5eab0bb6b639e3b.mockapi.io";

function Posts() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await axios(`${BASE_URL}/posts`);
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  if (posts.length === 0) {
    return <p>There are no posts yet!</p>;
  }

  return (
    <ul className={styles.container}>
      {posts.map((post) => {
        return <li key={post.id}>{post.text}</li>;
      })}
    </ul>
  );
}

export default Posts;
