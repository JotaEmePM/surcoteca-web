'use client'

import { cn } from "@/lib/utils"
import Link from "next/link"
import { useState } from "react"
import { Menu, Search, CircleUser, ShoppingBasket } from 'lucide-react'
import { IconBrandWhatsapp } from '@tabler/icons-react';
import { usePathname } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import UILogo from "./ui/logo"


export default function PageHeader() {
    const [state, setState] = useState(false)

    const menus = [
        { title: "Inicio", path: "/" },
        { title: "Ofertas", path: "/ofertas" },
        { title: "Nuevos", path: "/nuevos" },
        { title: "Usados", path: "/usados" },
        { title: "Preventa", path: "/preventa" },
        { title: "Accesorios", path: "/accesorios" },
        { title: "Contacto", path: "/contacto", icon: IconBrandWhatsapp }
    ]

    const pathname = usePathname()

    return (
        <nav className="bg-white w-full border-b md:border-0">
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <UILogo />
                    <div className="md:hidden">
                        
                    <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              <Menu />
            </button>
                    </div>
                </div>
                <div className={cn(`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0`,
                    state ? `block` : `hidden`)}>
                    <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                        {menus.map((item, idx) => (
                            <li key={idx} className={cn("text-gray-600 hover:text-indigo-600 cursor-pointer",
                                pathname === item.path ? `font-bold` : ``                                
                            )}>
                                <Link href={item.path}>
                                    {item.icon ? <item.icon /> : item.title}
                                </Link>
                            </li>
                        ))}
                        <li>
                        <form className="flex items-center space-x-2 border rounded-md p-2">
                            <Search className="h5 w-5 flex-none text-gray-300" />
                            <input type="text" placeholder="¿Qué andas buscando?" className="w-full outline-none appearance-none placeholder-gray-500 sm:w-auto text-black" />
                        </form>
                        </li>
                        <li>
                            <Link href="/login" className="text-gray-600 hover:text-indigo-600">
                                <CircleUser />                                
                            </Link>
                        </li>
                        <li>
                            <Link href="/cart" className="text-gray-600 hover:text-indigo-600 flex flex-row">
                                <ShoppingBasket />    
                                <Badge variant="destructive">1</Badge>                   
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}