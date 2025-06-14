# 🎓 Codesyariah Student Journey

Proyek ini merupakan prototipe website **PPDB (Penerimaan Peserta Didik Baru)** yang dikembangkan menggunakan **Next.js** dan **Vite**, serta didukung oleh berbagai library modern untuk mempercepat pengembangan frontend berbasis komponen dan pengalaman pengguna yang interaktif.

## ✨ Fitur Utama

- ⚡️ **Vite + React + TypeScript** untuk performa pengembangan cepat
- 🎨 **Tailwind CSS** untuk styling yang efisien dan responsif
- 🧩 Komponen UI dari **Radix UI** dan **shadcn/ui**
- 💡 Validasi form dengan **Zod** & **React Hook Form**
- 🔌 Routing modern dengan **React Router**
- 📊 Visualisasi data menggunakan **Recharts**
- 🌙 Dukungan tema gelap/terang via `next-themes`
- 📦 Manajemen data async dengan **TanStack Query**
- 🔧 Kompatibel dengan plugin `lovable-tagger` untuk tagging komponen saat pengembangan
- 📱 Carousel responsif dengan **Embla Carousel**

---

## 🚀 Instalasi

### 1. Clone repository

```bash
git clone https://github.com/codesyariah122/codesyariah-student-journey.git
cd codesyariah-student-journey
2. Install dependencies

npm install

3. Jalankan proyek

npm run dev

Aplikasi akan berjalan di: http://localhost:8080
⚙️ Konfigurasi Vite
```
// vite.config.js
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
```

📁 Struktur Folder (Umum)
```
src/
├── components/     # Komponen UI reusable
├── pages/          # Halaman utama aplikasi
├── hooks/          # Custom hooks
├── lib/            # Fungsi bantu dan utils
├── styles/         # File CSS/Tailwind tambahan
└── ...
```

📦 Dependency Highlights

    react, react-dom

    react-router-dom

    tailwindcss, tailwind-merge, tailwindcss-animate

    @radix-ui/*

    react-hook-form, zod

    @tanstack/react-query

    recharts, date-fns

    lucide-react, cmdk, sonner

    embla-carousel-react, vaul

    lovable-tagger (untuk dev)

💻 Build & Preview

# Build untuk produksi
npm run build

# Preview hasil build
npm run preview

🧪 Linting

npm run lint

🧑‍💻 Kontributor

    Proyek ini dikembangkan dan dikelola oleh codesyariah122.
    Feel free to fork & pull request!

📄 Lisensi

Proyek ini berada di bawah lisensi MIT – silakan gunakan sesuai kebutuhan.
🔗 Tautan Terkait

    Vite Documentation

    Radix UI

    shadcn/ui

    TanStack Query

    Tailwind CSS
