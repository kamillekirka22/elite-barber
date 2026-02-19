import ScrollReveal from "./ScrollReveal";
import AgendamentoForm from "@/components/ui/AgendamentoForm";

const CTASection = () => {
  return (
    <section id="contato" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="max-w-xl mx-auto">
            <AgendamentoForm />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
