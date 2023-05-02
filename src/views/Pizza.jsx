import { useParams } from "react-router-dom"
import { useContext, useEffect } from "react"
import Contexto from "../context"
const Pizza = () => {
    const { id } = useParams()
    const { pizzas, setCarrito, carrito } = useContext(Contexto)


    return (
        <>
            {
                pizzas.map(function (element) {
                    if (element.id === id)
                        return (
                            <div className="pizza d-flex justify-content-around row">
                                <img className="col-6 rounded-5" src={element.img} alt="" />
                                <div className="caract col-6 container">
                                    <h2 className="row mb-4">{element.name}</h2>
                                    <p className="row mb-4" >{element.desc}</p>
                                    <ul class="list-group mb-5">
                                        {
                                            element.ingredients.map(function (ing) {
                                                return <li className="list-group-item row">{ing}</li>
                                            })
                                        }
                                    </ul>
                                    <span className="">precio: {element.price}</span>
                                    <button type="button" class="btn btn-success" onClick="">Añadir</button>
                                </div>




                            </div>
                        )
                })
            }
        </>
    )
}
export default Pizza