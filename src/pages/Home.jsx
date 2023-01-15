import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get("http://localhost:5500");
      setPosts(data);
    };
    fetchPosts();
  });

  return (
    <div>
      <Navbar />
      {posts.map((post) => (
        <Card
          key={post._id}
          id={post._id}
          title={post.title}
          author={post.author}
          category={post.category}
        />
      ))}
    </div>
  );
};

export default Home;
