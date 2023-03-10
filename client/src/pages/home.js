import React from "react";
import { Button, Grid, Stack, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate()

    return (
        <Grid item textAlign={'center'}>
            <Stack spacing={3}>
                <Typography variant='h1'>
                    What's in your store?
                </Typography>
                <Typography variant='h3'>
                    Keep track of your store's inventory with this nifty app
                </Typography>
            </Stack>
            <Stack direction={'row'} justifyContent='center' spacing={3} mt={5}>
                <Button variant="outlined" onClick={()=> navigate('/signup')}>Sign Up</Button>
                <Button variant="contained" onClick={()=> navigate('/login')}>Login</Button>
            </Stack>
        </Grid>
    )
}

export default Home