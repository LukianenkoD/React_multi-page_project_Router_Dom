import React from "react";
import Nav from "./Components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/pajes/HomePage";
import PostPage from "./Components/pajes/PostPage";
import NotFoundPage from "./Components/pajes/NotFoundPage";
import SinglePost from "./Components/pajes/SinglePost";

function App() {
  return (
    <>
    <Router>
    <Nav/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/posts" element={<PostPage/>}/>
      <Route path="/posts/:id" element={<SinglePost/>}/>
      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
    </Router>
     
    </>
  );
}

export default App;
