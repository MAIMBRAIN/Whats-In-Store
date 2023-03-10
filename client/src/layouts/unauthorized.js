import React from "react"
import { Outlet } from "react-router-dom"
import { Container } from "@mui/system"
import { Grid } from "@mui/material"

const Unauthorized = () =>{
    // Render
    return(
        <Container>
            <Grid container>
                <Outlet />
            </Grid>
        </Container>
    )
}

export default Unauthorized