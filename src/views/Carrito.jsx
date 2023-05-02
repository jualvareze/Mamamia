import { useContext } from "react"
import Contexto from "../context"

const Carrito = () => {
    const { carrito, setCarrito } = useContext(Contexto)
    return (
        <>
        <link rel="stylesheet" href="Carrito.css" />
            <div className="m-4 d-flex justify-content-center">
                <h1>Carrito</h1>
                <div>
                    <div className="carrito">
                        <ul className="list-group">
                            {
                                carrito.map(function (element) {
                                    return <li className="list-group-item prod">
                                        <div>
                                            <p>{element.name}</p>
                                            <img src={element.img} className="image" alt="..."></img>
                                        </div>

                                        {element.price}</li>
                                })
                            }
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Carrito