import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/slice";
import { Navigate, useLocation } from "react-router-dom";

const PrivatPoute = ({children}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const location = useLocation()
    if (isLoggedIn) {
        return children
    }
    return <Navigate to='/login' state={{from:location}}/>
}

export default PrivatPoute