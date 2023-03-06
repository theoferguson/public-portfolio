import { useState } from "react"
import { Nav } from "./Nav"

export const Home = () => {
    const [loggedIn, setLoggedIn] = useState(false)

    function onLogin() {
        setLoggedIn(true)
    }

    function onLogout() {
        setLoggedIn(false)
    }

    return (
        <div>
            <Nav onLogin={onLogin} />
            {loggedIn && 
                <h1>HELLO LOGGED IN</h1>
            }
        </div>
    )
}

