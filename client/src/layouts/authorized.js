import React, { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

const Authorized = () =>{

    const navigate = useNavigate()
    const token = localStorage.getItem("token")

    // Check if user is authorized to be on this layout and Children pages
    useEffect(()=>{
        if(token === null){
            navigate("/")
        }
    },[])

    // Render
    return(
        <>
        <p>This authorized</p>
        <Outlet />
        </>
    )
}

export default Authorized