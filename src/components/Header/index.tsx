import classNames from "classnames";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

const Header = () => {

    const [state, setState] = useState<boolean>(false)

    function openHeader() {
        setState(!state)
    }

    useEffect(() => {
        console.log(state)
    })

    return (
        <div className="p-5 shadow md:flex md:justify-between md:items-center">
            <div className="flex justify-between">
                <h1>LOGO</h1>
                <button className="sm:block md:hidden" onClick={openHeader}>ABRIR</button>
            </div>
            <div className={classNames({
                "block": state,
                "hidden": !state,
                "md:block": true
            })}>
                <ul className="md:flex">
                    <li className="md:mx-2"><Link to={"/"}>HOME</Link></li>
                    <li className="md:mx-2"><Link to={"/products"}>PRODUCTS</Link></li>
                    <li className="md:mx-2"><Link to={"/about"}>ABOUT</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header