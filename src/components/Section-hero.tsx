'use client'

import { useEffect, useRef } from "react";
import Image from "next/image";

import { GridContainer } from "./Grid";

import FileIcon from '/public/icon-file.svg';
import HandIcon from 'public/icon-hand.svg';
import HandIcon02 from '/public/icon-hand-02.svg';
import Mockup from '/public/mockup.svg';
import gsap from "gsap";


export function SectionHero() {
  const textHeroRef = useRef(null)
  const mockupLeftRef = useRef(null)
  const mockupRightRef = useRef(null)

  useEffect(() => {
    const textHero = textHeroRef.current
    const mLeft = mockupLeftRef.current
    const mRight = mockupRightRef.current

    gsap.fromTo(textHero, {
      opacity: 0,
      y: 20
    },{
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power4.out'
    })

    gsap.fromTo(mLeft, {
      rotate: 0
    }, {
      rotate: -10,
      duration: 1
    })
    
    gsap.fromTo(mRight, {
      rotate: 0
    }, {
      rotate: 10,
      duration: 1
    })

  }, [])

  return (
    <section className="relative w-full h-section-hero bg-hero bg-no-repeat bg-top bg-green-dark border-t border-t-green-border pt-16 overflow-hidden">
      <GridContainer className="flex flex-col items-center">
        <div ref={textHeroRef} className="w-full max-w-text-hero text-center opacity-0">
          <h3 className="text-xl font-medium text-smooth-green mb-4">Novo curso focado em instagram</h3>
          <h1 className="text-white text-7xl/normal font-semibold mb-2">Destrave as suas habilidades</h1>
          <div className="flex items-center justify-center gap-10">
            <button className="flex items-center gap-2">
              <Image src={FileIcon} alt="Icon file"/>
              <span className="text-white font-medium">Assinar lista de espera</span>              
            </button>
            <button className="py-4 px-5 bg-green-button hover:bg-opacity-90 rounded-full text-green-dark font-bold">
              Começar agora
            </button>
          </div>
        </div>
        <div className="relative w-full max-w-area-icons h-28 mt-4">
          <Image src={HandIcon} alt="Icon hand" className="absolute left-0 bottom-0"/>
          <Image src={HandIcon02} alt="Icon hand2" className="absolute top-0 right-0"/>
        </div>
        <div className="absolute -bottom-44 w-full max-w-area-mockups flex justify-between">
          <Image src={Mockup} alt="Mockup" className="relative top-[18px] left-[53px]" ref={mockupLeftRef}/>
          <Image src={Mockup} alt="Mockup" className="relative top-[18px] right-[53px]" ref={mockupRightRef}/>
        </div>
      </GridContainer>
    </section>
  )
}