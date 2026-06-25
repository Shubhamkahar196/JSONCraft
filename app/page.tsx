import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonEditor from "@/components/JsonEditor";
import OutputEditor from "@/components/OutputEditor";
import Toolbar from "@/components/Toolbar";
import Stats from "@/components/Stats";
import { main } from "framer-motion/client";

export default function Home() {
  return (
   <main className="min-h-screen bg-slate-950 text-white">
    <Header/>

    <section className="max-w-7xl mx-auto px-6 py-10">
<div className="text-center mb-10">
  <h1 className="text-5xl font-bold">JSONCraft</h1>
  <p className="text-slate-400 mt-3">
    Format . Validate. Beautify JSON
  </p>
</div>

<div className="grid lg:grid-cols-2 gap-6">
   <JsonEditor />

          <OutputEditor />

        </div>

        <Toolbar />

        <Stats />

    </section>
     <Footer />
   </main>
  );
}
