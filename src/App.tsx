import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FileText,
  ShieldAlert,
  BarChart3,
  TrendingUp,
  Compass,
  ArrowDownNarrowWide,
  ShieldCheck,
  MessageSquare,
  Eye,
  ListCollapse,
  Menu,
  ChevronRight,
  Sparkles,
  Info
} from "lucide-react";

import { OPDProfile, RiskItem, RiskEvent, MenuSection } from "./types";
import { initialOPDProfile, initialRisks, initialRiskEvents } from "./sampleData";

// Components
import { Header } from "./components/Header";
import { OPDProfileForm } from "./components/OPDProfileForm";
import { IdentifikasiRisikoForm } from "./components/IdentifikasiRisikoForm";
import { SkalaDampakForm } from "./components/SkalaDampakForm";
import { SkalaKemungkinanForm } from "./components/SkalaKemungkinanForm";
import { HasilAnalisisForm } from "./components/HasilAnalisisForm";
import { PrioritasRisikoForm } from "./components/PrioritasRisikoForm";
import { RencanaTindakPengendalianForm } from "./components/RencanaTindakPengendalianForm";
import { KomunikasiPengendalianForm } from "./components/KomunikasiPengendalianForm";
import { PemantauanPengendalianForm } from "./components/PemantauanPengendalianForm";
import { PencatatanKejadianForm } from "./components/PencatatanKejadianForm";

