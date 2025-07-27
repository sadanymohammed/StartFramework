import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Home from "./Components/Home/Home";
import Layout from "./Components/Layout/Layout";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Contact from "./Components/Contact/Contact";
import NotFound from "./Components/NotFound/NotFound";
function App() {
  return (
<HashRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
</HashRouter>

  );
}

export default App;
