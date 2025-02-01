import Footer from "@/Pages/Shared/Footer/Footer";
import NavBar from "@/Pages/Shared/NavBar/NavBar";
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <NavBar/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default Main;