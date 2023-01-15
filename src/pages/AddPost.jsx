import axios from "axios";
import { useState } from "react";
import Navbar from "../components/Navbar";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  const addPost = async (e) => {
    e.preventDefault();
    axios.post("http://localhost:5500", {
      title,
      author,
      category,
      content,
    });
    setTitle("");
    setAuthor("");
    setCategory("");
    setContent("");
  };

  return (
    <div className="add">
      <Navbar />
      <form onSubmit={(e) => addPost(e)}>
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Titre"
          value={title}
        />
        <input
          onChange={(e) => setAuthor(e.target.value)}
          type="text"
          placeholder="Auteur"
          value={author}
        />
        <input
          onChange={(e) => setCategory(e.target.value)}
          type="text"
          placeholder="Category"
          value={category}
        />
        <textarea
          onChange={(e) => setContent(e.target.value)}
          cols="30"
          rows="10"
          placeholder="Contenu"
          value={content}
        ></textarea>
        <input type="submit" value="Publier" />
      </form>
    </div>
  );
};

export default AddPost;
