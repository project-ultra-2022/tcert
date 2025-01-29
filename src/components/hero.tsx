/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "@/components/ui/button";
import DotSquare from "./dot-quare";

const Hero: React.FC = () => {
  return (
    <section className="h-[90vh] max-w-[90%] mx-auto bg-gradient-to-b from-white via-sky-100 to-transparent flex flex-col justify-center">
      <DotSquare top="20%" left="45%" />
      <DotSquare bottom="20%" right="10%" />
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid grid-cols-2 gap-2 sm:gap-4 lg:grid-cols-7 items-end lg:gap-x-4 lg:gap-y-2 mb-8">
          <div className="lg:col-span-2">
            <img
              src="https://s3-alpha-sig.figma.com/img/4c9a/58e1/9fad99803d063e5bec7845badfa3cf1f?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ccgVbGInQ6sFToFt~GeseRpJ6ypBwZ6etJ5M4gWPTN8w3SmZG4YLKbbN3I~x0B8849WbNjqdHk8D18DfhqTMjRaMB2XK38H8HMOYYIqpZrelw6zJeR0loYwNeDUaOzoDfugdocBEqsDnp6bh9fwHQzfbajCkLhIQwGaDPwfXUc5et4smEbOldcpTFODpKzAQK6u4jEzJjGe3Cj1-2hCrwch9LyV~bx-O8WYZgNkshHmaUK3ek~2t-8k~JFCnd0lxHYTw7a7c2wcS1H8QanYbJ2-~uhshuUrlfuoxGlMQ1~9ySFMeW1JP1NzASv6OB-6-5LiQhy4ETbWCIA~BrdcPyg__"
              alt="Imagen 1"
              className="rounded-lg shadow-lg w-full h-[170px] object-cover"
            />
          </div>
          <div className="lg:col-span-1 hidden sm:block">
            <img
              src="https://s3-alpha-sig.figma.com/img/8ff7/07b3/0141ac58e9c2e17d29a13b418780c2a7?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FvPYIHI6KkpWqjXMmSJpHCEGDNsPCL~ufRocltrZlJcioiOIiZgn62OuMwFrFzsqk1JtPxxUl0IXRO-gfDkMj7d2ay57tSJjWtPsZFVbZF~DaQ2bWqBqS2A2OFkK7cm9zyzrBHe4LjwuEZFj6bKTg3ogl1~~Gg3plHCB3E~Idre7u9cc7JyvYDVoVSpVIACidcC9Swdy44fNIR6-1pnoMxWc7Z0o550qOaYiPlxtov25aFxfZrDVrxqWsUm5ry88UJosk8MXA4zOP4WiPSL3J1dm-Mpei2u722mNCjvY1stRMCGEUT4d76jLMfgeO0UlT-aQ3HxRMteZcOm3l0pW-Q__"
              alt="Imagen 2"
              className="rounded-lg shadow-lg w-full h-[200px] object-cover sm:w-full"
            />
          </div>
          <div className="lg:col-span-2">
            <img
              src="https://s3-alpha-sig.figma.com/img/9479/db1b/6a78c720c97e8d79778d7dbab02a29d1?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qs9AvruoIO4XuoIO8VT4XlV0IP~bkp4hXREpXzoIkKOaipbUdA~BCyJJhPKzP~WCBO4eB7GxRy5OmWOdT5v3UkjF7nFO9pUTHwHryDOdRpefipyNKVxAbINojP-JCD0MQHmf-qFY609kbEMlLWoETJP2QwveSkBPzpY-xEATwMxl~scVoXcbNZb36ZuOI-PXjE7ndpVA5FD6IS4MLbqpd1B~aAjVdMB2BxH~xheFcvIF8jz6-sfnZRox1vQ8xLbqQbQs8kmIYbJc69eyt5Ut7Zq1qTTLqzamiHqf23J~TrhkU5Wvm9wSGFJtNHXAlfslegGH6bSan1d-11iJ5ers0A__"
              alt="Imagen 3"
              className="rounded-lg shadow-lg w-full h-[130px] object-cover "
            />
          </div>
          <div className="lg:col-span-2 hidden sm:block">
            <img
              src="https://s3-alpha-sig.figma.com/img/a754/7f9b/131fbfd23251b997bd3d0ae898974224?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X8Sd4TFP2POfREtWV4Jl-YzvebPQ~3lGbMu7ctWk3YkQ-sB-1QFX8HhlfjGUS--NZ~Grru0ZjTsyQ9vCGS7VDmyFn4lytBWE0nvohWqFAiZ6wGbZyfD4uv1t3d02I4kp5tP9hN-NjBTmrmJkxyLcdfvac9F~-uOC21HN9nPhxXMrixTDDxpL6~4H7cQ~93Q4rMaZvHDjaDVuw1k82S8mwue5kiKjViuqB1Wn5Gx3BQluVkpruEGpCJz4OtpkzzEDnPxbJWk-P1txUZKOdBgEH1xyEtwg~GaYMobYBEee9bO8BpMNPVs5bXJBKvgrq0ODnCRPlQy19sU9gsB-~4nHJw__"
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
