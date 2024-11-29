import { useState } from 'react'
import LoginPage from './components/Pages/Login'
import RegisterPage from './components/Pages/Register'
import TimelinePage from './components/Pages/Timeline'
import PostPage from './components/Pages/Postpage'
import PostDetailPage from './components/Pages/PostDetailPage'
import Footer from './components/Footer'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          <Route index element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/post" element={<PostPage />} />
          <Route path="/post-detail/:id" element={<PostDetailPage />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App
