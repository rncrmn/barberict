import { FC } from "react";
import { Service } from "../components";

const services = [
    {
        title: "Haircut",
        description:
            "In eget justo eget dolor dictum scelerisque. Ut porta tristique viverra quam quis iaculis.",
        price: 39,
    },
    {
        title: "Straight Razor Shave",
        description:
            "In eget justo eget dolor dictum scelerisque. Ut porta tristique viverra quam quis iaculis.",
        price: 42,
    },
    {
        title: "Buzz Cut",
        description:
            "In eget justo eget dolor dictum scelerisque. Ut porta tristique viverra quam quis iaculis.",
        price: 24,
    },
    {
        title: "Long Haircut",
        description:
            "In eget justo eget dolor dictum scelerisque. Ut porta tristique viverra quam quis iaculis.",
        price: 39,
    },
    {
        title: "Kids Cut",
        description:
            "In eget justo eget dolor dictum scelerisque. Ut porta tristique viverra quam quis iaculis.",
        price: 20,
    },
    {
        title: "Hair Trim ",
        description:
            "In eget justo eget dolor dictum scelerisque. Ut porta tristique viverra quam quis iaculis.",
        price: 20,
    },
];

const Services: FC = () => {
    return (
        <div className="py-10 bg-black md:py-20" id="services">
            <div className="container px-8 py-3 mx-auto md:py-6 md:w-9/12 md:px-0">
                <div className="mb-16 text-center">
                    <h2 className="mb-6 text-lg font-semibold text-slate-300">
                        Services
                    </h2>
                    <p className="font-serif text-4xl font-semibold leading-normal text-white md:text-5xl">
                        What We Offer
                    </p>
                </div>

                <div className="grid gap-10 md:grid-cols-2">
                    {services.map((service, index) => (
                        <Service
                            service={service}
                            key={service.title + index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
