import { FC } from "react";
import MuiCard, {CardProps as MuiCardProps} from "@mui/material/Card";
import { SxProps, Theme } from "@mui/material";
import * as styles from "./card.styles.ts";


export type CardSize = 'sm' | 'md' | 'lg' | 'xl';
type SizeParams = {
    [key in CardSize]: SxProps<Theme>;
};
const sizeParams:SizeParams = {
    'sm' : {
        padding : '5px',
        borderRadius : '3px'
    },
    'md' : {
        padding : '10px',
        borderRadius : '5px',
    },
    'lg' : {
        padding : '20px',
        borderRadius : '10px',
    },
    'xl' : {
        padding : '32px',
        borderRadius : '15px',
    }
}

export type CardProps = MuiCardProps & {
    size : CardSize;
}
const Card:FC<CardProps> = ({
    size, ...props
})=>{
    const sx = sizeParams[size];

    const res:SxProps<Theme> = {
        ...sx,
        ...styles.card,
        ...(props.sx ?? {}),
    }

    return (
        <MuiCard sx={res} {...props}/>
    )
}

export default Card;