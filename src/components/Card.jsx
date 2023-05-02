import { useContext, useState } from "react"
import Contexto from "../context"
import { Navigate, useNavigate } from "react-router-dom"
const Card = (props) => {
    const {carrito, setCarrito} = useContext(Contexto)
    const navegar = useNavigate()
    const addPizza = () =>{
            setCarrito([...carrito,{desc:props.pizza.desc,
                id:props.pizza.id,
                img:props.pizza.img,
                ingredients:props.pizza.ingredients,
                name:props.pizza.name,
                price:props.pizza.price}])
    }

    const viewDetails = (id) =>{
        navegar("/Pizza/"+id)
    }


    return (
        <>
            <div className="card col-2 m-2">
                <img src={props.pizza.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.pizza.name}</h5>
                </div>
                <span className="fw-bold color-danger">ingredientes:</span>
                <ul className="list-group list-group-flush">
                        {
                              props.pizza.ingredients.map(function (element) {
                                return <li key="" className="list-group-item">{element}</li>
                            })
                        }
                </ul>
                <p className="fw-bold text-danger">price: {props.pizza.price}</p>
                <div className="card-body d-flex justify-content-between">
                    <button type="button" className="btn btn-primary" onClick={() => viewDetails(props.pizza.id)}>ver mas</button>
                    <button type="button" className="btn btn-success" onClick={() => addPizza()}>añadir</button>
                </div>
            </div>
        </>
    )
}
export default Card