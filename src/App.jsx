// import { Routes, Route } from "react-router-dom";

// import {  Coordinates} from "./context/contextApi";
// import  { lazy, Suspense, useState } from "react";
// import { useSelector } from "react-redux";
// import SigninPage from "./components/SigninBtn";

// const Head = lazy(() => import("./components/Head"));
// const Body = lazy(() => import("./components/Body"));
// const Search = lazy(() => import("./components/Search"));
// const Cart = lazy(() => import("./components/Cart"));
// const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));

function App() {
    // const [coord, setCoord] = useState({ lat: 28.5355161, lng: 77.3910265 });

    // const visible = useSelector((state) => state.toogleSlice.searchBarToogle);
    // const loginVisible = useSelector((state) => state.toogleSlice.loginToggle);


    return (
        <head/>
        // <Coordinates.Provider value={{ coord, setCoord }}>
            /* <div
                className={
                    " " +
                    (visible || loginVisible
                        // ? "max-h-screen overflow-hidden"
                        : " ")
                }
            >
                <Suspense fallback="loading....">
                    <Routes>
                        <Route path="/" element={<Head />}>
                            <Route path="/" element={<Body />} />
                            <Route
                                path="/restaurantMenu/:id"
                                element={<RestaurantMenu />}
                            />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/search" element={<Search />} />
                            <Route
                                path="*"
                                element={<h1>coming soon ......</h1>}
                            />
                        </Route>
                    </Routes>
                </Suspense>
            </div>
            {/* </Visibility.Provider> */
        // </Coordinates.Provider> */}
        // </CartContext.Provider>
    );
}

export default App;