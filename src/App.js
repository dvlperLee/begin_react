import './App.css';
import './MyStyle.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="layout">
        <div className="top">
          <h1>Top Section</h1>
        </div>
        <div className="left">
          <ul>{menuList}</ul>
        </div>
        <div className="main">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<h2>소개 페이지</h2>} />
            <Route path="/services" element={<h2>서비스 페이지</h2>} />
            <Route path="/contact" element={<h2>연락처 페이지</h2>} />
            <Route path="/blog" element={<h2>블로그 페이지</h2>} />
            <Route path="/" element={<h2>환영합니다!</h2>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

const menu = [
  {name : '홈', id: '/home', url: '/home'},
  {name : '소개', id: '/about', url: '/about'},
  {name : '서비스', id: '/services', url: '/services'},
  {name : '연락처', id: '/contact', url: '/contact'},
  {name : '블로그', id: '/blog', url: '/blog'}
]

const menuList = menu.map(item =>
  <li key={item.id}>
    <Link to={item.url}>{item.name}</Link>
  </li>
);

export default App;
