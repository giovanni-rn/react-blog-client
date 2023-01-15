import axios from "axios";
import React, { useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

const SearchPost = () => {
  const [query, setQuery] = useState("cdh");
  const [posts, setPosts] = useState([]);

  const searchPosts = async (e) => {
    e.preventDefault();
    const { data } = await axios.get(`http://localhost:5500/search/${query}`);
    setPosts(data);
  };

  return (
    <div className="search">
      <Navbar />
      <form onSubmit={(e) => searchPosts(e)}>
        <input
          onChange={(e) => setQuery(e.target.value)}
          type="search"
          value={query}
        />
        <input type="submit" value="RECHERCHER" />
      </form>
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

export default SearchPost;
