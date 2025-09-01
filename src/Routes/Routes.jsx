import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Register/Register";










export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<h3>Routes Not Found</h3>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ]
  },
]);