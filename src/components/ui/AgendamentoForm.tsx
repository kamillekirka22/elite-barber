import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function AgendamentoForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 🚨 Impede recarregar a página

    setLoading(true);
    setSuccess(false);

    const form = e.currentTarget;

    emailjs
      .send(
        "service_dpb3qph",      // 👈 coloque aqui
        "template_nsv0v0o",     // 👈 coloque aqui
        {
          nome: (form.nome as HTMLInputElement).value,
          telefone: (form.telefone as HTMLInputElement).value,
          data: (form.data as HTMLInputElement).value,
          hora: (form.hora as HTMLInputElement).value,
        },
        "d29TU2kMJ8PS3YOl-"       // 👈 coloque aqui
      )
      .then(() => {
        setSuccess(true);
        setLoading(false);
        form.reset(); // limpa os campos
      })
      .catch((error) => {
        console.error("Erro ao enviar:", error);
        alert("Erro ao enviar. Verifique o console.");
        setLoading(false);
      });
  };

  return (
    <div className="w-full max-w-md bg-card p-8 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          name="nome"
          type="text"
          placeholder="Seu nome"
          className="w-full p-3 rounded bg-background border border-muted"
          required
        />

        <input
          name="telefone"
          type="tel"
          placeholder="Telefone"
          className="w-full p-3 rounded bg-background border border-muted"
          required
        />

        <input
          name="data"
          type="date"
          className="w-full p-3 rounded bg-background border border-muted"
          required
        />

        <input
          name="hora"
          type="time"
          className="w-full p-3 rounded bg-background border border-muted"
          required
        />

        <button
          type="submit"
          className="w-full gold-gradient text-primary-foreground py-3 rounded font-bold uppercase"
          disabled={loading}
        >
          {loading ? "Enviando..." : "Agendar"}
        </button>

        {success && (
          <p className="text-green-500 text-sm text-center">
            ✅ Agendamento enviado com sucesso!
          </p>
        )}

      </form>
    </div>
  );
}
