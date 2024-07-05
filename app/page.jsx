import Image from "next/image";
import logo from "@/public/logo.png";
export default function Home() {
  // const socials
  return (
    <main className="flex flex-col items-center justify-center p-24 text-center h-screen">
      <section className="lg:w-3/4 w-full flex flex-col justify-center items-center ">
        <Image alt="Logo de AP Techno" src={logo} width={400} />
        <div className="w-full">
          <h1 className="lg:text-6xl text-2xl font-bold largeShadow`">
            Estamos trabajando para <span className="">REVOLUCIONAR</span> la
            experiencia del cliente.
          </h1>
          {/* <article className=" text-xl mt-16 flex w-full justify-center items-center">
            <div className="lg:w-2/4 w-3/4">

            </div>
          </article> */}
        </div>
      </section>
    </main>
  );
}
