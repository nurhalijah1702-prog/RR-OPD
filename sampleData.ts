import { OPDProfile, RiskItem, RiskEvent } from "./types";

export const initialOPDProfile: OPDProfile = {
  namaPemda: "Pemerintah Provinsi Papua Tengah",
  tahunPenilaian: "2026",
  periodeRenstra: "Periode Renstra Tahun 2025-2029",
  urusanPemerintahan: "Pengawasan Pembangunan Daerah",
  opdYangDinilai: "Inspektorat Provinsi Papua Tengah",
  sumberData: "Renstra Inspektorat Provinsi Papua Tengah Tahun 2025-2029",
  tujuanStrategis: "Mewujudkan Penguatan APIP dalam melaksanakan Tugas Pokok dan Fungsi demi tercapainya Tata Kelola Pemerintahan yang baik, bersih dan transparan yang menerapkan Sistem Administrasi Publik berbasis Digitalisasi Teknologi",
  sasaranStrategis: [
    { id: 1, text: "Peningkatan transparansi dan akuntabilitas dalam pengelolaan keuangan daerah guna mencegah korupsi dan penyalahgunaan anggaran" },
    { id: 2, text: "Penerapan sistem pengawasan berbasis teknologi seperti e-audit dan e-monitoring terhadap anggaran dan proyek pemerintah." },
    { id: 3, text: "Mendorong peran aktif masyarakat dalam pengawasan pemerintahan, melalui sistem pelaporan yang mudah diakses." }
  ],
  ikuSasaran: [
    { id: 1, text: "Indeks Pelayanan Publik", target2026: "1,11" },
    { id: 2, text: "Indeks Integritas Nasional", target2026: "64" }
  ],
  programStrategis: [
    { id: 1, text: "Program penunjang urusan pemerintahan daerah" },
    { id: 2, text: "Program penyelenggaraan pengawasan" },
    { id: 3, text: "Program perumusan kebijakan, pendampingan dan asistensi" }
  ],
  ikuProgram: [
    { id: 1, text: "Persentase tindak lanjut hasil pengawasan APIP", target2026: "85%" },
    { id: 2, text: "Opini Laporan Keuangan Pemda", target2026: "WTP" },
    { id: 3, text: "Indeks Maturitas SPIP", target2026: "Level 3" }
  ],
  penandatanganNama: "Drs. Albertus Pigome",
  penandatanganPangkat: "Pembina Utama Muda, IV/c",
  penandatanganNIP: "19740812 200212 1 003",
  penandatanganJabatan: "Plt. Inspektur Provinsi Papua Tengah",
  penandatanganTempat: "Paniai",
  penandatanganTanggal: "April 2026"
};

