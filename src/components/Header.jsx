import React from 'react'
import '../css/style.css'
import GMenu from '../img/g-menu.png'

export const Header = () => {
    return (
        <div>
            <nav>
                <a href="#">Gmail</a>
                <a href="#">Images</a>
                <img src={GMenu} />
                <button>Sign in</button>
            </nav>
        </div>
    )
}
