interface cardProps {
    image: string,
    title: string,
    price: number,
    freeShipping: boolean
}

const Card:React.FC<cardProps> = ({image, title, price, freeShipping}) => {
    return (
        <div>
            <div>
                <img src={image} alt={title} />
            </div>
            <div>
                <h1>{title}</h1>
                <p className="text-green-500">{freeShipping ? "Free Shipping" : ""}</p>
                <h3>{price}</h3>
            </div>
        </div>
    )
}

export default Card