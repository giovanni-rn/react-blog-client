import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import SearchPost from "./pages/SearchPost";
import AddPost from "./pages/AddPost";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Post />} />
          <Route path="/search" element={<SearchPost />} />
          <Route path="/add" element={<AddPost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
