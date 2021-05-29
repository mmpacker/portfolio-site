import React from "react"
import image from "../cool-lt_rev-white-orange-background.png"

export default function Home() {
  return (
    <main>
      <img src={ image } alt="white orange background" className="absolute object-cover w-full h-full"/>
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-green-500 font-bold cursive leading-none lg:leading-snug home-name">Hi! 👋 I'm Matt</h1>
      </section>
    </main>
  )
}