import React from 'react'
import '../css/style.css'
import Logo from '../img/logo.png'
import Search from '../img/search.svg'
import Vs from '../img/vs.png'

export default function Main() {
    return (
        <div>
            <section class="section-1">
                <img src={Logo} class="logo" />
                <form><br></br>
                    <div class="s-box">
                        <img src= {Search} class="search-icon" />
                        <input type="text" class="s-input" />
                        <img src= {Vs} class="vs-icon" />
                        <input type="submit" class="s-btn" value="Google Search" />
                        <input type="submit" class="s-btn" value="I'm Feeling Lucky" />
                    </div>
                </form>
                <div class="lang">
                    Google offered in:
                    <a href="#">Tiếng Việt</a>
                    <a href="#">Français</a>
                    <a href="#">繁體中文</a>
                </div>
            </section>
        </div>
    )
}
