import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contexto from "./context";
import Carrito from "./views/Carrito";
import Pizza from "./views/Pizza";
import Home from "./views/Home";
import Navbar from "./components/navbar";

function App() {
  const url = `./pizzas.json`
  const [pizzas, setPizzas] = useState([])
  const [carrito, setCarrito] = useState([])
  const estadocompartido = {carrito, setCarrito, pizzas, setPizzas}


  const obtenerJson = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setPizzas(data)
  }


  useEffect(() => {
    obtenerJson()
  }, [])


  return (
    <div className="App">
      <Contexto.Provider value={estadocompartido}>
        <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/pizza/:id" element={<Pizza />}></Route>
          <Route path="/carrito" element={<Carrito />}></Route>
        </Routes>
        </BrowserRouter>
      </Contexto.Provider>
    </div>
  );
}

export default App;
