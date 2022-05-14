import { FC } from "react";
import AboutBanner from "../assets/img/about-banner.png";

const About: FC = () => {
    return (
        <div className="py-10 bg-black md:py-20" id="about">
            <div className="container px-8 py-3 mx-auto md:py-6 md:w-9/12 md:px-0">
                <div className="grid gap-10 md:grid-cols-2">
                    <div className="flex flex-col justify-center gap-6">
                        <h2 className="text-lg font-semibold text-slate-300">
                            About Us
                        </h2>
                        <p className="font-serif text-4xl font-semibold leading-normal text-white md:text-6xl">
                            A Traditional Barber & Shop
                        </p>
                        <p className="text-lg text-white">
                            Curabitur aliquet quam id dui posuere blandit.
                            Quisque velit nisi, pretium ut lacinia in, elementum
                            id enim. Donec sollicitudin molestie malesuada.
                            Curabitur arcu erat, accumsan id imperdiet et,
                            porttitor at sem. Donec sollicitudin mole
                        </p>
                        <button
                            type="button"
                            className="w-40 py-3 text-lg font-medium leading-tight text-white uppercase transition duration-150 ease-in-out bg-yellow-600 rounded shadow-md px-7 hover:bg-yellow-700 hover:shadow-lg focus:bg-yellow-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-800 active:shadow-lg"
                        >
                            Book Now
                        </button>
                    </div>
                    <div>
                        <img
                            src={AboutBanner}
                            width=""
                            height=""
                            alt="about banner"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
