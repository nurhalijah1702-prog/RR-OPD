export interface SasaranStrategis {
  id: number;
  text: string;
}

export interface IKUSasaran {
  id: number;
  text: string;
  target2026: string;
}

export interface ProgramStrategis {
  id: number;
  text: string;
}

export interface IKUProgram {
  id: number;
  text: string;
  target2026: string;
}

export interface OPDProfile {
  namaPemda: string;
  tahunPenilaian: string;
  periodeRenstra: string;
  urusanPemerintahan: string;
  opdYangDinilai: string;
  sumberData: string;
  tujuanStrategis: string;
  sasaranStrategis: SasaranStrategis[];
  ikuSasaran: IKUSasaran[];
  programStrategis: ProgramStrategis[];
  ikuProgram: IKUProgram[];
  penandatanganNama: string;
  penandatanganPangkat: string;
  penandatanganNIP: string;
  penandatanganJabatan: string;
  penandatanganTempat: string;
  penandatanganTanggal: string;
}

export interface ParticipantScores {
  A: number;
  B: number;
  C: number;
  D: number;
  E: number;
  F: number;
}

export interface RiskItem {
  id: string;
  sasaranId: number; // Links to SasaranStrategis
  indikatorKinerja: string;
  kodeRisiko: string;
  uraianRisiko: string;
  pemilikRisiko: string;
  penyebabUraian: string;
  penyebabSumber: "Internal" | "Eksternal";
  controllable: "C" | "UC";
  dampakUraian: string;
  dampakPihakTerkena: string;
  
  // Scoring
  skorDampak: ParticipantScores;
  skorKemungkinan: ParticipantScores;

  // RTP (Rencana Tindak Pengendalian) - Form 7
  rtpUraianAda: string; // Uraian pengendalian yang sudah ada
  rtpAlasanTidakEfektif: string; // Alasan tidak efektif
  rtpDibutuhkan: string; // Pengendalian yang masih dibutuhkan
  rtpCelah: string; // Celah pengendalian
  rtpRencanaTindakan: string; // Rencana tindak pengendalian
  rtpPenanggungJawab: string; // Pemilik/Penanggung jawab RTP
  rtpTargetWaktu: string; // Target waktu penyelesaian

  // Pengkomunikasian - Form 8
  komunikasiMedia: string;
  komunikasiPenyedia: string;
  komunikasiPenerima: string;
  komunikasiRencanaWaktu: string;
  komunikasiRealisasi: string;
  komunikasiKeterangan: string;

  // Pemantauan - Form 9
  pantauMetode: string;
  pantauPJ: string;
  pantauRencanaWaktu: string;
  pantauRealisasi: string;
  pantauKeterangan: string;
}

export interface RiskEvent {
  id: string;
  riskId: string; // Links to RiskItem.id
  tanggalKejadian: string;
  sebabNyata: string;
  dampakNyata: string;
  statusRtp: "Belum Dilaksanakan" | "Sedang Dilaksanakan" | "Selesai Dilaksanakan";
  keterangan: string;
}

export type MenuSection =
  | "konteks"
  | "identifikasi"
  | "skala-dampak"
  | "skala-kemungkinan"
  | "hasil-analisis"
  | "prioritas"
  | "rtp"
  | "komunikasi"
  | "pemantauan"
  | "kejadian-risiko";
