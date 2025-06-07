
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { School, ArrowLeft, Upload, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

const Pendaftaran = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    namaLengkap: '',
    nisn: '',
    tempatLahir: '',
    tanggalLahir: '',
    jenisKelamin: '',
    agama: '',
    alamat: '',
    noTelepon: '',
    email: '',
    namaAyah: '',
    namaIbu: '',
    pekerjaanAyah: '',
    pekerjaanIbu: '',
    asalSekolah: '',
    nilaiUN: '',
    jurusan: '',
    motivasi: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      // Generate random registration number
      const regNumber = `SMK${new Date().getFullYear()}${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;
      
      // Store registration data in localStorage
      localStorage.setItem('registrationData', JSON.stringify({
        ...formData,
        nomorPendaftaran: regNumber,
        tanggalDaftar: new Date().toISOString(),
        status: 'Menunggu Verifikasi'
      }));

      toast({
        title: "Pendaftaran Berhasil!",
        description: `Nomor pendaftaran Anda: ${regNumber}`,
      });

      setIsSubmitting(false);
      navigate('/dashboard');
    }, 2000);
  };

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
              <p className="text-sm text-gray-600">Form Pendaftaran</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Formulir Pendaftaran Siswa Baru</CardTitle>
              <CardDescription>
                Lengkapi semua data dengan benar dan pastikan informasi yang diberikan valid
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Data Pribadi */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-blue-600">Data Pribadi</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="namaLengkap">Nama Lengkap *</Label>
                      <Input
                        id="namaLengkap"
                        value={formData.namaLengkap}
                        onChange={(e) => handleInputChange('namaLengkap', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="nisn">NISN *</Label>
                      <Input
                        id="nisn"
                        value={formData.nisn}
                        onChange={(e) => handleInputChange('nisn', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tempatLahir">Tempat Lahir *</Label>
                      <Input
                        id="tempatLahir"
                        value={formData.tempatLahir}
                        onChange={(e) => handleInputChange('tempatLahir', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tanggalLahir">Tanggal Lahir *</Label>
                      <Input
                        id="tanggalLahir"
                        type="date"
                        value={formData.tanggalLahir}
                        onChange={(e) => handleInputChange('tanggalLahir', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="jenisKelamin">Jenis Kelamin *</Label>
                      <Select onValueChange={(value) => handleInputChange('jenisKelamin', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih jenis kelamin" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Laki-laki">Laki-laki</SelectItem>
                          <SelectItem value="Perempuan">Perempuan</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="agama">Agama *</Label>
                      <Select onValueChange={(value) => handleInputChange('agama', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih agama" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Islam">Islam</SelectItem>
                          <SelectItem value="Kristen">Kristen</SelectItem>
                          <SelectItem value="Katolik">Katolik</SelectItem>
                          <SelectItem value="Hindu">Hindu</SelectItem>
                          <SelectItem value="Buddha">Buddha</SelectItem>
                          <SelectItem value="Konghucu">Konghucu</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2 mt-6">
                    <Label htmlFor="alamat">Alamat Lengkap *</Label>
                    <Textarea
                      id="alamat"
                      value={formData.alamat}
                      onChange={(e) => handleInputChange('alamat', e.target.value)}
                      required
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="space-y-2">
                      <Label htmlFor="noTelepon">No. Telepon *</Label>
                      <Input
                        id="noTelepon"
                        type="tel"
                        value={formData.noTelepon}
                        onChange={(e) => handleInputChange('noTelepon', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Data Orang Tua */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-blue-600">Data Orang Tua/Wali</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="namaAyah">Nama Ayah *</Label>
                      <Input
                        id="namaAyah"
                        value={formData.namaAyah}
                        onChange={(e) => handleInputChange('namaAyah', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="namaIbu">Nama Ibu *</Label>
                      <Input
                        id="namaIbu"
                        value={formData.namaIbu}
                        onChange={(e) => handleInputChange('namaIbu', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pekerjaanAyah">Pekerjaan Ayah *</Label>
                      <Input
                        id="pekerjaanAyah"
                        value={formData.pekerjaanAyah}
                        onChange={(e) => handleInputChange('pekerjaanAyah', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pekerjaanIbu">Pekerjaan Ibu *</Label>
                      <Input
                        id="pekerjaanIbu"
                        value={formData.pekerjaanIbu}
                        onChange={(e) => handleInputChange('pekerjaanIbu', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Data Akademik */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-blue-600">Data Akademik</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="asalSekolah">Asal Sekolah *</Label>
                      <Input
                        id="asalSekolah"
                        value={formData.asalSekolah}
                        onChange={(e) => handleInputChange('asalSekolah', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="nilaiUN">Nilai Rata-rata UN/Rapor *</Label>
                      <Input
                        id="nilaiUN"
                        type="number"
                        step="0.1"
                        min="0"
                        max="100"
                        value={formData.nilaiUN}
                        onChange={(e) => handleInputChange('nilaiUN', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Pilihan Jurusan */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-blue-600">Pilihan Jurusan</h3>
                  <div className="space-y-2">
                    <Label htmlFor="jurusan">Jurusan yang Dipilih *</Label>
                    <Select onValueChange={(value) => handleInputChange('jurusan', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih jurusan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Rekayasa Perangkat Lunak">Rekayasa Perangkat Lunak</SelectItem>
                        <SelectItem value="Teknik Mesin">Teknik Mesin</SelectItem>
                        <SelectItem value="Teknik Industri">Teknik Industri</SelectItem>
                        <SelectItem value="Elektro">Elektro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2 mt-4">
                    <Label htmlFor="motivasi">Motivasi Memilih Jurusan</Label>
                    <Textarea
                      id="motivasi"
                      placeholder="Jelaskan mengapa Anda memilih jurusan ini..."
                      value={formData.motivasi}
                      onChange={(e) => handleInputChange('motivasi', e.target.value)}
                    />
                  </div>
                </div>

                {/* Upload Dokumen */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-blue-600">Upload Dokumen</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Foto 3x4 *</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <p className="mt-2 text-sm text-gray-600">Upload foto 3x4</p>
                        <Input type="file" accept="image/*" className="mt-2" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Ijazah/SKHUN *</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <p className="mt-2 text-sm text-gray-600">Upload ijazah</p>
                        <Input type="file" accept=".pdf,.jpg,.png" className="mt-2" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end space-x-4">
                  <Button type="button" variant="outline" onClick={() => navigate('/')}>
                    Batal
                  </Button>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Memproses...
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Daftar Sekarang
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Pendaftaran;
