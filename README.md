# 🏠 New Holland Indah - Sistem Informasi Kost

> Website Multipage untuk Sistem Pengelolaan Kost Modern & Strategis Dekat Kampus Uniku

---

## 📋 Deskripsi Proyek

Aplikasi web UI/UX multipage untuk **Sistem Informasi Pengelolaan Kost New Holland Indah** yang terletak di Jl. Daeng Sutigna, Cijoho, Kuningan. Website ini dirancang dengan fokus pada user experience, tampilan modern, dan responsif untuk semua perangkat.

**⚠️ CATATAN PENTING:**
- Ini adalah **UI/UX prototype only** (tanpa backend & database)
- Semua data bersifat **dummy/statis**
- Fokus pada **tampilan visual** dan **user flow**

---

## ✨ Fitur Utama

### 🌐 Public Pages (Tanpa Login)
- ✅ **Landing Page** - Hero, statistik, fasilitas, kamar, lokasi
- ✅ **Detail Kamar** - Informasi lengkap kamar dengan pilihan kapasitas
- ✅ **Lokasi** - Peta Google Maps, kontak, dan cara menuju lokasi
- ✅ **Login** - Multi-role (Penghuni, Admin, Pemilik)
- ✅ **Registrasi** - Form pendaftaran penghuni baru

### 👤 Dashboard Penghuni
- Info kamar yang disewa
- Status pembayaran
- Tagihan bulanan
- Riwayat pembayaran
- Pengumuman dari pengelola

### ⚙️ Dashboard Admin
- Manajemen data kamar (CRUD)
- Manajemen data penghuni
- Verifikasi pembayaran
- Laporan keuangan
- Pengumuman

### 👔 Dashboard Pemilik (Read-Only)
- Statistik kamar & okupansi
- Grafik pendapatan
- Laporan keuangan bulanan
- **Tidak ada tombol edit/tambah/hapus**

---

## 📊 Data Kost (Real Data)

### 🏠 Kamar
- **Jumlah**: 18 kamar
- **Harga Dasar**: Rp 500.000/bulan
- **Kapasitas**:
  - 1 orang: Rp 500.000/bulan
  - 2 orang (+ kasur tambahan): Rp 700.000/bulan (+Rp 200.000)

### 🛏️ Fasilitas
- ✅ Lemari pakaian (sudah tersedia)
- ✅ Listrik gratis
- ✅ Air gratis
- ✅ Parkiran gratis (motor & mobil)
- ✅ Dekat Kampus 1 Uniku (~5 menit)
- ✅ Lingkungan nyaman & aman

### 📍 Lokasi & Kontak
- **Alamat**: Jl. Daeng Sutigna, Cijoho, Kec. Kuningan, Kabupaten Kuningan, Jawa Barat 45513
- **WhatsApp**: 089657769065
- **Plus Code**: 2GG3+MC Cijoho, Kabupaten Kuningan, Jawa Barat
- **Jam Kunjungan**: Senin - Minggu, 08:00 - 20:00 WIB

---

## 📂 Struktur File

```
new-holland-kost/
│
├── index.html              # Landing page
├── login.html              # Login (multi-role)
├── register.html           # Registrasi penghuni
├── detail-kamar.html       # Detail kamar
├── lokasi.html             # Halaman lokasi lengkap
│
├── css/
│   └── styles.css          # Main stylesheet
│
├── js/
│   └── script.js           # Main JavaScript
│
├── tenant/
│   └── dashboard.html      # Dashboard penghuni
│
├── admin/
│   └── dashboard.html      # Dashboard admin
│
├── owner/
│   └── dashboard.html      # Dashboard pemilik
│
└── README.md               # Dokumentasi
```

---

## 🎨 Design System

### 🎨 Color Palette
```css
--primary: #1e5a3f;         /* Hijau tua */
--primary-dark: #14402d;    /* Hijau lebih gelap */
--primary-light: #2d7a56;   /* Hijau terang */
--secondary: #f8fafc;       /* Abu-abu terang */
--accent: #10b981;          /* Hijau aksen */
--text: #1e293b;            /* Text utama */
--text-light: #64748b;      /* Text secondary */
--border: #e2e8f0;          /* Border */
--warning: #f59e0b;         /* Kuning warning */
--danger: #ef4444;          /* Merah danger */
--info: #3b82f6;            /* Biru info */
```

### 📝 Typography
- **Font Family**: Inter (Google Fonts)
- **Heading**: Bold (700-800)
- **Body**: Regular-Medium (400-600)

### 🔲 Components
- Card dengan border radius 12px
- Button dengan border radius 8-10px
- Smooth hover transitions
- Shadow untuk depth
- Responsive grid layouts

---

## 🚀 Cara Menggunakan

### 1️⃣ Setup
```bash
# Download semua file
# Extract ke folder lokal

# Struktur folder:
new-holland-kost/
├── index.html
├── login.html
├── register.html
├── detail-kamar.html
├── lokasi.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── tenant/
│   └── dashboard.html
├── admin/
│   └── dashboard.html
└── owner/
    └── dashboard.html
```

### 2️⃣ Buka di Browser
- Buka `index.html` di browser modern (Chrome, Firefox, Edge)
- Atau gunakan Live Server di VS Code

### 3️⃣ Navigasi
- **Landing Page**: `index.html`
- **Login**: Klik "Masuk" atau buka `login.html`
  - Pilih role: Penghuni/Admin/Pemilik
  - Login akan redirect ke dashboard sesuai role
