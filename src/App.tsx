import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";

import AddRoom from "@/pages/AddRoom";
import ProfilePage from "./pages/Profile";

function App() {
  return (
    <Routes>
      <Route element={  <IndexPage />} path="/" />
      <Route element={ <AddRoom/> } path="/addroom" />
      <Route element={<ProfilePage/>} path="/profile" />
   
    </Routes>
  );
}

export default App;