export default function App() {
  // Global State with LocalStorage Persistence
  const [profile, setProfile] = useState<OPDProfile>(() => {
    const saved = localStorage.getItem("spip_profile");
    return saved ? JSON.parse(saved) : initialOPDProfile;
  });

  const [risks, setRisks] = useState<RiskItem[]>(() => {
    const saved = localStorage.getItem("spip_risks");
    return saved ? JSON.parse(saved) : initialRisks;
  });

  const [events, setEvents] = useState<RiskEvent[]>(() => {
    const saved = localStorage.getItem("spip_events");
    return saved ? JSON.parse(saved) : initialRiskEvents;
  });

  const [activeTab, setActiveTab] = useState<MenuSection>("konteks");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Sync state to LocalStorage
  useEffect(() => {
    localStorage.setItem("spip_profile", JSON.stringify(profile));
  }, [profile]);

  useEffect(() => {
    localStorage.setItem("spip_risks", JSON.stringify(risks));
  }, [risks]);

  useEffect(() => {
    localStorage.setItem("spip_events", JSON.stringify(events));
  }, [events]);

  // Global Actions
  const handleResetAllData = () => {
    if (confirm("Yakin ingin mereset seluruh data kembali ke rancangan standar Renstra Inspektorat Papua Tengah?")) {
      setProfile(initialOPDProfile);
      setRisks(initialRisks);
      setEvents(initialRiskEvents);
      setActiveTab("konteks");
      localStorage.removeItem("spip_profile");
      localStorage.removeItem("spip_risks");
      localStorage.removeItem("spip_events");
    }
  };

  // Profile update
  const handleChangeProfile = (updated: OPDProfile) => {
    setProfile(updated);
  };

  // Risk items operations
  const handleAddRisk = (newRisk: RiskItem) => {
    setRisks((prev) => [...prev, newRisk]);
  };

  const handleUpdateRisk = (id: string, updated: RiskItem) => {
    setRisks((prev) => prev.map((r) => (r.id === id ? updated : r)));
  };

  const handleDeleteRisk = (id: string) => {
    setRisks((prev) => prev.filter((r) => r.id !== id));
    // Also cleanup linked events
    setEvents((prev) => prev.filter((e) => e.riskId !== id));
  };

  const handleUpdateScores = (id: string, updatedScores: any, type: "dampak" | "kemungkinan") => {
    setRisks((prev) =>
      prev.map((r) => {
        if (r.id === id) {
          return {
            ...r,
            skorDampak: type === "dampak" ? updatedScores : r.skorDampak,
            skorKemungkinan: type === "kemungkinan" ? updatedScores : r.skorKemungkinan,
          };
        }
        return r;
      })
    );
  };

  const handleUpdateRTP = (id: string, updatedRTP: Partial<RiskItem>) => {
    setRisks((prev) =>
      prev.map((r) => (r.id === id ? { ...r, ...updatedRTP } : r))
    );
  };

  // Event Logs operations
  const handleAddEvent = (newEvent: RiskEvent) => {
    setEvents((prev) => [...prev, newEvent]);
  };

  const handleUpdateEvent = (id: string, updated: RiskEvent) => {
    setEvents((prev) => prev.map((e) => (e.id === id ? updated : e)));
  };

  const handleDeleteEvent = (id: string) => {
    setEvents((prev) => prev.filter((e) => e.id !== id));
  };

  // Menu Sidebar Definition
  const menuGroups = [
    {
      title: "TAHAP 1: KONTEKS OPD",
      items: [
        { id: "konteks", label: "Penetapan Konteks (Form 2.b)", icon: FileText, color: "text-amber-500 bg-amber-500/10" }
      ]
    },
    {
      title: "TAHAP 2: IDENTIFIKASI",
      items: [
        { id: "identifikasi", label: "Identifikasi Risiko Strategis", icon: ShieldAlert, color: "text-rose-500 bg-rose-500/10" }
      ]
    },
    {
      title: "TAHAP 3: PENILAIAN FGD",
      items: [
        { id: "skala-dampak", label: "Penilaian Skala Dampak", icon: BarChart3, color: "text-sky-500 bg-sky-500/10" },
        { id: "skala-kemungkinan", label: "Penilaian Skala Kemungkinan", icon: TrendingUp, color: "text-indigo-500 bg-indigo-500/10" },
        { id: "hasil-analisis", label: "Peta Sebaran & Hasil Analisis", icon: Compass, color: "text-teal-500 bg-teal-500/10" },
        { id: "prioritas", label: "Daftar Risiko Prioritas Utama", icon: ArrowDownNarrowWide, color: "text-purple-500 bg-purple-500/10" }
      ]
    },
    {
      title: "TAHAP 4: MITIGASI & RTP",
      items: [
        { id: "rtp", label: "Rencana Tindak Pengendalian (RTP)", icon: ShieldCheck, color: "text-emerald-500 bg-emerald-500/10" },
        { id: "komunikasi", label: "Pengkomunikasian Kontrol (Form 8)", icon: MessageSquare, color: "text-cyan-500 bg-cyan-500/10" },
        { id: "pemantauan", label: "Pemantauan Kontrol (Form 9)", icon: Eye, color: "text-violet-500 bg-violet-500/10" }
      ]
    },
    {
      title: "TAHAP 5: EVALUASI LAPANGAN",
      items: [
        { id: "kejadian-risiko", label: "Register Kejadian Risiko Nyata", icon: ListCollapse, color: "text-pink-500 bg-pink-500/10" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] dark:bg-slate-950 flex flex-col font-sans selection:bg-slate-900 selection:text-white">
      
      {/* Premium Header */}
      <Header profile={profile} risks={risks} onReset={handleResetAllData} />

      {/* Main Responsive Layout */}
      <div className="flex-1 flex flex-col md:flex-row max-w-7xl w-full mx-auto p-4 sm:p-6 gap-6">
        
        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center justify-between bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-850 shadow-xs">
          <span className="text-xs font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5 uppercase tracking-wide">
            <Sparkles className="w-4 h-4 text-slate-900 dark:text-white" />
            Navigasi Formulir SPIP
          </span>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg transition-colors cursor-pointer"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {/* Sidebar Navigation Panel (1 Menu) */}
        <aside
          className={`w-full md:w-72 shrink-0 flex-col gap-4 md:flex ${
            mobileMenuOpen ? "flex" : "hidden md:flex"
          }`}
        >
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-100 dark:border-slate-800 shadow-xs flex flex-col gap-4">
            
            <div className="px-3 py-2 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800">
              <span className="text-[10px] font-bold text-slate-800 dark:text-slate-200 tracking-wider uppercase flex items-center gap-1">
                <Info className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                Papua Tengah • SPIP 2026
              </span>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 leading-normal font-light">
                Pilih menu untuk berpindah formulir penilaian risiko. Data saling terhubung secara real-time.
              </p>
            </div>

            <nav className="space-y-4">
              {menuGroups.map((group) => (
                <div key={`group-${group.title}`} className="space-y-1">
                  <span className="block text-[9px] font-bold text-slate-400 dark:text-slate-500 px-3 tracking-widest">
                    {group.title}
                  </span>
                  
                  <div className="space-y-0.5">
                    {group.items.map((item) => {
                      const IconComponent = item.icon;
                      const isActive = activeTab === item.id;

                      return (
                        <button
                          key={`menu-item-${item.id}`}
                          onClick={() => {
                            setActiveTab(item.id as MenuSection);
                            setMobileMenuOpen(false);
                          }}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-150 group cursor-pointer ${
                            isActive
                              ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-950 shadow-sm translate-x-1"
                              : "text-slate-500 hover:text-slate-900 hover:bg-slate-50 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-850"
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <span className={`p-1.5 rounded-md transition-colors ${isActive ? "text-slate-900 bg-white" : "text-slate-600 bg-slate-50 dark:text-slate-300 dark:bg-slate-800"}`}>
                              <IconComponent className="w-3.5 h-3.5" />
                            </span>
                            <span className="truncate">{item.label}</span>
                          </div>
                          <ChevronRight className={`w-3.5 h-3.5 transition-transform opacity-40 group-hover:opacity-100 ${
                            isActive ? "translate-x-0.5 rotate-90" : ""
                          }`} />
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </nav>

          </div>
        </aside>

        {/* Main Content Workspace (1 Halaman) */}
        <main className="flex-1 min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={`tab-content-${activeTab}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="outline-none"
            >
              
              {activeTab === "konteks" && (
                <OPDProfileForm
                  profile={profile}
                  onChangeProfile={handleChangeProfile}
                />
              )}

              {activeTab === "identifikasi" && (
                <IdentifikasiRisikoForm
                  profile={profile}
                  risks={risks}
                  onAddRisk={handleAddRisk}
                  onUpdateRisk={handleUpdateRisk}
                  onDeleteRisk={handleDeleteRisk}
                />
              )}

              {activeTab === "skala-dampak" && (
                <SkalaDampakForm
                  risks={risks}
                  onUpdateScores={(id, scores) => handleUpdateScores(id, scores, "dampak")}
                />
              )}

              {activeTab === "skala-kemungkinan" && (
                <SkalaKemungkinanForm
                  risks={risks}
                  onUpdateScores={(id, scores) => handleUpdateScores(id, scores, "kemungkinan")}
                />
              )}

              {activeTab === "hasil-analisis" && (
                <HasilAnalisisForm
                  risks={risks}
                />
              )}

              {activeTab === "prioritas" && (
                <PrioritasRisikoForm
                  risks={risks}
                />
              )}

              {activeTab === "rtp" && (
                <RencanaTindakPengendalianForm
                  risks={risks}
                  onUpdateRTP={handleUpdateRTP}
                />
              )}

              {activeTab === "komunikasi" && (
                <KomunikasiPengendalianForm
                  risks={risks}
                  onUpdateKomunikasi={handleUpdateRTP}
                />
              )}

              {activeTab === "pemantauan" && (
                <PemantauanPengendalianForm
                  risks={risks}
                  onUpdatePemantauan={handleUpdateRTP}
                />
              )}

              {activeTab === "kejadian-risiko" && (
                <PencatatanKejadianForm
                  risks={risks}
                  events={events}
                  onAddEvent={handleAddEvent}
                  onUpdateEvent={handleUpdateEvent}
                  onDeleteEvent={handleDeleteEvent}
                />
              )}

            </motion.div>
          </AnimatePresence>
        </main>

      </div>

      {/* Footer copyright */}
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-4 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest">
          Inspektorat Provinsi Papua Tengah © 2026 • Sistem Informasi Kertas Kerja SPIP
        </div>
      </footer>

    </div>
  );
}
