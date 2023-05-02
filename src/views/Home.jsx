import Card from "../components/Card"
import Contexto from "../context"
import { useContext } from "react"
const Home = () => {
    const { pizzas } = useContext(Contexto)

    return (
        <>
            <div className="banner"></div>
            <div className="pizzalist container">
                <div className="row d-flex justify-content-between">
                {
                    pizzas.map(function (element) {
                            return     <Card key={element.id} pizza={element}></Card>
                    })
                }
                </div>
            </div>
        </>
    )
}
export default Home