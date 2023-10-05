
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../pages/Home/Home';
import Booking from '../pages/Booking/Booking';
import Login from '../pages/Login/Login';

const myRoutes = createBrowserRouter([
    {
        path : "/",
        element : <MainLayout></MainLayout>,
        children : [
            {
                path : "/",
                element : <Home></Home>,
            },
            {
                path : "/booking",
                element : <Booking></Booking>
            },
            {
                path : "/login",
                element : <Login></Login>
            },
        ]
    }
])

export default myRoutes;