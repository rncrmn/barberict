import { FC, useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { Link } from "react-scroll";

const Navbar: FC = () => {
    const [open, setopen] = useState<boolean | null>(false);

    return (
        <nav className="relative flex justify-between md:static ">
            <a
                href="/"
                className="flex items-center justify-center font-serif text-3xl font-bold text-yellow-600"
            >
                Barberict
            </a>
            <ul
                className={`absolute md:flex flex-col items-center bg-black/80 backdrop-blur-lg md:backdrop-blur-none md:bg-inherit w-full gap-2 top-16 md:static md:flex-row md:w-auto ease-in-out duration-300 ${
                    open ? "flex" : "hidden"
                }`}
            >
                {["home", "about", "services", "gallery", "contact"].map(
                    (item, index) => (
                        <li
                            className="w-full border-b-1 border-stone-900 md:border-b-0 md:w-auto"
                            key={item + index}
                        >
                            <Link
                                activeClass="active"
                                to={item}
                                spy={true}
                                smooth={true}
                                offset={-40}
                                href={`#${item}`}
                                className="block px-4 py-2 font-semibold text-white uppercase md:px-2 text-md hover:text-yellow-600"
                            >
                                {item}
                            </Link>
                        </li>
                    )
                )}
            </ul>
            <div className="flex items-center justify-center md:hidden">
                {open ? (
                    <XIcon
                        className="w-6 h-6 text-white"
                        onClick={() => setopen(false)}
                    />
                ) : (
                    <MenuIcon
                        className="w-6 h-6 text-white"
                        onClick={() => setopen(true)}
                    />
                )}
            </div>
        </nav>
    );
};

export default Navbar;
