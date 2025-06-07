
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Users, Calendar, CheckCircle, ArrowRight, School, BookOpen, Cog, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  const jurusan = [
    {
      nama: "Rekayasa Perangkat Lunak",
      icon: <Cog className="w-8 h-8" />,
      deskripsi: "Mempelajari pengembangan software dan aplikasi modern",
      kuota: "36 siswa"
    },
    {
      nama: "Teknik Mesin",
      icon: <Cog className="w-8 h-8" />,
      deskripsi: "Teknologi mesin dan otomotif terdepan",
      kuota: "36 siswa"
    },
    {
      nama: "Teknik Industri",
      icon: <BookOpen className="w-8 h-8" />,
      deskripsi: "Optimasi sistem produksi dan manajemen industri",
      kuota: "36 siswa"
    },
    {
      nama: "Elektro",
      icon: <Zap className="w-8 h-8" />,
      deskripsi: "Teknologi kelistrikan dan elektronika",
      kuota: "36 siswa"
    }
  ];

  const alurPendaftaran = [
    {
      step: 1,
      title: "Pendaftaran Online",
      description: "Isi formulir pendaftaran dan upload dokumen",
      icon: <Users className="w-6 h-6" />
    },
    {
      step: 2,
      title: "Seleksi Berkas",
      description: "Verifikasi dan penilaian dokumen pendaftaran",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      step: 3,
      title: "Pengumuman",
      description: "Hasil seleksi dan jadwal daftar ulang",
      icon: <Calendar className="w-6 h-6" />
    },
    {
      step: 4,
      title: "Daftar Ulang",
      description: "Konfirmasi kehadiran dan pembayaran",
      icon: <GraduationCap className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <School className="w-8 h-8 text-blue-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">SMK Codesyariah</h1>
                <p className="text-sm text-gray-600">Sistem PPDB 2024</p>
              </div>
            </div>
            <Button 
              onClick={() => navigate('/dashboard')}
              variant="outline"
              className="hidden md:flex"
            >
              Cek Status Pendaftaran
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
            Pendaftaran Dibuka
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            PPDB SMK Codesyariah
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan SMK Codesyariah dan wujudkan masa depan teknologi yang cerah. 
            Pendaftaran siswa baru tahun ajaran 2024/2025 telah dibuka!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => navigate('/pendaftaran')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
            >
              Daftar Sekarang
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => navigate('/dashboard')}
              className="px-8 py-6 text-lg"
            >
              Cek Status Pendaftaran
            </Button>
          </div>
        </div>
      </section>

      {/* Jurusan Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Jurusan Tersedia</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pilih jurusan yang sesuai dengan minat dan bakatmu untuk masa depan yang cerah
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {jurusan.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                    {item.icon}
                  </div>
                  <CardTitle className="text-lg">{item.nama}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-4">
                    {item.deskripsi}
                  </CardDescription>
                  <Badge variant="secondary">{item.kuota}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Alur Pendaftaran */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Alur Pendaftaran</h2>
            <p className="text-gray-600">Ikuti langkah-langkah berikut untuk menyelesaikan pendaftaran</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {alurPendaftaran.map((item, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 p-4 bg-blue-600 text-white rounded-full w-fit">
                  {item.icon}
                </div>
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Siap Memulai Masa Depanmu?</h2>
          <p className="text-xl mb-8 opacity-90">
            Jangan lewatkan kesempatan untuk bergabung dengan SMK Codesyariah
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate('/pendaftaran')}
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg"
          >
            Mulai Pendaftaran
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <School className="w-6 h-6" />
            <h3 className="text-lg font-semibold">SMK Codesyariah</h3>
          </div>
          <p className="text-gray-400">
            Jl. Pendidikan No. 123, Kota Teknologi, Indonesia
          </p>
          <p className="text-gray-400">
            Telp: (021) 1234-5678 | Email: info@smkcodesyariah.sch.id
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
