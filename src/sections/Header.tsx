import { FC } from "react";
import { Navbar } from "../components";

const Header: FC = () => {
    return (
        <header className="fixed top-0 w-screen py-5 shadow-sm bg-black/50 backdrop-saturate-50">
            <div className="container mx-auto md:w-9/12 px-7 md:px-0">
                <Navbar />
            </div>
        </header>
    );
};

export default Header;
