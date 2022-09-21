import { Route, Routes } from "react-router-dom";
import { Eventos } from "./components/Eventos";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/events" element={<Eventos />} exact />
      </Routes>
    </div>
  );
}

export default App;
