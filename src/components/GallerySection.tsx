import ScrollReveal from "./ScrollReveal";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Corte masculino moderno" },
  { src: gallery2, alt: "Modelagem de barba" },
  { src: gallery3, alt: "Ferramentas premium" },
  { src: gallery4, alt: "Resultado impecável" },
  { src: gallery5, alt: "Ambiente exclusivo" },
  { src: gallery6, alt: "Tratamento profissional" },
];

const GallerySection = () => {
  return (
    <section id="galeria" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-body font-medium">
              Nosso trabalho
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mt-4 text-foreground">
              <span className="gold-text-gradient">Galeria</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <ScrollReveal key={image.alt} delay={index * 80}>
              <div className="group relative overflow-hidden rounded-lg cursor-pointer aspect-square">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                  <span className="text-foreground text-sm tracking-widest uppercase font-medium">
                    {image.alt}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
