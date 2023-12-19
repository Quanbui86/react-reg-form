import React from "react";
import Header from "../pages/Header";
import Footer from "../pages/Footer";
import { Outlet } from "react-router-dom";
export default function Root(){
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}