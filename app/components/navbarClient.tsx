"use client";

import { useState } from "react";

export default function NavbarClient() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed z-50 bg-transparent backdrop-blur-lg w-full top-0 left-0 shadow-md flex items-center">
        <div className="container mx-auto">

          <div className="flex justify-between items-center relative">

            <div className="py-6 px-4">
              <a href="#hero" className="text-primary font-bold">Ilham Hilmi | Portfolio</a>
            </div>

            <div className="flex flex-col px-4 lg:hidden">
              <button id="hamburger" className="block cursor-pointer" type="button" name="hamburger">
                <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
              </button>
            </div>

            <nav className="px-4 hidden lg:inline" id="nav-menu">
              <div className="space-x-20">
                <a href="#hero" className="text-primary hover:text-white hover:bg-primary hover:border hover:px-3 py-1 hover:rounded-full duration-300 border-transparent">Home</a>
                <a href="#about" className="text-primary hover:text-white hover:bg-primary hover:border hover:px-3 py-1 hover:rounded-full duration-300 border-transparent">About</a>
                <a href="#project" className="text-primary hover:text-white hover:bg-primary hover:border hover:px-3 py-1 hover:rounded-full duration-300 border-transparent">Project</a>
                <a href="#skills" className="text-primary hover:text-white hover:bg-primary hover:border hover:px-3 py-1 hover:rounded-full duration-300 border-transparent">Skills</a>
                <a href="#contact" className="text-primary hover:text-white hover:bg-primary hover:border hover:px-3 py-1 hover:rounded-full duration-300 border-transparent">Contact</a>
              </div>
            </nav>

            <nav id="nav-mobile" className="hidden absolute bg-white shadow-lg py-5 px-10 rounded-lg right-3 top-full">
              <div className="flex flex-col space-y-5 text-center py-4 px-4">
                <a href="#hero" className="text-secondary text-lg font-semibold hover:text-primary transition duration-300">Home</a>
                <a href="#about" className="text-secondary text-lg font-semibold hover:text-primary transition duration-300">About</a>
                <a href="#project" className="text-secondary text-lg font-semibold hover:text-primary transition duration-300">Project</a>
                <a href="#skills" className="text-secondary text-lg font-semibold hover:text-primary transition duration-300">Skills</a>
                <a href="#contact" className="text-secondary text-lg font-semibold hover:text-primary transition duration-300">Contact</a>
              </div>
            </nav>

          </div>
        </div>
      </header>
);
}
