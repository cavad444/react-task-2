import { Routes, Route } from "react-router-dom";
import Shop from "./routes/shop/Shop";
import Navigation from "./routes/navigation/Navigation";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
