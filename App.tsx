import React from "react";
import AboutPage from "./pages/AboutPage";
import DetailPage from "./pages/DetailPage";
import MainPage from "./pages/MainPage";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";

export default function App() {
    // return <MainPage />;
    // return <AboutPage />;
    return (
        <TailwindProvider utilities={utilities}>
            {/* <DetailPage /> */}
            <MainPage />
        </TailwindProvider>
    );
}
