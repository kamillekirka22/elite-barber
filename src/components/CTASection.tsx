import ScrollReveal from "./ScrollReveal";

const CTASection = () => {
  return (
    <section id="contato" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-body font-medium">
              Pronto para a mudança?
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-foreground">
              Agende seu horário{" "}
              <span className="gold-text-gradient">hoje</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Reserve agora e descubra por que somos a barbearia favorita de milhares de homens.
              Atendimento personalizado e resultado garantido.
            </p>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block gold-gradient text-primary-foreground px-12 py-4 text-sm font-bold tracking-[0.2em] uppercase rounded hover:opacity-90 hover:scale-105 transition-all duration-300"
            >
              Agendar agora
            </a>
            <p className="text-muted-foreground text-sm mt-6">
              Ou ligue: <span className="text-primary font-semibold">(11) 99999-9999</span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
