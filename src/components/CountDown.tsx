'use client'

import Countdown from "react-countdown"

const endingDate = new Date('2023-08-05')

export default function CountDown() {
    return (
        <Countdown className="text-yellow-300 text-5xl font-bold" date={endingDate}/>

    )
}