"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { countries, Country } from "../../utils/countries";

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log("Form submitted:", data);
  };

  return (
    <div className="relative min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="absolute inset-0 bg-[url('https://s3-alpha-sig.figma.com/img/03fb/d36b/201ccca1044519c63931535036fcc959?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TShujQed-ipdH2VNXiNkXBYw2~3Ogqh2fSkgqr34FhMd3GgyLYSwj-qpXfmnLGZfr~PiivhkhuhjXFs2Bpz4UwAt1aB2E-A1xUnos~yLDFZ2EPoniovUCOtNrnV7ih2tdjI0XnKFG1JVtfJaKopN4ccMxMJHoFarLpgNgaUiJofLQHelUB-ancHCZmWHGHAq3R4JtIhim-wAS9lmkaWw01PvQgkNPA~YFLfINOsXoX6s6bOlTnfJCJIHVyP8AFQ0bNggodjauLMfQfW7CFwaH5mKp9-oxJKgkD17rub~wYG8qOSj~Cted9H-~BIv3mGH10ZkjBA3SvQwO6SXhSmQZg__')] bg-cover bg-center opacity-10"></div>
      <div className="relative mx-auto max-w-6xl">
        {/* Title section - visible on all screens */}
        <div className="mb-8 sm:hidden">
          <h1 className="text-4xl font-bold tracking-tight">
            FORMULARIO DE CONTACTO
          </h1>
          <p className="mt-4 text-gray-600">
            Completa el formulario y nos pondremos en contacto contigo lo antes
            posible
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Quote section - Only visible on md and up */}
          <div className="hidden md:block md:mt-20">
            <h1 className="text-4xl font-bold tracking-tight">
              FORMULARIO DE CONTACTO
            </h1>
            <p className="mt-4 text-gray-600">
              Completa el formulario y nos pondremos en contacto contigo lo
              antes posible
            </p>

            <p className="text-gray-700 text-3xl my-5 font-light">
              <span className="text-4xl mt-1 text-indigo-600">&quot;</span>
              El conocimiento es el puente hacia el progreso, y cada
              certificación es un paso más hacia el futuro que construimos.
              <span className="text-4xl mt-1 text-indigo-600">&quot; </span>
            </p>
          </div>

          {/* Right Column - Form */}
          <Card className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Nombre*</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Placeholder"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="company">Empresa*</Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Placeholder"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">Correo electrónico*</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Placeholder"
                    required
                  />
                </div>

                <div className="grid grid-cols-5 gap-2">
                  <div className="col-span-2">
                    <Label htmlFor="country">Teléfono*</Label>
                    <Select defaultValue="+57">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map((country: Country, index: number) => (
                          <SelectItem key={index} value={country.dial_code}>
                            <span className="flex items-center gap-2">
                              {country.flag} {country.dial_code}
                            </span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="col-span-3">
                    <Label htmlFor="phone">&nbsp;</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="3012226235"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="interest">¿En qué está interesado?*</Label>
                  <Input
                    id="interest"
                    name="interest"
                    placeholder="Placeholder"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="details">Detalles adicionales*</Label>
                  <Textarea
                    id="details"
                    name="details"
                    placeholder="Escriba información que creas relevante"
                    className="min-h-[120px]"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Checkbox id="terms" name="terms" required className="mt-1" />
                  <Label htmlFor="terms" className="text-sm leading-tight">
                    Al enviar este formulario, acepto los{" "}
                    <Link href="#" className="text-purple-600 hover:underline">
                      Términos y condiciones
                    </Link>{" "}
                    y la{" "}
                    <Link href="#" className="text-purple-600 hover:underline">
                      Política de privacidad
                    </Link>
                  </Label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700"
                >
                  Enviar
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
