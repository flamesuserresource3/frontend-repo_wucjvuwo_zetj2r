import { useState } from "react";
import { Trophy, Upload, Users, Leaf } from "lucide-react";

const initialLeaderboard = [
  { name: "Eco Squad A", points: 1280 },
  { name: "Green Warriors", points: 990 },
  { name: "Digital Detoxers", points: 860 },
];

export default function Gamification() {
  const [points, setPoints] = useState(120);
  const [leaderboard, setLeaderboard] = useState(initialLeaderboard);

  const addPoints = (value) => setPoints((p) => p + value);

  const handleAction = (type) => {
    const map = { upload: 20, challenge: 35, webinar: 15 };
    addPoints(map[type] || 10);
    // Bumb leaderboard sample
    setLeaderboard((lb) =>
      lb
        .map((row, i) => (i === 0 ? { ...row, points: row.points + 5 } : row))
        .sort((a, b) => b.points - a.points)
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 rounded-xl border border-emerald-200 p-6 bg-emerald-50/60">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-emerald-900">Gamifikasi & Interaksi</h3>
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-600 text-white px-3 py-1">
                <Trophy className="h-4 w-4" />
                <span className="font-medium">{points} Eco-Points</span>
              </div>
            </div>
            <p className="mt-2 text-emerald-700/90">Dapatkan poin dari aksi hijau: unggah konten, ikut tantangan, dan hadir di webinar.</p>

            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <button onClick={() => handleAction("upload")} className="flex items-center justify-center gap-2 rounded-lg bg-white border border-emerald-200 p-3 hover:bg-emerald-50 transition">
                <Upload className="h-5 w-5 text-emerald-700" />
                <span className="font-medium text-emerald-900">Upload Konten</span>
                <span className="text-xs text-emerald-600">+20</span>
              </button>
              <button onClick={() => handleAction("challenge")} className="flex items-center justify-center gap-2 rounded-lg bg-white border border-emerald-200 p-3 hover:bg-emerald-50 transition">
                <Leaf className="h-5 w-5 text-emerald-700" />
                <span className="font-medium text-emerald-900">Ikut Tantangan</span>
                <span className="text-xs text-emerald-600">+35</span>
              </button>
              <button onClick={() => handleAction("webinar")} className="flex items-center justify-center gap-2 rounded-lg bg-white border border-emerald-200 p-3 hover:bg-emerald-50 transition">
                <Users className="h-5 w-5 text-emerald-700" />
                <span className="font-medium text-emerald-900">Hadir Webinar</span>
                <span className="text-xs text-emerald-600">+15</span>
              </button>
            </div>
          </div>

          <div className="w-full lg:w-[28rem] rounded-xl border border-emerald-200 p-6">
            <div className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-amber-500" />
              <h4 className="text-lg font-semibold text-emerald-900">Leaderboard Komunitas</h4>
            </div>
            <ul className="mt-4 divide-y divide-emerald-100">
              {leaderboard.map((row, idx) => (
                <li key={row.name} className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 grid place-items-center rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold">{idx + 1}</span>
                    <span className="font-medium text-emerald-900">{row.name}</span>
                  </div>
                  <span className="text-emerald-700 font-semibold">{row.points}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-emerald-700/90">Ikuti kampanye #GreenFeed dan #DigitalDetoxWeek untuk naik peringkat!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
