import heroImage from "@/assets/hero-barbershop.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Interior premium da Barbearia Elite"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 overlay-dark" />
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-6">
          <div className="inline-block border-t border-b border-primary/50 py-3 px-8 mb-8 animate-fade-in">
            <span className="text-primary text-sm tracking-[0.4em] uppercase font-body font-medium">
              Experiência Premium
            </span>
          </div>
        </div>
        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-up text-foreground">
          BARBEARIA{" "}
          <span className="gold-text-gradient">ELITE</span>
        </h1>
        <p className="text-lg sm:text-xl text-foreground/70 font-light tracking-wide mb-10 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Estilo e tradição no seu corte
        </p>
        <a
          href="#contato"
          className="inline-block gold-gradient text-primary-foreground px-10 py-4 text-sm font-bold tracking-[0.2em] uppercase rounded hover:opacity-90 hover:scale-105 transition-all duration-300 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          Agendar horário
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
