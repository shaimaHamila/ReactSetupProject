import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";
function App() {
    // const [loggedIn, setLoggedIn] = useState(localStorage.getItem("user") ? true : false);
    // useEffect(() => {
    //     if (localStorage.getItem("user")) {
    //         setLoggedIn(true);
    //     }
    // }, [loggedIn]);
    const loggedIn = true;
    return (
        <Router>
            <Routes>
                <Route path="*" element={loggedIn ? <PrivateRoutes /> : <PublicRoutes />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
