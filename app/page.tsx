import Image from "next/image";
import Script from "next/script";
import myFace from "@/assets/images/hero/myFace.jpeg";
import pcporto1 from "@/assets/images/project/pcporto1.png";
import htmlLogo from "@/assets/images/skills/html.png"
import cssLogo from "@/assets/images/skills/css.png"
import jsLogo from "@/assets/images/skills/javascript.png"
import nextjsLogo from "@/assets/images/skills/nextjs.png"
import tailwindLogo from "@/assets/images/skills/tailwind.png"
import reactLogo from "@/assets/images/skills/react.png"
import figmaLogo from "@/assets/images/skills/figma.png"
import gitlabLogo from "@/assets/images/skills/gitlab.png"
import NavbarClient from "./components/navbarClient";

export default function Home() {
  return (
    <div>
      <Script src="/js/main.js" />
      <NavbarClient/>
      {/* <header className="fixed z-50 bg-transparent backdrop-blur-lg w-full top-0 left-0 shadow-md flex items-center">
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
      </header> */}

      <section id="hero" className="w-full min-h-screen flex items-center pt-16 sm:pt-0">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="px-4">
            <h1 className="font-light text-secondary mb-2 text-lg md:text-xl lg:text-2xl">Hi There, I am</h1>
            <span className="text-black font-semibold text-3xl md:text-4xl xl:text-5xl 2xl:text-7xl">Muhammad Ilham Hilmi</span>
            <h2 className="text-secondary font-light mb-6 text-md md:text-lg lg:text-xl 2xl:text-3xl">Junior Frontend Developer</h2>
            <a href="" className="font-semibold border border-transparent bg-primary rounded-full px-5 py-2 text-white hover:bg-sky-700 duration-300 shadow-lg lg:text-xl 2xl:text-2xl">Contact Me</a>
          </div>
          <div className="px-4 mt-10 sm:mx-auto lg:mx-0 w-full flex justify-center lg:w-auto">
            <div className="">
              <Image src={myFace} alt="myFace" className="rounded-full shadow-primary shadow-2xl w-[330px] sm:w-[350px] md:w-[400px] xl:w-[450px] 2xl:w-[500px]" />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="w-full min-h-screen flex items-center bg-slate-100 2xl:bg-darkb pt-16">
        <div className="container mx-auto 2xl:bg-white 2xl:p-32 2xl:rounded-4xl">
          <div className="px-4 text-center">
            <h1 className="uppercase font-semibold text-secondary text-lg mb-3 md:text-xl 2xl:text-2xl">About me</h1>
            <h1 className="font-bold text-darkb text-4xl mb-5 md:text-4xl 2xl:text-6xl">Get to know me better</h1>
            <div className="px-4">
              <p className="text-slate-500 mx-auto sm:max-w-2xl md:text-lg 2xl:text-xl 2xl:max-w-4xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error sapiente possimus nulla dolorem iure, quisquam veritatis esse adipisci, non soluta corporis quia temporibus nihil illo ducimus consequuntur accusantium enim consequatur. Fugiat quos tenetur unde corporis hic impedit distinctio, modi nisi. Necessitatibus, amet velit. Quos quae aliquam voluptates inventore non a porro! Sunt vitae, atque tempore mollitia molestias et neque accusantium hic iste nobis aspernatur voluptate. Eligendi ducimus doloremque culpa esse, quaerat ea optio ipsam labore provident delectus recusandae fugiat ratione, autem amet laboriosam. Dolorem officiis, doloremque qui eveniet officia animi necessitatibus, praesentium ipsum vitae recusandae eum doloribus maiores omnis libero.!</p>
            </div>
            <div className="flex justify-center space-x-5 mb-4 mt-8">
              <a href="https://instagram.com/ilhamhlmi" className="text-secondary border p-2 rounded-full hover:bg-primary hover:border hover:border-primary hover:text-white duration-300">
                <svg className="fill-current" width={30} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" /></svg>
              </a>
              <a href="https://github.com/ilhamhlmi" className="text-secondary border rounded-full p-2 hover:text-white hover:border-primary hover:bg-primary duration-300">
                <svg className="fill-current" width={30} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ilhamhilmi205@gmail.com" className="text-secondary border rounded-full p-2 hover:text-white hover:border-primary hover:bg-primary duration-300">
                <svg width={30} className="fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Gmail</title><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="project" className="min-h-screen bg-white w-full flex items-start pt-18 pb-18 lg:pb-0 lg:items-center">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="uppercase font-semibold text-secondary text-lg mb-3 md:text-xl 2xl:text-2xl">My recent project</h1>
            <h1 className="font-bold text-darkb text-3xl md:text-4xl 2xl:text-6xl mb-5 lg:mb-8 2xl:mb-10">A Glimpse of My Work</h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-items-center gap-y-4">
            <div className="rounded-lg overflow-hidden cursor-pointer relative group">
              <Image src={pcporto1} alt="pcporto1" className="w-[350px] lg:w-[425px] xl:w-[350px] 2xl:w-[450px] object-cover group-hover:scale-120 transform transition-transform duration-300" />
              <div className="absolute inset-0 bg-black/75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-400">
                <p className="uppercase text-white font-bold text-2xl">Placeholder title</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden cursor-pointer relative group">
              <Image src={pcporto1} alt="pcporto1" className="w-[350px] lg:w-[425px] xl:w-[350px] 2xl:w-[450px] object-cover group-hover:scale-120 transform transition-transform duration-300" />
              <div className="absolute inset-0 bg-black/75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-400">
                <p className="uppercase text-white font-bold text-2xl">Placeholder title</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden cursor-pointer relative group">
              <Image src={pcporto1} alt="pcporto1" className="w-[350px] lg:w-[425px] xl:w-[350px] 2xl:w-[450px] object-cover group-hover:scale-120 transform transition-transform duration-300" />
              <div className="absolute inset-0 bg-black/75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-400">
                <p className="uppercase text-white font-bold text-2xl">Placeholder title</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden cursor-pointer relative group">
              <Image src={pcporto1} alt="pcporto1" className="w-[350px] lg:w-[425px] xl:w-[350px] 2xl:w-[450px] object-cover group-hover:scale-120 transform transition-transform duration-300" />
              <div className="absolute inset-0 bg-black/75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-400">
                <p className="uppercase text-white font-bold text-2xl">Placeholder title</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden cursor-pointer relative group">
              <Image src={pcporto1} alt="pcporto1" className="w-[350px] lg:w-[425px] xl:w-[350px] 2xl:w-[450px] object-cover group-hover:scale-120 transform transition-transform duration-300" />
              <div className="absolute inset-0 bg-black/75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-400">
                <p className="uppercase text-white font-bold text-2xl">Placeholder title</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden cursor-pointer relative group">
              <Image src={pcporto1} alt="pcporto1" className="w-[350px] lg:w-[425px] xl:w-[350px] 2xl:w-[450px] object-cover group-hover:scale-120 transform transition-transform duration-300" />
              <div className="absolute inset-0 bg-black/75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-400">
                <p className="uppercase text-white font-bold text-2xl">Placeholder title</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="w-full bg-slate-100 2xl:bg-white min-h-screen flex items-center pt-16 pb-16 lg:pb-0">
        <div className="container mx-auto 2xl:bg-darkb 2xl:p-32 2xl:rounded-4xl">
          <div className="text-center px-4">
            <h1 className="uppercase font-semibold text-secondary text-lg mb-3 md:text-xl 2xl:text-2xl">My Skills</h1>
            <h1 className="font-bold text-darkb text-3xl md:text-4xl 2xl:text-6xl mb-5 lg:mb-8 2xl:mb-10 2xl:text-white">The Tools Behind My Work</h1>
          </div>
          <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-y-4 lg:gap-y-8 p-4">
            <div className="p-4 rounded-md grayscale hover:grayscale-0 transition duration-300 opacity-70 hover:opacity-100 w-[125px] border border-secondary">
              <Image src={htmlLogo} alt="htmlLogo"></Image>
            </div>
            <div className="p-4 rounded-md grayscale hover:grayscale-0 transition duration-300 opacity-70 hover:opacity-100 w-[125px] border border-secondary">
              <Image className="" src={cssLogo} alt="htmlLogo"></Image>
            </div>
            <div className="p-4 rounded-md grayscale hover:grayscale-0 transition duration-300 opacity-70 hover:opacity-100 w-[125px] border border-secondary">
              <Image src={jsLogo} alt="htmlLogo"></Image>
            </div>
            <div className="p-4 rounded-md grayscale hover:grayscale-0 transition duration-300 opacity-70 hover:opacity-100 w-[125px] border border-secondary">
              <Image src={nextjsLogo} alt="htmlLogo"></Image>
            </div>
            <div className="p-4 rounded-md grayscale hover:grayscale-0 transition duration-300 opacity-70 hover:opacity-100 w-[125px] border border-secondary">
              <Image src={tailwindLogo} alt="htmlLogo"></Image>
            </div>
            <div className="p-4 rounded-md grayscale hover:grayscale-0 transition duration-300 opacity-70 hover:opacity-100 w-[125px] border border-secondary">
              <Image src={reactLogo} alt="htmlLogo"></Image>
            </div>
            <div className="p-4 rounded-md grayscale hover:grayscale-0 transition duration-300 opacity-70 hover:opacity-100 w-[125px] border border-secondary">
              <Image src={figmaLogo} alt="htmlLogo"></Image>
            </div>
            <div className="p-4 rounded-md grayscale hover:grayscale-0 transition duration-300 opacity-70 hover:opacity-100 w-[125px] border border-secondary">
              <Image src={gitlabLogo} alt="htmlLogo"></Image>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white min-h-screen w-full flex items-center pt-16 pb-16 lg:pb-0">
        <div className="container mx-auto">
          <div className="text-center px-4">
            <h1 className="uppercase font-semibold text-secondary text-lg mb-3 md:text-xl 2xl:text-2xl">Contact</h1>
            <h1 className="font-bold text-darkb text-3xl md:text-4xl 2xl:text-6xl mb-5 lg:mb-8 2xl:mb-10">Reach Me Out</h1>
          </div>
          <div className="w-full px-4">
            <div className="space-y-4">
              <div className="mx-auto md:w-3/4 lg:w-2/3">
                <div className="flex flex-col items-center">
                  <h2 className="w-full uppercase text-primary font-semibold">Name</h2>
                  <input type="name" className="bg-white w-full px-6 py-3 border border-primary rounded-md outline-none text-black font-light" placeholder="ex: Muhammad Ilham Hilmi" />
                </div>
              </div>
              <div className="mx-auto md:w-3/4 lg:w-2/3">
                <div className="flex flex-col items-center">
                  <h2 className="w-full uppercase text-primary font-semibold">Email</h2>
                  <input type="name" className="bg-white w-full px-6 py-3 border border-primary rounded-md outline-none text-black font-light" placeholder="ex: ilhamhilmi206@gmail.com" />
                </div>
              </div>
              <div className="mx-auto md:w-3/4 lg:w-2/3">
                <div className="flex flex-col items-center">
                  <h2 className="w-full uppercase text-primary font-semibold">Message</h2>
                  <textarea className="bg-white w-full h-32 px-6 pt-2 border border-primary rounded-md outline-none text-black font-light" placeholder="Write some messages for me :D" />
                </div>
              </div>
              <div className="text-center">
                <button className="font-semibold border border-primary px-5 py-2 rounded-md text-white bg-primary hover:border-sky-700 hover:bg-sky-700 transition duration-300">Send</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-darkb pt-16 pb-2">
        <div className="container mx-auto  px-4">
          <div className="flex justify-start">
            <h1 className="text-lg text-secondary font-semibold">Muhammad Ilham Hilmi | Portfolio</h1>
          </div>
          <div className="flex flex-col mt-5 space-y-1">
            <h2 className="text-lg font-bold text-secondary">Navigation</h2>
            <a href="#hero" className="text-md text-secondary hover:text-white font-light">Home</a>
            <a href="#about" className="text-md text-secondary hover:text-white font-light">About</a>
            <a href="#project" className="text-md text-secondary hover:text-white font-light">Project</a>
            <a href="#skills" className="text-md text-secondary hover:text-white font-light">Skills</a>
            <a href="#contact" className="text-md text-secondary hover:text-white font-light">Contact</a>
          </div>
          <div className="flex justify-start space-x-5 mt-5">
            <a href="" className="text-secondary p-2 border rounded-full hover:bg-primary hover:border-primary hover:text-white transition duration-300">
              <svg className="fill-current" width={30} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" /></svg>
            </a>
            <a href="" className="text-secondary p-2 border rounded-full hover:bg-primary hover:border-primary hover:text-white transition duration-300">
              <svg className="fill-current" width={30} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
            </a>
            <a href="" className="text-secondary p-2 border rounded-full hover:bg-primary hover:border-primary hover:text-white transition duration-300">
              <svg width={30} className="fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Gmail</title><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" /></svg>
            </a>
          </div>
          <div className="mt-10 flex justify-center">
            <p className="text-secondary font-light text-md">© 2025 Muhammad Ilham Hilmi</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
