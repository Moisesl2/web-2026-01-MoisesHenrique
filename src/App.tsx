
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PortalDocenteDashboard from "./pages/dashboardocente";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portal-docente" element={<PortalDocenteDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;