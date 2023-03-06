import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { Navbar } from "./general_styles"

type NavProps = {
    onLogin?: any;
    onLogout?: any;
}

export const Nav = ({ onLogin, onLogout }: NavProps) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [signInError, setSignInError] = useState("")

    let location = useLocation().pathname.slice(1)
    let navigate = useNavigate()

    function handleSubmit() {
        const signIn = async () => {
            try {
                const res = await fetch('/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username, password })
                })
                const data = await res.json()

                onLogin()
                setSignInError("")
                console.log(data)
            } catch (error: unknown) {
                if (error instanceof Error) {
                    setSignInError(error.message)
                }
            }
        }
        signIn()
    }

    function handleLogout() {
        const logOut = async () => {
            try {
                const res = await fetch('/logout', {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                const data = await res.json()

                onLogout()
                setSignInError("")
                console.log(data)
                navigate("/")
            } catch (error: unknown) {
                if (error instanceof Error) {
                    setSignInError(error.message)
                }
            }
        }
        logOut()
    }

    return (
        <>
            <Navbar>
                <Link to="/">HOME PAGE</Link>
                <Link to="/about">ABOUT PAGE</Link>
                <Link to="/contact">CONTACT PAGE</Link>

                <form onSubmit={handleSubmit}>
                    <label>
                        <input
                            value={username}
                            type="text"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>
                    <label>
                        <input
                            value={password}
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <button type="submit">Submit</button>
                </form>
                <button onClick={handleLogout} >Logout</button>
            </Navbar>

            <h1>this is the {location ? location : "home"} page</h1>
        </>
    )
}