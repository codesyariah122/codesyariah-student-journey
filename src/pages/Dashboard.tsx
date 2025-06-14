import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { School, ArrowLeft, Search, User, FileText, Calendar, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Progress } from "@/components/ui/progress";

const Dashboard = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [registrationData, setRegistrationData] = useState<any>(null);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    // Check if there's registration data in localStorage
    const storedData = localStorage.getItem('registrationData');
    if (storedData) {
      setRegistrationData(JSON.parse(storedData));
    }
  }, []);

  const handleSearch = () => {
    setIsSearching(true);
    
    // Simulate search
    setTimeout(() => {
      const storedData = localStorage.getItem('registrationData');
      if (storedData) {
        const data = JSON.parse(storedData);
        if (data.nomorPendaftaran === searchQuery || data.nisn === searchQuery) {
          setRegistrationData(data);
        } else {
          setRegistrationData(null);
        }
      }
      setIsSearching(false);
    }, 1000);
  };

  const getStatusProgress = (status: string) => {
    switch (status) {
      case 'Menunggu Verifikasi':
        return 25;
      case 'Dalam Seleksi':
        return 50;
      case 'Lulus Seleksi':
        return 75;
      case 'Diterima':
        return 100;
      default:
        return 0;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Menunggu Verifikasi':
        return 'bg-yellow-100 text-yellow-800';
      case 'Dalam Seleksi':
        return 'bg-blue-100 text-blue-800';
      case 'Lulus Seleksi':
        return 'bg-green-100 text-green-800';
      case 'Diterima':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const timeline = [
    {
      step: 1,
      title: "Pendaftaran",
      description: "Formulir telah disubmit",
      status: "completed",
      date: registrationData?.tanggalDaftar ? new Date(registrationData.tanggalDaftar).toLocaleDateString('id-ID') : '',
      icon: <FileText className="w-4 h-4" />
    },
    {
      step: 2,
      title: "Verifikasi Berkas",
      description: "Dokumen sedang diverifikasi",
      status: registrationData?.status === 'Menungga Verifikasi' ? "current" : registrationData ? "completed" : "pending",
      date: "2-3 hari kerja",
      icon: <CheckCircle className="w-4 h-4" />
    },
    {
      step: 3,
      title: "Seleksi",
      description: "Proses penilaian akademik",
      status: registrationData?.status === 'Dalam Seleksi' ? "current" : registrationData?.status === 'Lulus Seleksi' || registrationData?.status === 'Diterima' ? "completed" : "pending",
      date: "1 minggu",
      icon: <User className="w-4 h-4" />
    },
    {
      step: 4,
      title: "Pengumuman",
      description: "Hasil seleksi diumumkan",
      status: registrationData?.status === 'Lulus Seleksi' || registrationData?.status === 'Diterima' ? "completed" : "pending",
      date: "15 Juli 2024",
      icon: <AlertCircle className="w-4 h-4" />
    },
    {
      step: 5,
      title: "Daftar Ulang",
      description: "Konfirmasi kehadiran",
      status: registrationData?.status === 'Diterima' ? "completed" : "pending",
      date: "20-25 Juli 2024",
      icon: <Calendar className="w-4 h-4" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/')}
              className="mr-2"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali
            </Button>
            <School className="w-6 h-6 text-blue-600" />
            <div>
              <h1 className="text-lg font-bold text-gray-900">SMK Codesyariah</h1>
              <p className="text-sm text-gray-600">Dashboard PPDB</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Show Profile if registration data exists */}
          {registrationData && (
            <div className="mb-8">
              <div className="bg-white shadow rounded-lg p-6 flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-shrink-0 w-24 h-24 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full text-4xl font-bold">
                  {registrationData.namaLengkap
                    ? registrationData.namaLengkap
                        .split(' ')
                        .map((s: string) => s[0])
                        .join('')
                        .slice(0,2).toUpperCase()
                    : '--'}
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-blue-700 mb-2">Profil Siswa</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1 text-sm">
                    <div>
                      <p><span className="font-medium text-gray-700">Nama Lengkap:</span> {registrationData.namaLengkap}</p>
                      <p><span className="font-medium text-gray-700">NISN:</span> {registrationData.nisn}</p>
                      <p><span className="font-medium text-gray-700">Tempat, Tanggal Lahir:</span> {registrationData.tempatLahir}, {registrationData.tanggalLahir}</p>
                      <p><span className="font-medium text-gray-700">Jenis Kelamin:</span> {registrationData.jenisKelamin}</p>
                      <p><span className="font-medium text-gray-700">Agama:</span> {registrationData.agama}</p>
                      <p><span className="font-medium text-gray-700">Alamat:</span> {registrationData.alamat}</p>
                      <p><span className="font-medium text-gray-700">No. Telepon:</span> {registrationData.noTelepon}</p>
                      <p><span className="font-medium text-gray-700">Email:</span> {registrationData.email}</p>
                    </div>
                    <div>
                      <p><span className="font-medium text-gray-700">Nama Ayah:</span> {registrationData.namaAyah}</p>
                      <p><span className="font-medium text-gray-700">Pekerjaan Ayah:</span> {registrationData.pekerjaanAyah}</p>
                      <p><span className="font-medium text-gray-700">Nama Ibu:</span> {registrationData.namaIbu}</p>
                      <p><span className="font-medium text-gray-700">Pekerjaan Ibu:</span> {registrationData.pekerjaanIbu}</p>
                      <p><span className="font-medium text-gray-700">Asal Sekolah:</span> {registrationData.asalSekolah}</p>
                      <p><span className="font-medium text-gray-700">Nilai Rata-rata UN/Rapor:</span> {registrationData.nilaiUN}</p>
                      <p><span className="font-medium text-gray-700">Jurusan Dipilih:</span> {registrationData.jurusan}</p>
                      <p><span className="font-medium text-gray-700">Nomor Pendaftaran:</span> {registrationData.nomorPendaftaran}</p>
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-gray-500">Tanggal Daftar: {registrationData.tanggalDaftar ? new Date(registrationData.tanggalDaftar).toLocaleDateString('id-ID') : '-'}</div>
                </div>
              </div>
            </div>
          )}

          {/* Search Section */}
          {!registrationData && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Search className="w-5 h-5 mr-2" />
                  Cek Status Pendaftaran
                </CardTitle>
                <CardDescription>
                  Masukkan nomor pendaftaran atau NISN untuk melihat status pendaftaran Anda
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <Label htmlFor="searchQuery">Nomor Pendaftaran / NISN</Label>
                    <Input
                      id="searchQuery"
                      placeholder="Contoh: SMK20240001 atau 1234567890"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <div className="flex items-end">
                    <Button 
                      onClick={handleSearch}
                      disabled={!searchQuery || isSearching}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      {isSearching ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Mencari...
                        </>
                      ) : (
                        <>
                          <Search className="w-4 h-4 mr-2" />
                          Cari
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Registration Info */}
          {registrationData && (
            <>
              <Card className="mb-8">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">Informasi Pendaftaran</CardTitle>
                      <CardDescription>
                        Status pendaftaran untuk {registrationData.namaLengkap}
                      </CardDescription>
                    </div>
                    <Badge className={getStatusColor(registrationData.status)}>
                      {registrationData.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Data Calon Siswa</h4>
                      <div className="space-y-2 text-sm">
                        <p><span className="font-medium">Nama:</span> {registrationData.namaLengkap}</p>
                        <p><span className="font-medium">NISN:</span> {registrationData.nisn}</p>
                        <p><span className="font-medium">No. Pendaftaran:</span> {registrationData.nomorPendaftaran}</p>
                        <p><span className="font-medium">Jurusan:</span> {registrationData.jurusan}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Progress Pendaftaran</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{getStatusProgress(registrationData.status)}%</span>
                        </div>
                        <Progress value={getStatusProgress(registrationData.status)} className="h-2" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Timeline */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Timeline Pendaftaran</CardTitle>
                  <CardDescription>
                    Ikuti perkembangan status pendaftaran Anda
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {timeline.map((item, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                          item.status === 'completed' 
                            ? 'bg-green-100 text-green-600' 
                            : item.status === 'current' 
                            ? 'bg-blue-100 text-blue-600' 
                            : 'bg-gray-100 text-gray-400'
                        }`}>
                          {item.status === 'completed' ? (
                            <CheckCircle className="w-4 h-4" />
                          ) : item.status === 'current' ? (
                            <Clock className="w-4 h-4" />
                          ) : (
                            item.icon
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <h4 className={`font-medium ${
                              item.status === 'completed' ? 'text-green-800' 
                              : item.status === 'current' ? 'text-blue-800' 
                              : 'text-gray-500'
                            }`}>
                              {item.title}
                            </h4>
                            <span className="text-sm text-gray-500">{item.date}</span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Additional Info based on status */}
              {registrationData.status === 'Lulus Seleksi' && (
                <Card className="mb-8 border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-green-800">Selamat! Anda Lulus Seleksi</CardTitle>
                    <CardDescription className="text-green-700">
                      Silakan lakukan daftar ulang untuk mengkonfirmasi kehadiran
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-green-800 mb-2">Jadwal Daftar Ulang</h4>
                        <p className="text-green-700"><strong>Tanggal:</strong> 20-25 Juli 2024</p>
                        <p className="text-green-700"><strong>Waktu:</strong> 08.00 - 15.00 WIB</p>
                        <p className="text-green-700"><strong>Tempat:</strong> SMK Codesyariah, Ruang Tata Usaha</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-800 mb-2">Dokumen yang Dibawa</h4>
                        <ul className="list-disc list-inside text-green-700 space-y-1">
                          <li>Kartu Keluarga (fotocopy dan asli)</li>
                          <li>Akta Kelahiran (fotocopy dan asli)</li>
                          <li>Ijazah SMP/MTs (fotocopy dan asli)</li>
                          <li>Foto 3x4 sebanyak 4 lembar</li>
                          <li>Formulir daftar ulang (akan diberikan saat datang)</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {registrationData.status === 'Diterima' && (
                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-green-800">Selamat! Anda Resmi Menjadi Siswa SMK Codesyariah</CardTitle>
                    <CardDescription className="text-green-700">
                      Proses pendaftaran telah selesai. Selamat datang di keluarga besar SMK Codesyariah!
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-green-800 mb-2">Informasi Selanjutnya</h4>
                        <p className="text-green-700"><strong>Orientasi Siswa Baru:</strong> 1-3 Agustus 2024</p>
                        <p className="text-green-700"><strong>Mulai Pembelajaran:</strong> 5 Agustus 2024</p>
                        <p className="text-green-700"><strong>Kelas:</strong> X {registrationData.jurusan}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-800 mb-2">Kontak</h4>
                        <p className="text-green-700">Untuk informasi lebih lanjut, hubungi:</p>
                        <p className="text-green-700">📞 (021) 1234-5678</p>
                        <p className="text-green-700">✉️ info@smkcodesyariah.sch.id</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              <div className="flex justify-center">
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setRegistrationData(null);
                    setSearchQuery('');
                  }}
                >
                  Cari Pendaftaran Lain
                </Button>
              </div>
            </>
          )}

          {/* No Data Found */}
          {!registrationData && searchQuery && !isSearching && (
            <Card>
              <CardContent className="text-center py-8">
                <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Data Tidak Ditemukan</h3>
                <p className="text-gray-600 mb-4">
                  Nomor pendaftaran atau NISN yang Anda masukkan tidak ditemukan dalam sistem.
                </p>
                <Button 
                  onClick={() => navigate('/pendaftaran')}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Daftar Sekarang
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
