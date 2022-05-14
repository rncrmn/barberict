import { FC } from "react";
import { images } from "../constants";

const galleryImages = [
    images.gallery1,
    images.gallery2,
    images.gallery3,
    images.gallery4,
    images.gallery5,
    images.gallery6,
    images.gallery7,
    images.gallery8,
    images.gallery9,
    images.gallery10,
    images.gallery11,
    images.gallery12,
];

const Gallery: FC = () => {
    return (
        <div className="py-10 bg-black md:py-20" id="gallery">
            <div className="container px-8 py-3 mx-auto md:py-6 md:w-9/12 md:px-0">
                <div className="mb-10">
                    <h2 className="mb-6 text-lg font-semibold text-slate-300">
                        Gallery
                    </h2>
                    <p className="font-serif text-4xl font-semibold leading-normal text-white md:text-5xl">
                        Our Exceptional Works
                    </p>
                </div>
                <div className="grid gap-2 md:grid-cols-4">
                    {galleryImages.map((galleryImage, index) => (
                        <img
                            src={galleryImage}
                            width=""
                            height=""
                            alt="gallery 1"
                            className="transition ease-in-out hover:scale-110"
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
