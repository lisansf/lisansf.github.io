import React from "react";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { Helmet } from "react-helmet";

import './App.css';

import Home from "./components/Home";
import Blog from "./components/Blog";

function App() {
  return (
    <>
    <Helmet title='VEO Veneht'/>
    <Router>
      <div className="App">
        <header>
          <nav>
            <p>VEO Veneht</p>
            <div>
              <Link to="/">Home</Link>
              <Link to="/Blog">Blog</Link>
            </div>
          </nav>
        </header>
        <main>
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/Blog" element={<Blog />}/>
          </Routes>
        </main>
        <footer>
          <div>
              <Link to="/">Home</Link>
              <Link to="/Blog">Blog</Link>
          </div>
        </footer>
      </div>
    </Router>
    </>
  );
}

export default App;
