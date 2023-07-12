import Card from "../components/Card"
import json from "../data/products.json"

const Home = () => {
    return (
        <>
            HOME
            <Card title={json.sofas[0].title} image={json.sofas[0].image} price={json.sofas[0].price} freeShipping={json.sofas[0].freeShipping}/>
        </>
    )
}

export default Home