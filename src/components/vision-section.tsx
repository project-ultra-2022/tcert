import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import DotSquare from "./dot-quare";

export default function VisionSection() {
  return (
    <section className="max-w-[90%] h-[100%] mx-auto bg-gradient-to-bl from-[#C8D9E7]/50 to-gray-100 py-8 lg:py-16 px-4">
      <div className="space-y-6 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center lg:space-y-0 ps-5">
        <div>
          <div className="space-y-2">
            <h2 className="text-sm uppercase tracking-wide text-muted-foreground text-[#0B001A]">
              ACERCA DE NOSOTROS
            </h2>
            <h1 className="font-light tracking-tighter text-5xl flex flex-nowrap text-[#0B001A]">
              NUESTRA VISIÓN
            </h1>
          </div>

          <div className="flex flex-wrap gap-2 my-6">
            <Badge variant="default" className="text-sm">
              Agilidad
            </Badge>
            <Badge variant="default" className="text-sm">
              Innovación
            </Badge>
            <Badge variant="default" className="text-sm">
              Calidad
            </Badge>
          </div>

          <DotSquare />
          <div className="block lg:hidden">
            <div className="absolute aspect-square w-[50%] max-w-xs right-14">
              <Image
                src="https://s3-alpha-sig.figma.com/img/8b84/cb79/fcc0de601167de5db1cb9e2aecf7b760?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R3ZXOuENvyzfxwkUjERVmuPFG97dfpbSPqCiQ78QaAhoRuspz8N9UPMvxJFbPzmMC5hL2NiQ6MbpQHVegBCbTH6OtM69bk96TYKm0We3xJ2k~W2smYfrPHAsod6OTcKtAIYNRVh2CDdKBV-xlf9KksA-HSnbbYLTBiWNm3-J17N7JFPWAaSRT9RN7v6ZOwqhfEfV0doNq3PNWBb2f8yhrDwbpvqg88E1c5I9CAOUApqy8FbB5gKaYGxI0NBl4imk3tITZriJsh29aVHe9XyINJkfOIuqQWvUrwzRU09dknPSdS1OMi5P56IEA6IR4Cb5lwV1M26KI5HcheKTGYbmag__"
                alt="Persona mostrando entusiasmo con pulgares arriba"
                width={400}
                height={400}
                className="rounded-3xl object-cover"
                priority
              />
            </div>
          </div>
          <div className="mt-[25vh] mb-10">
            <p className="text-base text-[#0B001A] ">
              Ser líderes en la certificación profesional, formando personas
              altamente capacitadas para enfrentar con éxito los retos de la
              vida laboral y garantizar la excelencia en cada etapa del proceso.
            </p>
          </div>

          <Button variant={"default"} size={"lg"}>
            VER MÁS
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* desktop */}
        <div className="hidden lg:block relative aspect-square md:aspect-auto w-full max-w-2xl mx-auto">
          <Image
            src="https://s3-alpha-sig.figma.com/img/8b84/cb79/fcc0de601167de5db1cb9e2aecf7b760?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R3ZXOuENvyzfxwkUjERVmuPFG97dfpbSPqCiQ78QaAhoRuspz8N9UPMvxJFbPzmMC5hL2NiQ6MbpQHVegBCbTH6OtM69bk96TYKm0We3xJ2k~W2smYfrPHAsod6OTcKtAIYNRVh2CDdKBV-xlf9KksA-HSnbbYLTBiWNm3-J17N7JFPWAaSRT9RN7v6ZOwqhfEfV0doNq3PNWBb2f8yhrDwbpvqg88E1c5I9CAOUApqy8FbB5gKaYGxI0NBl4imk3tITZriJsh29aVHe9XyINJkfOIuqQWvUrwzRU09dknPSdS1OMi5P56IEA6IR4Cb5lwV1M26KI5HcheKTGYbmag__"
            alt="Persona mostrando entusiasmo con pulgares arriba"
            width={800}
            height={800}
            className="rounded-3xl object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
