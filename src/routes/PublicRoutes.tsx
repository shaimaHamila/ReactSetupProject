import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
const PublicRoutes = () => {
    return (
        <Routes>
            <Route path='*' element={<Login />}></Route>
            {/* <Route path="/signup" element={<Signup />}></Route> */}
        </Routes>
    );
};
export default PublicRoutes;