- **Registrasi**: Klik "Daftar Sekarang" atau buka `register.html`

### 4️⃣ Demo Login
Karena tanpa backend, login langsung redirect ke:
- **Penghuni** → `tenant/dashboard.html`
- **Admin** → `admin/dashboard.html`
- **Pemilik** → `owner/dashboard.html`

---

## 💻 Fitur JavaScript

### ✅ Yang Sudah Dibuat
1. **Mobile Navigation**
   - Hamburger menu toggle
   - Auto-close on link click

2. **Smooth Scrolling**
   - Scroll ke section dengan smooth animation

3. **Form Validation**
   - Email validation
   - Phone number validation
   - Password match checker
   - Required fields

4. **Notification System**
   - Toast notifications (success/error/info)

5. **WhatsApp Float Button**
   - Fixed button ke nomor: 089657769065

6. **Utility Functions**
   - Price calculator
   - Currency formatter (IDR)
   - LocalStorage helper
   - Date formatter
   - Debounce function

7. **Intersection Observer**
   - Lazy load animations
   - Fade in on scroll

---

## 📱 Responsive Breakpoints

```css
/* Desktop: Default */
@media (min-width: 969px) { ... }

/* Tablet: 768px - 968px */
@media (max-width: 968px) {
  - Sidebar menu menjadi mobile
  - Grid 2 kolom
  - Hamburger menu
}

/* Mobile: < 768px */
@media (max-width: 640px) {
  - Grid 1 kolom
  - Stack layout
  - Touch-friendly buttons
}
```

---

## 🔧 Customization

### Mengubah Warna
Edit di `css/styles.css`:
```css
:root {
    --primary: #1e5a3f;    /* Ganti sesuai brand */
    --accent: #10b981;
}
```

### Mengubah Data Kost
Edit langsung di HTML:
```html
<!-- Data kamar di index.html -->
<div class="stat-value">18</div>
<div class="stat-label">Total Kamar</div>

<!-- Harga kamar -->
<div class="room-price">Rp 500.000</div>
```

### Mengubah Kontak
Edit di `index.html` dan `lokasi.html`:
```html
<p>089657769065</p>
<a href="https://wa.me/6289657769065">WhatsApp</a>
```

---

## 🎯 Best Practices

✅ **Yang Sudah Diterapkan:**
- Semantic HTML5
- CSS Variables untuk konsistensi
- Mobile-first approach
- Clean code structure
- Accessible components
- Performance optimized
- No inline styles (kecuali utility)

---

## 📸 Screenshot & Preview

### 🏠 Landing Page
- Hero section dengan statistik kost
- Grid 3 kolom untuk fasilitas
- Card kamar dengan harga

### 🔐 Login & Register
- Split layout (left: branding, right: form)
- Multi-role selection
- Form validation

### 📍 Lokasi
- Google Maps embed
- Informasi kontak lengkap
- Nearby places

### 📊 Dashboard
- Sidebar navigation
- Stats cards
- Data tables
- Charts placeholder

---

## 🐛 Known Issues

⚠️ **Limitasi:**
1. Tidak ada backend (data tidak tersimpan)
2. Login hanya simulasi (langsung redirect)
3. Form submission tidak ke server
4. Chart menggunakan placeholder
5. Upload gambar tidak berfungsi

✅ **Solusi:**
- Integrasikan dengan backend (Laravel/Node.js/PHP)
- Gunakan database (MySQL/PostgreSQL)
- Implementasi Chart.js untuk grafik
- Tambahkan file upload dengan storage

---

## 📦 Dependencies

### ✅ Sudah Included:
- Google Fonts (Inter)
- Pure CSS (No framework)
- Vanilla JavaScript

### 📚 Optional (Untuk Development):
- Chart.js (untuk grafik)
- SweetAlert2 (untuk alert cantik)
- DataTables (untuk tabel interaktif)

---

## 🚀 Roadmap

### Phase 1: UI/UX ✅ (DONE)
- Landing page
- Login & Register
- Dashboard (3 role)
- Responsive design

### Phase 2: Backend (Next)
- API integration
- Database design
- Authentication
- CRUD operations

### Phase 3: Features (Future)
- Payment gateway
- Upload bukti transfer
- Email notifications
- Export reports (PDF/Excel)

---

## 👨‍💻 Developer Notes

### Untuk Developer yang Akan Lanjutkan:

1. **Struktur sudah siap** untuk integrasi backend
2. **LocalStorage helper** sudah dibuat untuk state management
3. **Form validation** sudah ada, tinggal kirim ke API
4. **Responsive** sudah optimal
5. **Color system** konsisten dengan CSS Variables

### Backend Recommendation:
- Laravel (PHP) - Recommended untuk CRUD
- Express.js (Node.js) - Recommended untuk API
- Firebase - Untuk quick prototype

---

## 📞 Support & Contact

**Kost New Holland Indah**
- 📍 Jl. Daeng Sutigna, Cijoho, Kuningan 45513
- 📱 WhatsApp: 089657769065
- 🗺️ Plus Code: 2GG3+MC Cijoho

---

## 📄 License

This project is a UI/UX prototype for educational purposes.

---

## 🙏 Credits

- Design: Modern minimalist approach
- Icons: Emoji (native)
- Fonts: Inter (Google Fonts)
- Maps: Google Maps Embed

---

**Built with ❤️ for New Holland Indah Kost**

*Last Updated: Januari 2025*