import { Scissors, SprayCan } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    icon: <Scissors className="w-8 h-8" />,
    name: "Corte Masculino",
    price: "R$ 60",
    description: "Corte personalizado com técnicas modernas e acabamento impecável para realçar seu estilo.",
  },
  {
    icon: <SprayCan className="w-8 h-8" />,
    name: "Barba",
    price: "R$ 40",
    description: "Modelagem e aparação de barba com navalha quente e produtos premium para pele sensível.",
  },
  {
    icon: <Scissors className="w-8 h-8" />,
    name: "Corte + Barba",
    price: "R$ 90",
    description: "Combo completo com corte e barba para uma transformação total. O pacote mais procurado.",
  },
  {
    icon: <SprayCan className="w-8 h-8" />,
    name: "Tratamento Capilar",
    price: "R$ 80",
    description: "Hidratação profunda e tratamento capilar com produtos de alta performance.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-body font-medium">
              O que oferecemos
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mt-4 text-foreground">
              Nossos <span className="gold-text-gradient">Serviços</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={service.name} delay={index * 100}>
              <div className="group bg-card border border-border rounded-lg p-8 text-center hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="font-display text-xl font-semibold mb-2 text-foreground">{service.name}</h3>
                <p className="text-primary text-2xl font-bold font-display mb-4">{service.price}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
