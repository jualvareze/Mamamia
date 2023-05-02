import { useContext, useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import Contexto from "../context"
const Navbar = () => {
    const setActiveClass = ({isActive}) => (isActive ? "activo"+ " nav-link" : "nav-link")
    const {carrito, setCarrito} = useContext(Contexto)
    const [cuenta,setCuenta] = useState()
    
    const actualizarCuenta = () =>{
        let suma = 0
        carrito.forEach(element => {
            suma = suma + element.price
            setCuenta(suma)
        });
    }
    useEffect(() => {
        actualizarCuenta()
      }, [carrito])
    
    return (
        <>
        <link rel="stylesheet" href="./nav.css" />
            <nav className="navbar navbar-expand-lg bg-success p-3 mb-4">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/" className={setActiveClass}>Pizzeria</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/Carrito" className={setActiveClass}>Carrito</NavLink>
                            </li>
                            <li>
                                <span>{cuenta}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
    }
export default Navbar