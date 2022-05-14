import { FC } from "react";

interface Props {
    service: {
        title: string;
        description: string;
        price: number;
    };
}

const Service: FC<Props> = ({ service: { title, description, price } }) => {
    return (
        <div>
            <h3 className="mb-4 text-2xl font-semibold text-white md:text-3xl">
                {title} -{" "}
                <span className="font-bold text-yellow-600">${price}</span>
            </h3>
            <p className="text-lg text-white">{description}</p>
        </div>
    );
};

export default Service;
