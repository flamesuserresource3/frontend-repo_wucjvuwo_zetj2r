import { Leaf, Globe, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-900 via-emerald-800 to-emerald-900 text-white">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-400/40 via-teal-300/30 to-transparent" />
      <div className="container mx-auto px-6 py-20 relative">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm backdrop-blur">
              <Leaf className="h-4 w-4 text-emerald-300" />
              <span>GreenTech Learning • Kolaborasi • Aksi Nyata</span>
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Platform Edukasi Digital untuk Aksi Hijau Berkelanjutan
            </h1>
            <p className="mt-5 text-emerald-100 max-w-2xl">
              Tingkatkan literasi lingkungan digital, ikuti microlearning berkelanjutan, dan wujudkan aksi nyata seperti pengelolaan e-waste serta pengurangan jejak karbon—semua dalam satu tempat.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a href="#kurikulum" className="px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-semibold transition">Mulai Belajar</a>
              <a href="#aksi" className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 font-semibold transition">Ikut Aksi Lokal</a>
            </div>
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-emerald-200/90">
              <div className="flex items-center gap-2"><Users className="h-5 w-5" /><span>Komunitas Peduli</span></div>
              <div className="flex items-center gap-2"><Globe className="h-5 w-5" /><span>Kampanye Global</span></div>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="aspect-[4/3] w-full rounded-2xl bg-emerald-800/40 border border-emerald-700/50 shadow-xl grid place-items-center">
              <div className="text-center p-6">
                <Leaf className="h-14 w-14 mx-auto text-emerald-300" />
                <p className="mt-4 text-emerald-100">Belajar • Beraksi • Berkolaborasi</p>
                <p className="text-emerald-200/80 text-sm mt-1">Menuju masa depan net-zero</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
