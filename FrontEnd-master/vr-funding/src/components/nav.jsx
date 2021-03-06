import React from "react";
import logo from "./styles/images/VRFP_logo.png";
import { Link } from "react-router-dom";

const Nav = props => {
    return (
        <nav id="navBar">
            <img id="logo" src={logo} />
                <a href="https://bw-vr-funding.vercel.app/"> Home</a>
                <a href="https://bw-vr-funding.vercel.app/about.html"> About Us </a>
                <a href="/"> Login </a>
                <a href="/signup"> Signup </a>
        </nav>
    )
}

export default Nav;
