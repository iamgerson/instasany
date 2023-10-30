import Image from "next/image";
import { GridContainer } from "./Grid";

import Mockup from '/public/mockup-main.png'

export function SectionCards() {
  return(
    <section className="w-full">
    
      <Image src={Mockup} alt="Mockup main" className="sticky top-0 mx-auto -mt-[32rem]"/>
      <h2>Faça <span>você</span> mesmo de casa</h2>
      
    </section>
  )
}