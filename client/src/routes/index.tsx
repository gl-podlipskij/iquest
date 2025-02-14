import { createBrowserRouter } from "react-router";
import AuthLayout from "./auth/layout";

const Router = createBrowserRouter([
    {
        element : <AuthLayout/>,
        children : [

        ],
    }
]);


export default Router;