import React from "react";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import './App.css';

import Home from "./components/Home"
import Blog from "./components/Blog"
import Store from "./components/Store"

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <p>Lisan</p>
            <div>
              <Link to="/">Home</Link>
              <Link to="/Blog">Blog</Link>
              <Link to="/Store">Store</Link>
            </div>
          </nav>
        </header>
        <main>
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/Blog" element={<Blog />}/>
            <Route path="/Store" element={<Store />}/>
          </Routes>
        </main>
        <footer>
          <div>
              <Link to="/">Home</Link>
              <Link to="/Blog">Blog</Link>
              <Link to="/Store">Store</Link>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
