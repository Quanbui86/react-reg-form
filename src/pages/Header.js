import React from "react";
import './style.css'
import logo from '../img/logo.png'
export default function Header(){
    const nav = ['Address', 'Contact', 'About']
    return (
        <section className="header">
            <div className="logo"><img src={logo} alt='logo'/></div>
            <ul className="nav">
                <li className="navItem"><h3>Home</h3></li>
                {nav.map((item, index)=>{return <li key={index} className="navItem">{item}</li>})}
            </ul>  
        </section>
    )
}