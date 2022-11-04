import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import { Routes, Route } from "react-router-dom";
import AddEmployeeComponent from "./components/AddEmployeeComponent";
function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<ListEmployeeComponent/>}></Route>
          <Route path="/employees" element={<ListEmployeeComponent/>}></Route>
          <Route path="/add-employee" element={<AddEmployeeComponent/>}/>
          <Route path="/edit-employee/:id" element={<AddEmployeeComponent/>}/>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
