'use client'
import Image from "next/image";
import { useState, useEffect } from 'react'

const data = [
    {
      id: 1,
      title: "always fresh & always crispy & always hot",
      image: "/slide1.png",
    },
    {
      id: 2,
      title: "we deliver your order wherever you are in NY",
      image: "/slide2.png",
    },
    {
      id: 3,
      title: "the best pizza to share with your family",
      image: "/slide3.jpg",
    },
  ];

export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(2);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev+1) % data.length)
        }, 2500);

        return () => {clearInterval(interval)}
    }, []);
    
    return (
        <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50 ">
            {/* TEXT CONTAINER */}
            <div className="flex-1 flex items-center justify-center flex-col gap-2 text-red-500 font-bold">
                <h1 className="text-3xl text-center uppercase p-4 md:p-10 md:text-5xl xl:text-7xl">{data[currentSlide].title}</h1>
                <button className="bg-red-500 text-white py-4 px-8">Order now</button>
            </div>

            {/* IMAGE CONTAINER */}
            <div className="w-full flex-1 relative">
                <Image src={data[currentSlide].image} alt='slider image' fill className="object-cover"/>
            </div>
        </div>
    )
}