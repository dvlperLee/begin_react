import './App.css';
import './MyStyle.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import MenuList from './Menu'; // 새로운 컴포넌트 임포트
import TipsValley from './TipsValley';
import Daihan from './Daihan';

function App() {
  return (
    <Router>
      <div className="layout">
        <div className="top">
          <h1>
            <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>Yangho's React</a>
          </h1>
        </div>
        <div className="left">
          <MenuList /> {/* MenuList 컴포넌트 사용 */}
        </div>
        <div className="main">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<h2>소개 페이지</h2>} />
            <Route path="/services" element={<h2>서비스 페이지</h2>} />
            <Route path="/contact" element={<h2>연락처 페이지</h2>} />
            <Route path="/blog" element={<h2>블로그 페이지</h2>} />
            <Route path="/" element={<h2>환영합니다!</h2>} />
            <Route path="/tipsvalley" element={<TipsValley />} />
            <Route path="/daihan" element={<Daihan />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
