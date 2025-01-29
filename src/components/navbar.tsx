"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-2 left-0 right-0 max-w-[98%] mx-auto z-50 backdrop-blur-lg bg-[#670EE2]/5  rounded-lg px-10">
      <nav className="flex items-center justify-between h-16">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/complete/small_complete.png"
            alt="T-Cert Logo"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/acerca-de"
            className="text-[#331263] font-extralight hover:text-[#670EE2]"
          >
            Acerca de
          </Link>
          <Link
            href="/cursos"
            className="text-[#331263] font-extralight hover:text-[#670EE2]"
          >
            Cursos
          </Link>
          <Link
            href="/contactanos"
            className="text-[#331263] font-extralight hover:text-[#670EE2]"
          >
            Contactanos
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" asChild>
            <Link href="/iniciar-sesion">Iniciar sesión</Link>
          </Button>
          <Button
            className="text-white bg-[#670EE2] hover:bg-[#670EE2]/90"
            asChild
          >
            <Link href="/registrarse">Registrarse</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full p-0">
            <div className="h-full bg-gradient-to-b from-purple-600 to-red-400 text-white p-6">
              <SheetHeader className="flex justify-end">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setOpen(false)}
                  className="text-white"
                >
                  <X className="h-6 w-6" />
                </Button>
              </SheetHeader>
              <div className="flex flex-col items-center gap-8 mt-8">
                <Button
                  variant="ghost"
                  className="text-white text-xl w-full"
                  asChild
                >
                  <Link href="/crear-cuenta" onClick={() => setOpen(false)}>
                    Registrarse
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  className="text-white text-xl w-full"
                  asChild
                >
                  <Link href="/iniciar-sesion" onClick={() => setOpen(false)}>
                    Iniciar sesión
                  </Link>
                </Button>
                <div className="w-full h-px bg-white/20 my-4" />
                <Button
                  variant="ghost"
                  className="text-white text-xl w-full"
                  asChild
                >
                  <Link href="/acerca-de" onClick={() => setOpen(false)}>
                    Acerca de nosotros
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  className="text-white text-xl w-full"
                  asChild
                >
                  <Link href="/cursos" onClick={() => setOpen(false)}>
                    Cursos
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  className="text-white text-xl w-full"
                  asChild
                >
                  <Link href="/contactanos" onClick={() => setOpen(false)}>
                    Contactanos
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
