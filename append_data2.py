import json
import os

new_data = [
    {
        "no": 21,
        "soal_en": "Class C and class D inherit from class B. Class B inherits from class A. The classes have the methods shown in the following table.\nA: m1\nB: m2\nC: m3\nD: m4\nAll methods have a protected scope. Which methods can class C access?",
        "soal_id": "Class C dan class D mewarisi dari class B. Class B mewarisi dari class A. Class-class tersebut memiliki metode seperti tabel berikut.\nA: m1\nB: m2\nC: m3\nD: m4\nSemua metode memiliki scope protected. Metode manakah yang dapat diakses oleh class C?",
        "pilihan_en": "A. Only m1 and m3\nB. Only m2 and m3\nC. Only m3 and m4\nD. m1, m2, and m3\nE. m1, m3, and m4\nF. m2, m3, and m4",
        "jawaban": "D. m1, m2, and m3",
        "penjelasan": "Class C mewarisi B, dan B mewarisi A. Oleh karena itu, C memiliki akses ke metodenya sendiri (m3) dan metode protected dari semua class induknya (m1 dari A, m2 dari B). C tidak dapat mengakses m4 karena m4 berada di class D (sibling/saudara), bukan parent."
    },
    {
        "no": 22,
        "soal_en": "Complete the sentences by selecting the correct option from each drop-down list.\n- Every web server has [ an IP ] address and domain name that identifies it on the internet.\n- The web server accepts client requests via [ an HTTP ] protocol, and responds by transferring data back to the client in the form of a web page.\n- A client with access can revise or remove the content hosted on the web server via [ an FTP ] protocol.",
        "soal_id": "Lengkapi kalimat berikut dengan memilih opsi yang tepat dari setiap daftar drop-down.\n- Setiap web server memiliki alamat [ IP ] dan nama domain yang mengidentifikasinya di internet.\n- Web server menerima request dari klien melalui protokol [ HTTP ], dan merespons dengan mentransfer data kembali ke klien dalam bentuk halaman web.\n- Klien yang memiliki akses dapat merevisi atau menghapus konten yang di-host di web server melalui protokol [ FTP ].",
        "pilihan_en": "Dropdown 1: an IP\nDropdown 2: an HTTP\nDropdown 3: an FTP",
        "jawaban": "1. an IP\n2. an HTTP\n3. an FTP",
        "penjelasan": "Setiap server di internet diidentifikasi secara unik oleh alamat IP. Komunikasi standar untuk melayani halaman web adalah melalui HTTP (Hypertext Transfer Protocol). Untuk memodifikasi (mengunggah/menghapus) file di server secara langsung, protokol yang umum digunakan adalah FTP (File Transfer Protocol)."
    },
    {
        "no": 23,
        "soal_en": "You are reviewing a database design. A portion of this design is as shown:\nCustomer ---<| Order\nWhich term describes the relationship between Customer and Order?",
        "soal_id": "Anda sedang meninjau desain database. Sebagian dari desain tersebut ditunjukkan seperti gambar (Garis dari Customer ke Order dengan simbol crow's foot di sisi Order).\nIstilah manakah yang mendeskripsikan hubungan antara Customer dan Order?",
        "pilihan_en": "A. Many-to-many\nB. One-dimensional\nC. One-to-many\nD. One-to-one\nE. Multi-dimensional",
        "jawaban": "C. One-to-many",
        "penjelasan": "Simbol crow's foot (kaki gagak) pada entitas Order menunjukkan bahwa satu entitas Customer dapat memiliki banyak entitas Order. Oleh karena itu, hubungan ini adalah One-to-many (Satu ke banyak)."
    },
    {
        "no": 24,
        "soal_en": "A C# project includes a class named Landscape and a class named Tree. The Tree class has an internal property named color and a protected property named NumberOfLeaves.\nFor each statement, select True or False.\n- Methods in the Landscape class can access the color property.\n- Methods in the Landscape class can access the NumberOfLeaves property.\n- Methods in the Tree class can access all private properties in Landscape.",
        "soal_id": "Sebuah proyek C# mencakup class bernama Landscape dan class bernama Tree. Class Tree memiliki properti internal bernama 'color' dan properti protected bernama 'NumberOfLeaves'.\nUntuk setiap pernyataan, pilih True (Benar) atau False (Salah).\n- Metode di class Landscape dapat mengakses properti color.\n- Metode di class Landscape dapat mengakses properti NumberOfLeaves.\n- Metode di class Tree dapat mengakses semua properti private di Landscape.",
        "pilihan_en": "True / False choices.",
        "jawaban": "True, False, False",
        "penjelasan": "1 (True): Properti 'internal' dapat diakses oleh class manapun di dalam assembly/proyek yang sama. 2 (False): Properti 'protected' hanya bisa diakses oleh class itu sendiri atau class turunannya. (Landscape bukan turunan Tree). 3 (False): Properti 'private' hanya bisa diakses dari dalam class tempat ia dideklarasikan."
    },
    {
        "no": 25,
        "soal_en": "A table named Items has the following fields: ID, Description, Completed.\nYou need to delete only the rows where the Completed field is set to True.\nWhich statement should you use?",
        "soal_id": "Sebuah tabel bernama Items memiliki field berikut: ID, Description, Completed.\nAnda perlu menghapus HANYA baris-baris di mana field Completed bernilai True.\nPernyataan manakah yang harus Anda gunakan?",
        "pilihan_en": "A. DELETE FROM Items WHERE (Items.Completed = 0)\nB. DELETE FROM * WHERE (Items.Completed = 1)\nC. DELETE FROM Items WHERE (Items.Completed = 1)\nD. DELETE FROM Items",
        "jawaban": "C. DELETE FROM Items WHERE (Items.Completed = 1)",
        "penjelasan": "Dalam SQL, nilai Boolean 'True' sering direpresentasikan sebagai 1. Sintaks yang benar untuk menghapus data dengan kondisi adalah 'DELETE FROM nama_tabel WHERE kondisi', sehingga opsi C adalah yang paling tepat."
    },
    {
        "no": 26,
        "soal_en": "Which LINQ operator flattens a sequence?",
        "soal_id": "Operator LINQ manakah yang meratakan (flattens) sebuah sequence (urutan)?",
        "pilihan_en": "A. GroupBy\nB. ToArray\nC. Cast\nD. SelectMany",
        "jawaban": "D. SelectMany",
        "penjelasan": "Operator SelectMany pada LINQ digunakan untuk memproyeksikan setiap elemen dari sebuah sequence menjadi sequence baru, dan kemudian meratakan (flatten) sequence-sequence yang dihasilkan tersebut menjadi satu sequence tunggal."
    },
    {
        "no": 27,
        "soal_en": "Identify the correct components of the MVC architectural pattern in the diagram.\nTop-right box receives input from User and interacts with Bottom-right box. Top-right box sends output to Bottom-left box, which presents to User.",
        "soal_id": "Identifikasi komponen yang benar dari pola arsitektur MVC pada diagram.\nKotak Kanan-Atas menerima input dari User dan berinteraksi dengan kotak Kanan-Bawah. Kotak Kanan-Atas juga mengirim ke Kiri-Bawah yang ditampilkan ke User.",
        "pilihan_en": "Dropdowns for 3 boxes: Controller, Model, View.",
        "jawaban": "Top-Right: Controller, Bottom-Right: Model, Bottom-Left: View",
        "penjelasan": "Dalam alur aplikasi web MVC tradisional: Pengguna (User) mengirim request ke Controller (Top-Right). Controller mengolah logika dan memperbarui Model (Bottom-Right). Setelah itu, Controller memilih View (Bottom-Left) dan meneruskan data Model kepadanya. View kemudian di-render menjadi antarmuka untuk Pengguna."
    },
    {
        "no": 28,
        "soal_en": "You run the following code:\nint a = 10; int b = 20; int c = 30; int result = 0;\nif (a <= b || c > a)\n    result = 10;\nelse if (a <= b || c <= a)\n    result = 20;\nelse\n    result = 30;\nWhat is the value of result after the code runs?",
        "soal_id": "Anda menjalankan kode berikut:\nint a = 10; int b = 20; int c = 30; int result = 0;\nif (a <= b || c > a)\n    result = 10;\nelse if (a <= b || c <= a)\n    result = 20;\nelse\n    result = 30;\nApakah nilai dari result setelah kode dijalankan?",
        "pilihan_en": "A. 0\nB. 10\nC. 20\nD. 30",
        "jawaban": "B. 10",
        "penjelasan": "Pada statement kondisi pertama: (a <= b || c > a). Karena nilai a (10) kurang dari b (20), maka 'a <= b' bernilai True. Karena menggunakan operator OR (||), jika salah satu kondisi True, keseluruhan bernilai True. Oleh karena itu, blok if pertama langsung dieksekusi dan result menjadi 10."
    },
    {
        "no": 29,
        "soal_en": "Which type of function can a derived class override?",
        "soal_id": "Tipe fungsi apakah yang dapat di-override (ditimpa) oleh sebuah class turunan?",
        "pilihan_en": "A. A static function\nB. A non-virtual public member function\nC. A private virtual function\nD. A protected virtual member function",
        "jawaban": "D. A protected virtual member function",
        "penjelasan": "Untuk dapat di-override, sebuah metode harus ditandai sebagai 'virtual' (atau abstract/override) di class induknya, DAN harus dapat diakses oleh class turunannya. Fungsi 'private virtual' tidak bisa diakses dari class turunan, sehingga tidak bisa di-override. Yang bisa adalah 'protected virtual' atau 'public virtual'."
    },
    {
        "no": 30,
        "soal_en": "Which term describes the process of converting an object to a more general type?",
        "soal_id": "Istilah manakah yang mendeskripsikan proses mengonversi sebuah objek menjadi tipe yang lebih umum (general)?",
        "pilihan_en": "A. Upcasting\nB. Downcasting\nC. Interfacing\nD. Flexing",
        "jawaban": "A. Upcasting",
        "penjelasan": "Upcasting adalah proses mengubah referensi dari class turunan (spesifik) menjadi class induk (lebih general). Ini selalu aman (implicit). Downcasting adalah sebaliknya, dari class induk ke class turunan."
    }
]

data_file = r"c:\Users\PREDATOR\Documents\KULIAH\latihan sertifikasi internasional\data.json"
with open(data_file, 'r', encoding='utf-8') as f:
    data = json.load(f)

data.extend(new_data)

with open(data_file, 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=4)

print("Data appended successfully.")
