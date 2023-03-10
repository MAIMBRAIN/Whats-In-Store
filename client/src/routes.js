import {createBrowserRouter} from "react-router-dom"

// Layouts
import Authorized from "./layouts/authorized"
import Unauthorized from "./layouts/unauthorized"

// Unauthorized
import Home from "./pages/home"
import Signup from "./pages/signup"
import Login from "./pages/login"

// Authorized
import Dashboard from "./pages/dashboard"


const routes = createBrowserRouter([
    {
        element:<Unauthorized/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:'signup',
                element:<Signup/>
            },
            {
                path:'login',
                element:<Login/>
            }
        ]
    },
    {
        element:<Authorized/>,
        children:[
            {
                path:'dashboard',
                element:<Dashboard/>
            }
        ]
    }
])

export default routes