import React from "react";
import { Link } from "react-router-dom";
export default function HomePage(){
    return (
        <section id="homePage">
            
            <div className="container">
                <h1>Home Page</h1>
                <Link to='register'>Registration</Link>
                <Link to='login'>Login</Link>
            </div>
        </section>
    )
}