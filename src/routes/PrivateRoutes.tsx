import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";

const PrivateRoutes = () => {
    return (
        //add navbare and topbar components here
        <Routes>
            <Route path="*" element={<Dashboard />}></Route>
            {/* <Route path="/signup" element={<Shippment />}></Route> */}
        </Routes>
    );
};
export default PrivateRoutes;
