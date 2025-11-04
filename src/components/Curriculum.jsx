import { BookOpen, Award, Recycle, Cpu } from "lucide-react";

const modules = [
  {
    icon: BookOpen,
    title: "Digital Footprint",
    desc: "Pahami jejak karbon digital dari aktivitas harian daring.",
    tag: "microlearning",
  },
  {
    icon: Recycle,
    title: "E-Waste Management",
    desc: "Kelola limbah elektronik dengan bertanggung jawab.",
    tag: "practice",
  },
  {
    icon: Cpu,
    title: "Green Innovation",
    desc: "Eksplorasi inovasi teknologi rendah emisi & efisien energi.",
    tag: "insight",
  },
  {
    icon: Award,
    title: "Net-Zero & Circular Economy",
    desc: "Konsep ekonomi sirkular dan target net-zero untuk semua.",
    tag: "concept",
  },
];

export default function Curriculum() {
  return (
    <section id="kurikulum" className="py-16 bg-emerald-50">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900">Kurikulum Hijau Digital</h2>
          <p className="mt-3 text-emerald-700">Modul microlearning singkat, aplikatif, dan berkelanjutan.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((m) => (
            <div key={m.title} className="group rounded-xl border border-emerald-200 bg-white p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-emerald-100 p-2 text-emerald-700">
                  <m.icon className="h-6 w-6" />
                </div>
                <span className="text-xs uppercase tracking-wide text-emerald-600/80">{m.tag}</span>
              </div>
              <h3 className="mt-4 font-semibold text-emerald-900">{m.title}</h3>
              <p className="mt-2 text-sm text-emerald-700/90">{m.desc}</p>
              <button className="mt-4 w-full rounded-lg bg-emerald-600 text-white py-2 font-medium hover:bg-emerald-500 transition">Belajar Sekarang</button>
            </div>
          ))}
        </div>
        <div className="mt-10 flex items-center gap-3 rounded-xl border border-emerald-200 bg-white p-5">
          <Award className="h-6 w-6 text-emerald-600" />
          <p className="text-emerald-800">
            Raih Green Digital Certificate saat menyelesaikan jalur belajar dan aksi komunitas.
          </p>
        </div>
      </div>
    </section>
  );
}
