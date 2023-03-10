import { Box, Card, Grid, Stack, TextField } from "@mui/material";
import React from "react";

const Signup = () => {
    return (
        <Grid item>
            <Card>
                <Box component='form' autoComplete="off">
                    <TextField label='email'/>
                </Box>
            </Card>
        </Grid>
    )
}

export default Signup