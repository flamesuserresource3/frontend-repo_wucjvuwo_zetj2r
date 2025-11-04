import { useMemo, useState } from "react";
import { Activity, MapPin, Gift, Leaf } from "lucide-react";

const localActions = [
  { id: 1, title: "Volunteer Clean-up", location: "Jakarta", type: "Volunteer" },
  { id: 2, title: "Reboisasi Kota", location: "Bandung", type: "Volunteer" },
  { id: 3, title: "Donasi Gadget Bekas", location: "Surabaya", type: "Donasi" },
];

export default function ActionsDashboard() {
  const [streamMin, setStreamMin] = useState(60);
  const [co2Saved, setCo2Saved] = useState(0.3); // kg/day sample
  const [offset, setOffset] = useState(12.5); // kg total

  const recText = useMemo(() => {
    const saved = (streamMin * 0.01).toFixed(2); // simple demo calc
    return `Kamu bisa hemat ~${saved}kg CO₂/hari dengan kurangi streaming ${streamMin} menit.`;
  }, [streamMin]);

  return (
    <section id="aksi" className="py-16 bg-emerald-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="rounded-xl border border-emerald-200 bg-white p-6 lg:col-span-2">
            <div className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-emerald-600" />
              <h3 className="text-lg font-semibold text-emerald-900">Dashboard Aksi & Monitoring</h3>
            </div>

            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              <StatCard label="Peserta Aktif" value="3.215" />
              <StatCard label="Emisi Di-offset" value={`${offset.toFixed(1)} kg`} />
              <StatCard label="Total Aksi" value="1.284" />
            </div>

            <div className="mt-6 rounded-lg border border-emerald-200 p-5 bg-emerald-50/60">
              <h4 className="font-semibold text-emerald-900">Rekomendasi Personal</h4>
              <p className="mt-2 text-sm text-emerald-800/90">{recText}</p>
              <div className="mt-3">
                <label className="text-sm text-emerald-700">Durasi Streaming Harian (menit)</label>
                <input
                  type="range"
                  min={10}
                  max={180}
                  step={5}
                  value={streamMin}
                  onChange={(e) => setStreamMin(Number(e.target.value))}
                  className="w-full accent-emerald-600"
                />
                <div className="flex items-center justify-between text-xs text-emerald-700/80 mt-1">
                  <span>10</span>
                  <span>{streamMin} m</span>
                  <span>180</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-emerald-200 bg-white p-6">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-emerald-600" />
              <h3 className="text-lg font-semibold text-emerald-900">Aksi Lokal</h3>
            </div>
            <ul className="mt-4 space-y-3">
              {localActions.map((a) => (
                <li key={a.id} className="rounded-lg border border-emerald-200 p-4 hover:bg-emerald-50/50 transition">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-emerald-900">{a.title}</p>
                      <p className="text-sm text-emerald-700/90">{a.location} • {a.type}</p>
                    </div>
                    <button className="px-3 py-1.5 rounded-md bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-500">Gabung</button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-lg border border-emerald-200 p-4 bg-emerald-50/60">
              <div className="flex items-center gap-2">
                <Gift className="h-4 w-4 text-emerald-700" />
                <p className="text-sm text-emerald-800/90">Donasi gadget bekasmu untuk sirkularitas yang lebih baik.</p>
              </div>
              <button className="mt-3 w-full rounded-md bg-white border border-emerald-200 py-2 text-sm font-medium text-emerald-900 hover:bg-emerald-50">Kirim Sekarang</button>
            </div>

            <div className="mt-6 rounded-lg border border-emerald-200 p-4 bg-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Leaf className="h-4 w-4 text-emerald-700" />
                  <span className="text-sm text-emerald-900">CO₂ diselamatkan (perkiraan)</span>
                </div>
                <span className="text-emerald-900 font-semibold">{co2Saved} kg/hari</span>
              </div>
              <button onClick={() => setOffset((o) => o + co2Saved)} className="mt-3 w-full rounded-md bg-emerald-600 text-white py-2 text-sm font-medium hover:bg-emerald-500">Catat Aksi Hari Ini</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="rounded-lg bg-white border border-emerald-200 p-4">
      <p className="text-sm text-emerald-700/80">{label}</p>
      <p className="mt-1 text-2xl font-bold text-emerald-900">{value}</p>
    </div>
  );
}
