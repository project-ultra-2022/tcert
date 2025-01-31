"use client";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import DotSquare from "./dot-square";
import { useRouter } from "next/navigation";

interface SectionWithImageProps {
  miniTitle: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  right?: boolean;
  badges?: string[];
  buttonText?: string;
  showButton?: boolean;
}

export default function SectionWithImage({
  miniTitle,
  title,
  subtitle,
  imageSrc,
  right = true,
  badges = [],
  buttonText = "VER MÁS",
  showButton = true,
}: SectionWithImageProps) {
  const router = useRouter();

  return (
    <section className="max-w-[90%] mx-auto bg-gradient-to-bl from-[#C8D9E7]/50 to-gray-100 py-8 lg:py-16 px-4">
      <div
        className={`lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center ps-5 ${
          right ? "" : "lg:grid-cols-[auto_1fr]"
        }`}
      >
        {/* Imagen en desktop cuando right=false */}
        {!right && (
          <div className="hidden lg:block relative w-full max-w-md mx-auto">
            <Image
              src={imageSrc}
              alt={title}
              width={600}
              height={600}
              className="rounded-3xl object-cover w-full h-auto"
              priority
            />
          </div>
        )}

        {/* Texto */}
        <div>
          <div className="space-y-2">
            <h2 className="text-sm uppercase tracking-wide text-muted-foreground text-[#0B001A]">
              {miniTitle}
            </h2>
            <h1 className="font-light tracking-tighter text-5xl flex flex-nowrap text-[#0B001A]">
              {title}
            </h1>
          </div>

          {badges.length > 0 && (
            <div className="flex flex-wrap gap-2 my-6">
              {badges.map((badge, index) => (
                <Badge key={index} variant="default" className="text-sm">
                  {badge}
                </Badge>
              ))}
            </div>
          )}

          <DotSquare />

          {/* Imagen en mobile (50% de ancho y posición dinámica) */}
          <div className="block lg:hidden relative">
            <div
              className={`absolute w-1/2 max-w-xs ${
                right ? "right-10" : "left-1"
              }`}
            >
              <Image
                src={imageSrc}
                alt={title}
                width={400}
                height={400}
                className="rounded-3xl object-cover w-full h-auto"
                priority
              />
            </div>
          </div>

          <div className="mt-[20vh] lg:mt-[25vh] mb-10 max-w-[90%]">
            <p className="text-base text-[#0B001A]">{subtitle}</p>
          </div>

          {/* Botón opcional */}
          {showButton && (
            <Button
              variant={"default"}
              size={"lg"}
              onClick={() => router.push("/about-us")}
            >
              {buttonText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>

        {/* Imagen en desktop cuando right=true */}
        {right && (
          <div className="hidden lg:block relative w-full max-w-md mx-auto">
            <Image
              src={imageSrc}
              alt={title}
              width={600}
              height={600}
              className="rounded-3xl object-cover w-full h-auto"
              priority
            />
          </div>
        )}
      </div>
    </section>
  );
}
