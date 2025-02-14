import { FC } from "react";
import * as styles from "./layout.styles";
import { Box } from "@mui/material";
import { Outlet } from "react-router";

const AuthLayout:FC = ()=>{
    return (
        <Box sx={styles.page}>
            <Outlet/>
        </Box>
    )
}

export default AuthLayout;