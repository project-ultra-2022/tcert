import ContactForm from "@/components/contact-form";
import CourseCarousel from "@/components/course-carousel";
import Hero from "@/components/hero";
import VisionSection from "@/components/vision-section";

export default function Home() {
  return (
    <>
      <section className="max-h-[90vh] mt-10 lg:mt-16 bg-gradient-to-t from-[#C8D9E7] via-gray-100 to-white">
        <Hero />
      </section>
      <section className="bg-gradient-to-tr from-slate-50 via-blue-50 to-[#C8D9E7] pt-16">
        <VisionSection />
      </section>
      <section>
        <CourseCarousel />
      </section>
      <section>
        <ContactForm />
      </section>
    </>
  );
}
