import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Home from "./Components/Home/Home";
import Layout from "./Components/Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Contact from "./Components/Contact/Contact";
import NotFound from "./Components/NotFound/NotFound";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* /home URL. */}
          <Route index element={<Home />} />
          {/* /about URL. */}
          <Route path="about" element={<About />} />
          {/* /portfolio URL. */}
          <Route path="portfolio" element={<Portfolio />} />
          {/* /contact URL. */}
          <Route path="contact" element={<Contact />} />
          {/* /404 URL. */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
