import {useMemo} from 'react';
import './app.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/home/home";

/**
 * This is the main app component. It will render the app.
 */
export const App = () => {
    return (
        <BrowserRouter>
            <Routes location={location} key={location.pathname}>
                <Route path={"/"} element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    );
}
