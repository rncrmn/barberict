import { FC } from "react";

import {
    Header,
    Intro,
    About,
    Services,
    Gallery,
    Contact,
    Footer,
} from "./sections";

import "./App.css";

const App: FC = () => {
    return (
        <>
            <Header />
            <Intro />
            <About />
            <Services />
            <Gallery />
            <Contact />
            <Footer />
        </>
    );
};

export default App;
