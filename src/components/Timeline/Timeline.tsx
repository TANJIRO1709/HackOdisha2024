"use client";
import React, { useState } from "react";
import "./Timeline.css";
import Title from "../commons/Title";
import Day from "./components/Day";
import Schedule from "./components/Schedule";
import days from "./constants";
import Image from "next/image";
import decor1 from "./assets/decor1.svg";
import decor2 from "./assets/decor2.svg";
import decor3 from "./assets/decor3.svg";
import { Parallax } from "react-scroll-parallax";

const numbersArray = Array.from(
    { length: days.length },
    (_, index) => index + 1
);

const Timeline = () => {
    const [day, setDay] = useState(0);

    return (
        <main
            className="relative flex flex-col items-center bg-[#FFF6E0] overflow-x-hidden z-40  pb-[10rem]"
            id="timeline-main"
        >
            <div id="timeline-main-background"></div>

            <Title title="TIMELINE" />

            <div id="day" className="h-16 flex justify-center gap-16 mb-8">
                {numbersArray.map((item, idx) => {
                    return (
                        <div
                            className=" cursor-pointer"
                            key={idx}
                            onClick={() => {
                                setDay(idx);
                            }}
                        >
                            <Day
                                number={item}
                                active={day == idx ? true : false}
                            />
                        </div>
                    );
                })}
            </div>

            <div
                id="schedule-container"
                className="flex w-screen justify-evenly px-6"
            >
                <div
                    id="left"
                    className="flex-col justify-between w-1/6 items-center hidden sm:flex pointer-events-none"
                >
                    <Parallax
                        className="w-12 md:w-24"
                        speed={10}
                        rotate={[-90, 90]}
                    >
                        <Image
                            className="size-20"
                            height={50}
                            width={50}
                            src={decor1}
                            alt="up"
                        />
                    </Parallax>

                    <Parallax
                        className="md:w-24 w-12"
                        speed={8}
                        rotate={[-90, 90]}
                    >
                        <Image
                            className="size-20"
                            height={50}
                            width={50}
                            src={decor2}
                            alt="up"
                        />
                    </Parallax>
                </div>

                <Schedule date={days[day].date} events={days[day].events} />

                <div
                    id="right"
                    className="justify-center items-center w-1/6 hidden sm:flex pointer-events-none"
                >
                    <Parallax
                        className="md:w-16 w-12"
                        speed={10}
                        rotate={[-90, 90]}
                    >
                        <Image
                            className="size-20"
                            height={50}
                            width={50}
                            src={decor3}
                            alt="up"
                        />
                    </Parallax>
                </div>
            </div>
        </main>
    );
};

export default Timeline;
