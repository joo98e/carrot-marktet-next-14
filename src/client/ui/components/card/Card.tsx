"use client"

import React from "react"

interface Props {
  title: string
  desc: string
}

const Card = ({ title, desc }: Props) => {
  return (
    <div
      className={
        "grid grid-rows-1 gap-8 p-4 rounded-2xl bg-white box-border shadow-gray-500"
      }
    >
      <div className={"row-span-2 flex flex-col"}>
        <span className={"text-gray-600 font-semibold"}>{desc}</span>
        <span className={"font-semibold text-[24px] leading-8"}>{title}</span>
      </div>
      <div className={""}>
        <div className={"w-10 h-10 bg-orange-300 rounded-full"}></div>
      </div>
      <div className={""}>
        <span>Today 9:30 ~ 10:30</span>
      </div>
      <div className={""}>123</div>
    </div>
  )
}

export default Card
