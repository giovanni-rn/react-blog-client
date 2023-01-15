import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";

const Post = () => {
  let { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await axios.get(`http://localhost:5500/${id}`);
      setPost(data);
    };
    fetchPost();
  });

  return (
    <div className="post">
      <Navbar />
      <h1>{post.title}</h1>
      <h2>
        par {post.author} - {post.category}
      </h2>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;
