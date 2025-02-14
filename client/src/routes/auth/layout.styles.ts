import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";

export const page:SxProps<Theme> = {
    width : '100%',
    minHeight : '100vh',
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'center',
    backgroundColor : 'background.default',
}