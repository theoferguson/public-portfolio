import { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"

export const Nav = () => {
    let location = useLocation().pathname.slice(1)

    return (
        <div>
            <h1>this is the {location ? location : "home"} page</h1>
            <Link to="/">HOME PAGE</Link>
            <Link to="/about">ABOUT PAGE</Link>
            <Link to="/contact">CONTACT PAGE</Link>
        </div>
    )
}