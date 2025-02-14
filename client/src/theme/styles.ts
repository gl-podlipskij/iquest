import { GlobalStylesProps } from "@mui/material";

const style:GlobalStylesProps['styles'] = {
    '*, ::after, ::before' : {
        padding : 0,
        margin : 0,
        boxSizing : 'border-box',
    }
}

export default style;