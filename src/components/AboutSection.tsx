import ScrollReveal from "./ScrollReveal";
import galleryImage3 from "@/assets/gallery-3.jpg";

const AboutSection = () => {
  const stats = [
    { number: "15+", label: "Anos de Experiência" },
    { number: "10k+", label: "Clientes Atendidos" },
    { number: "5", label: "Profissionais Especializados" },
    { number: "4.9", label: "Avaliação Média" },
  ];

  return (
    <section id="sobre" className="py-24 bg-dark-surface">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div>
              <span className="text-primary text-sm tracking-[0.3em] uppercase font-body font-medium">
                Quem somos
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold mt-4 mb-8 text-foreground">
                Uma experiência{" "}
                <span className="gold-text-gradient">premium</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                Na Barbearia Elite, cada corte é uma obra de arte. Há mais de 15 anos transformamos
                o cuidado masculino em uma experiência de luxo, combinando técnicas tradicionais com
                as tendências mais modernas do mercado.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Nosso espaço foi projetado para oferecer conforto e sofisticação. Com profissionais
                altamente qualificados e produtos de primeira linha, garantimos que cada visita seja
                única e memorável. Aqui, você não faz apenas um corte — você vive uma experiência.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <span className="text-3xl font-display font-bold text-primary">{stat.number}</span>
                    <p className="text-xs text-muted-foreground mt-1 tracking-wider uppercase">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="relative">
              <img
                src={galleryImage3}
                alt="Ambiente premium da Barbearia Elite"
                className="rounded-lg w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-primary rounded-lg hidden lg:block" />
              <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-primary/30 rounded-lg hidden lg:block" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
