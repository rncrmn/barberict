import { FC } from "react";
import { ScissorsIcon } from "@heroicons/react/solid";

const Intro: FC = () => {
    return (
        <div
            className="bg-[url('./assets/img/intro-bg.jpeg')] bg-cover bg-center"
            id="home"
        >
            <div className="container flex flex-col items-center justify-center h-screen gap-12 px-8 mx-auto text-center md:w-9/12 md:px-0">
                <h1 className="mt-12 font-serif text-5xl font-black text-center text-white md:text-7xl">
                    <ScissorsIcon className="w-12 h-12 mb-6 ml-auto mr-auto text-white md:w-16 md:h-16" />
                    Barberict Barber Shop
                </h1>
                <p className="text-2xl text-white">
                    The most authentic barbershop experience.
                </p>
                <button
                    type="button"
                    className="py-3 text-lg font-medium leading-tight text-white uppercase transition duration-150 ease-in-out bg-yellow-600 rounded shadow-md px-7 hover:bg-yellow-700 hover:shadow-lg focus:bg-yellow-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-800 active:shadow-lg"
                >
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default Intro;
