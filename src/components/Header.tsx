import Image from "next/image";
import Link from "next/link";

import { GridContainer } from "./Grid";

import LogoIcon from "/public/logo.svg";
import SearchIcon from "/public/icon-search.svg";
import UserIcon from "/public/icon-user.svg";

const arrayMenu = [
  "Início",
  "Benefícios",
  "Para quem é o curso?",
  "Preços Promocionais",
  "Sobre nós",
]

export function Header() {
  const activedLinkStyle = 'bg-smooth-green text-opacity-100 rounded-full'

  return (
    <header className="relative w-full h-24 bg-green-dark flex items-center">
      <GridContainer className="flex items-center justify-between">
        <Image src={LogoIcon} alt="Logo"/>

        <div className="flex items-center gap-20">
          <nav className="flex">
            
            {
              arrayMenu.map((item, index) => (
                <Link key={index} href="#" className={`px-3 py-1 text-white text-opacity-40 hover:text-opacity-100 transition-all ${index === 0 ? activedLinkStyle : ''}`}>{ item }</Link>
              ))
            }
          </nav>

          <div className="flex items-center gap-6">
            <button>
              <Image src={SearchIcon} alt="Icon search"/>
            </button>
            <button className="flex items-center gap-2">
              <Image src={UserIcon} alt="Icon User"/>
              <span className="text-white font-medium">Fazer Login</span>
            </button>
          </div>
        </div>
      </GridContainer>
    </header>
  )
}