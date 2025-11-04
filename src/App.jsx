import Hero from "./components/Hero";
import Curriculum from "./components/Curriculum";
import Gamification from "./components/Gamification";
import ActionsDashboard from "./components/ActionsDashboard";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-emerald-900">
      <Navbar />
      <Hero />
      <Curriculum />
      <Gamification />
      <ActionsDashboard />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-emerald-100">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-extrabold tracking-tight text-emerald-900 text-lg">GreenLearn</a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-emerald-800">
          <a href="#kurikulum" className="hover:text-emerald-600">Kurikulum</a>
          <a href="#aksi" className="hover:text-emerald-600">Aksi Lokal</a>
          <a href="#" className="hover:text-emerald-600">Leaderboard</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="px-3 py-2 rounded-md border border-emerald-200 text-emerald-900 text-sm hover:bg-emerald-50">Masuk</button>
          <button className="px-3 py-2 rounded-md bg-emerald-600 text-white text-sm hover:bg-emerald-500">Daftar</button>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-16 border-t border-emerald-100">
      <div className="container mx-auto px-6 py-10 text-sm text-emerald-700/90">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} GreenLearn • Edukasi Digital Berbasis Teknologi Hijau</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-emerald-900" href="#">Kebijakan Privasi</a>
            <a className="hover:text-emerald-900" href="#">Syarat Layanan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
