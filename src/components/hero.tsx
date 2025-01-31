/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "@/components/ui/button";
import DotSquare from "./dot-square";

const Hero: React.FC = () => {
  return (
    <section className="h-[90vh] max-w-[90%] mx-auto bg-gradient-to-b from-white via-sky-100 to-transparent flex flex-col justify-center">
      <DotSquare top="20%" left="45%" />
      <DotSquare bottom="20%" right="10%" />
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid grid-cols-2 gap-2 sm:gap-4 lg:grid-cols-7 items-end lg:gap-x-4 lg:gap-y-2 mb-8">
          <div className="lg:col-span-2">
            <img
              src="/selected-images/one.png"
              alt="Imagen 1"
              className="rounded-lg shadow-lg w-full h-[170px] object-cover"
            />
          </div>
          <div className="lg:col-span-1 hidden sm:block">
            <img
              src="/selected-images/two.png"
              alt="Imagen 2"
              className="rounded-lg shadow-lg w-full h-[200px] object-cover sm:w-full"
            />
          </div>
          <div className="lg:col-span-2">
            <img
              src="/selected-images/three.jpg"
              alt="Imagen 3"
              className="rounded-lg shadow-lg w-full h-[130px] object-cover "
            />
          </div>
          <div className="lg:col-span-2 hidden sm:block">
            <img
              src="/selected-images/four.jpg"
              alt="Imagen 4"
              className="rounded-lg shadow-lg w-full h-[170px] object-cover"
            />
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          TU RUTA HACIA UNA MEJOR <br />
          <span className="font-normal">VERSIÓN DE TI MISMO</span>
        </h1>
        <p className="text-sm sm:text-lg text-gray-600 mb-6">
          En T-CERT potenciamos tu crecimiento profesional con herramientas de
          calidad que te preparan para conquistar los desafíos del mercado.
        </p>
        <Button size="lg" variant="default">
          EXPLORAR CURSOS →
        </Button>
      </div>
    </section>
  );
};

export default Hero;
