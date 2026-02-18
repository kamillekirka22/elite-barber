import { Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    name: "Ricardo Almeida",
    text: "Melhor barbearia da cidade, sem dúvida. Atendimento impecável e o resultado sempre supera minhas expectativas. Recomendo de olhos fechados!",
    role: "Cliente há 3 anos",
  },
  {
    name: "Felipe Santos",
    text: "O ambiente é incrível e os profissionais são extremamente talentosos. Sempre saio de lá me sentindo outro homem. O tratamento capilar é sensacional.",
    role: "Cliente há 2 anos",
  },
  {
    name: "André Oliveira",
    text: "Encontrei a Barbearia Elite por indicação e nunca mais fui em outro lugar. A atenção aos detalhes e a qualidade dos produtos são incomparáveis.",
    role: "Cliente há 5 anos",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-24 bg-dark-surface">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-body font-medium">
              O que dizem
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mt-4 text-foreground">
              <span className="gold-text-gradient">Depoimentos</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, index) => (
            <ScrollReveal key={t.name} delay={index * 150}>
              <div className="bg-card border border-border rounded-lg p-8 hover:border-primary/40 transition-all duration-500">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/80 leading-relaxed mb-6 text-sm italic">
                  "{t.text}"
                </p>
                <div>
                  <p className="font-display font-semibold text-foreground">{t.name}</p>
                  <p className="text-muted-foreground text-xs tracking-wider uppercase mt-1">{t.role}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
