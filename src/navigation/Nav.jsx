import React from 'react'
import { Link } from 'react-router-dom'

const Nav = props => {
    return (
        <nav>
        <h1>Welcome to My Work in Progress!</h1>
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav