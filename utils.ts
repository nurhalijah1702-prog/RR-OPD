import { ParticipantScores } from "./types";

// Calculates the average of participant scores (ignoring 0/empty values)
export function getAverageScore(scores: ParticipantScores): number {
  const values = Object.values(scores).filter((v) => v > 0);
  if (values.length === 0) return 0;
  const sum = values.reduce((acc, curr) => acc + curr, 0);
  return parseFloat((sum / values.length).toFixed(2));
}

export interface RiskLevelInfo {
  label: string;
  color: "green" | "yellow" | "orange" | "red";
  bgClass: string;
  textClass: string;
  borderClass: string;
}

// Map risk scores (1-25) to SPIP standard colors
export function getRiskLevel(score: number): RiskLevelInfo {
  if (score <= 0) {
    return {
      label: "Belum Dinilai",
      color: "green",
      bgClass: "bg-slate-100 dark:bg-slate-800",
      textClass: "text-slate-600 dark:text-slate-400",
      borderClass: "border-slate-200 dark:border-slate-700",
    };
  }
  if (score < 6) {
    return {
      label: "Rendah",
      color: "green",
      bgClass: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400",
      textClass: "text-emerald-700 dark:text-emerald-400",
      borderClass: "border-emerald-200 dark:border-emerald-800/60",
    };
  }
  if (score < 12) {
    return {
      label: "Moderat",
      color: "yellow",
      bgClass: "bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400",
      textClass: "text-amber-700 dark:text-amber-400",
      borderClass: "border-amber-200 dark:border-amber-800/60",
    };
  }
  if (score < 16) {
    return {
      label: "Tinggi",
      color: "orange",
      bgClass: "bg-orange-50 text-orange-700 dark:bg-orange-950/40 dark:text-orange-400",
      textClass: "text-orange-700 dark:text-orange-400",
      borderClass: "border-orange-200 dark:border-orange-800/60",
    };
  }
  return {
    label: "Sangat Tinggi",
    color: "red",
    bgClass: "bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-400",
    textClass: "text-rose-700 dark:text-rose-400",
    borderClass: "border-rose-200 dark:border-rose-800/60",
  };
}

// Helper to format currency or numbers elegantly
export function formatNumber(num: number): string {
  return new Intl.NumberFormat("id-ID").format(num);
}