export const initialRisks: RiskItem[] = [
  {
    id: "risk-1",
    sasaranId: 1,
    indikatorKinerja: "Peningkatan PDRB / Penanaman Modal",
    kodeRisiko: "RSO.26.1.1.01",
    uraianRisiko: "Ketidaksinkronan antara kebijakan pusat dan daerah mengenai perizinan investasi",
    pemilikRisiko: "Kepala Dinas PTSP",
    penyebabUraian: "Aturan di tingkat Daerah (Perda) belum menyesuaikan dengan semangat UU Cipta Kerja atau sistem OSS (Online Single Submission)",
    penyebabSumber: "Internal",
    controllable: "C",
    dampakUraian: "Investor terjebak dalam ketidakpastian hukum; izin sudah keluar dari pusat, namun tidak bisa dieksekusi di lapangan karena terbentur aturan lokal",
    dampakPihakTerkena: "Pelaku Usaha & Pemda Papua Tengah",
    skorDampak: { A: 2, B: 3, C: 4, D: 5, E: 0, F: 0 },
    skorKemungkinan: { A: 2, B: 3, C: 4, D: 5, E: 0, F: 0 },
    rtpUraianAda: "Sosialisasi Perda investasi yang lama secara berkala",
    rtpAlasanTidakEfektif: "(1) Kebijakan dan Prosedur pengendalian sudah dilakukan, namun belum mampu menangani risiko yang teridentifikasi",
    rtpDibutuhkan: "Revisi Perda Investasi menyesuaikan UU Cipta Kerja",
    rtpCelah: "Regulasi daerah tertinggal dibanding regulasi pusat",
    rtpRencanaTindakan: "Penyusunan draft Perda baru dan sinkronisasi dengan OSS RBA",
    rtpPenanggungJawab: "Kepala Dinas PTSP & Biro Hukum",
    rtpTargetWaktu: "Triwulan III 2026",
    komunikasiMedia: "Rapat Koordinasi Lintas Sektor & Surat Edaran",
    komunikasiPenyedia: "Dinas PTSP",
    komunikasiPenerima: "Para Pelaku Usaha & OPD Terkait",
    komunikasiRencanaWaktu: "Juli 2026",
    komunikasiRealisasi: "Terlaksana pada rapat koordinasi triwulan II",
    komunikasiKeterangan: "Distribusi surat edaran selesai",
    pantauMetode: "Monitoring Mingguan Evaluasi Sistem OSS",
    pantauPJ: "Inspektur Pembantu Wilayah II",
    pantauRencanaWaktu: "Setiap Akhir Bulan",
    pantauRealisasi: "Terlaksana bulanan",
    pantauKeterangan: "Laporan triwulan disampaikan ke Gubernur"
  },
  {
    id: "risk-2",
    sasaranId: 2,
    indikatorKinerja: "Indeks Pelayanan Publik / Penerapan E-Gov",
    kodeRisiko: "RSO.26.1.1.02",
    uraianRisiko: "Keterbatasan infrastruktur jaringan internet di kabupaten-kabupaten pedalaman Papua Tengah",
    pemilikRisiko: "Kepala Dinas Kominfo",
    penyebabUraian: "Belum meratanya pembangunan tower BTS dan mahalnya sewa bandwidth satelit untuk wilayah terpencil",
    penyebabSumber: "Eksternal",
    controllable: "UC",
    dampakUraian: "Sistem e-audit dan e-monitoring tidak dapat diakses secara real-time dari daerah pedalaman",
    dampakPihakTerkena: "Inspektorat & Masyarakat Daerah Pedalaman",
    skorDampak: { A: 4, B: 4, C: 3, D: 3, E: 3, F: 4 },
    skorKemungkinan: { A: 4, B: 5, C: 4, D: 4, E: 5, F: 4 },
    rtpUraianAda: "Penyediaan akses internet VSAT terbatas di kantor kecamatan",
    rtpAlasanTidakEfektif: "(2) Prosedur pengendalian belum/tidak dapat dilaksanakan secara maksimal karena faktor cuaca dan pasokan listrik",
    rtpDibutuhkan: "Pengadaan sistem e-audit offline-first dengan sinkronisasi otomatis",
    rtpCelah: "Aplikasi pengawasan mensyaratkan koneksi internet konstan",
    rtpRencanaTindakan: "Pengembangan modul offline-first pada aplikasi e-audit Inspektorat",
    rtpPenanggungJawab: "Inspektur & Tim IT Kominfo",
    rtpTargetWaktu: "Triwulan IV 2026",
    komunikasiMedia: "Grup Whatsapp Koordinasi & Portal Helpdesk",
    komunikasiPenyedia: "Tim IT Inspektorat",
    komunikasiPenerima: "Auditor Wilayah Pedalaman",
    komunikasiRencanaWaktu: "Agustus 2026",
    komunikasiRealisasi: "Sosialisasi awal via Zoom dan panduan PDF",
    komunikasiKeterangan: "Menunggu rilis aplikasi versi offline",
    pantauMetode: "Review Bulanan Progress Pengembangan IT",
    pantauPJ: "Sekretaris Inspektorat",
    pantauRencanaWaktu: "Setiap tanggal 5",
    pantauRealisasi: "Sesuai jadwal",
    pantauKeterangan: "Berjalan lancar"
  },
  {
    id: "risk-3",
    sasaranId: 1,
    indikatorKinerja: "Opini Laporan Keuangan WTP",
    kodeRisiko: "RSO.26.1.1.03",
    uraianRisiko: "Rendahnya pemahaman staf pengelola keuangan OPD tentang standar akuntansi pemerintahan baru",
    pemilikRisiko: "Kepala BPKAD",
    penyebabUraian: "Mutasi staf yang tinggi dan kurangnya bimbingan teknis intensif",
    penyebabSumber: "Internal",
    controllable: "C",
    dampakUraian: "Salah saji material pada laporan keuangan daerah yang dapat menurunkan opini BPK",
    dampakPihakTerkena: "Pemerintah Provinsi secara umum",
    skorDampak: { A: 4, B: 4, C: 4, D: 3, E: 3, F: 3 },
    skorKemungkinan: { A: 3, B: 3, C: 2, D: 3, E: 3, F: 2 },
    rtpUraianAda: "Penyebaran modul akuntansi digital",
    rtpAlasanTidakEfektif: "(3) Kebijakan belum diikuti dengan prosedur baku dan monitoring yang jelas",
    rtpDibutuhkan: "Pembentukan Klinik Konsultasi Akuntansi dan Bimtek tatap muka",
    rtpCelah: "Staf enggan membaca modul tebal tanpa adanya pendampingan",
    rtpRencanaTindakan: "Penyelenggaraan Bimtek bersertifikasi dan piket helpdesk keuangan",
    rtpPenanggungJawab: "Inspektur & Kepala BPKAD",
    rtpTargetWaktu: "Triwulan II 2026",
    komunikasiMedia: "FGD Lintas Sektor & Surat Tugas Mandat",
    komunikasiPenyedia: "BPKAD & Perwakilan BPKP",
    komunikasiPenerima: "Bendahara Pengeluaran OPD",
    komunikasiRencanaWaktu: "Mei 2026",
    komunikasiRealisasi: "Telah selesai pada 24 Mei 2026",
    komunikasiKeterangan: "Dihadiri oleh 45 bendahara",
    pantauMetode: "Rekonsiliasi Laporan Bulanan Terpadu",
    pantauPJ: "Sekretaris BPKAD",
    pantauRencanaWaktu: "Setiap tanggal 10",
    pantauRealisasi: "Sesuai jadwal berjalan",
    pantauKeterangan: "Kesalahan input berkurang 60%"
  }
];

export const initialRiskEvents: RiskEvent[] = [
  {
    id: "event-1",
    riskId: "risk-1",
    tanggalKejadian: "2026-05-12",
    sebabNyata: "Perda Pajak Daerah dan Retribusi Daerah belum selaras dengan UU HKPD terbaru, sehingga ijin operasional hotel tertunda",
    dampakNyata: "Penundaan investasi senilai Rp 12.5 Miliar dan protes dari asosiasi pengusaha",
    statusRtp: "Sedang Dilaksanakan",
    keterangan: "Draft Perda sedang difasilitasi oleh Kemendagri"
  },
  {
    id: "event-2",
    riskId: "risk-2",
    tanggalKejadian: "2026-06-20",
    sebabNyata: "Genset VSAT di salah satu distrik pedalaman rusak tersambar petir",
    dampakNyata: "Sistem e-audit tidak bisa disinkronisasi selama 10 hari kerja",
    statusRtp: "Sedang Dilaksanakan",
    keterangan: "Perbaikan genset sedang berjalan, tim pengawas beralih sementara ke catatan fisik"
  }
];
