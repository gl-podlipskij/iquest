import { FC } from "react";
import MuiCard from "@mui/material/Card";
import { SxProps, Theme } from "@mui/material";


export type CardSize = 'sm' | 'md' | 'lg' | 'xl';
// type SizeParams =
// const sizeParams:{[key:CardSize]:}

export type CardProps = {
    size : CardSize;
}
const Card:FC = ()=>{
    return (
        <MuiCard>

        </MuiCard>
    )
}

export default Card;