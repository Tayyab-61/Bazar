import Image from "next/image";
import Hero from "./Components/Hero";
import Collections from "./Components/Collections";
import Footer from "./Components/Footer";

export default function Home() {
  return (
   <main>
    <Hero/>
    <div className="flex mt-5 justify-center">
    <div className="text-center">
      <p className="font-thin text-xl md:text-2xl lg:text-3xl">Virtual Collections</p>
      <h1 className=" mt-2 font-bold font-serif text-2xl md:text-4xl lg:text-5xl">Features Products</h1>
      <p className=" mt-2 font-mono text-lg">Bazar Products gives an acceptable quality for your Life Style</p>
    </div>
    </div>

    
    <div className="flex w-full mt-5 justify-center p-6" >
      <Collections/>
    </div>
    <div >
      <Footer/>
    </div>
   </main>
  );
}
