import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/pages/login/LoginPage";
import OrderPage from "./components/pages/order/OrderPage";
import ErrorPage from "./components/pages/error/ErrorPage";

function App() {
  //state (état, donnée)

  //comportements

  //affichage (render)
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/order/:userName" element={<OrderPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}
export default App;