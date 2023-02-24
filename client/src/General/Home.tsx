import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <div>
            <h1>This is the home page</h1>
            <Link to="about">ABOUT PAGE</Link>
            <Link to="contact">CONTACT PAGE</Link>
        </div>
    )
}

