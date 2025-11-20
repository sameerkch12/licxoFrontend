import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import DefaultLayout from "@/layouts/default";
import AddRoom from "@/pages/AddRoom";

function App() {
  return (
    <Routes>
      <Route element={  <DefaultLayout> <IndexPage /> </DefaultLayout>} path="/" />
      <Route element={<DefaultLayout> <AddRoom/> </DefaultLayout>} path="/addroom" />
   
    </Routes>
  );
}

export default App;
