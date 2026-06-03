import json

data_file = r"c:\Users\PREDATOR\Documents\KULIAH\latihan sertifikasi internasional\data.json"
with open(data_file, 'r', encoding='utf-8') as f:
    data = json.load(f)

# Shift items from index 20 to 29
for i in range(20, 30):
    data[i]["no"] = i + 4 # so index 20 (was 21) becomes 24, index 29 (was 30) becomes 33.

# New data for Q21, Q22, Q23
insert_data = [
    {
        "no": 21,
        "soal_en": "What is the purpose of the catch section in an exception handler?",
        "soal_id": "Apakah tujuan dari bagian catch dalam sebuah exception handler (penanganan pengecualian)?",
        "pilihan_en": "A. To conclude the execution of the application\nB. To execute code regardless of whether an exception is thrown\nC. To execute code only when an exception is thrown\nD. To break out of the error handler",
        "jawaban": "C. To execute code only when an exception is thrown",
        "penjelasan": "Blok catch digunakan untuk menangkap dan menangani exception (error) yang terjadi di dalam blok try. Kode di dalamnya hanya akan dieksekusi jika terjadi exception."
    },
    {
        "no": 22,
        "soal_en": "For each statement about unit testing, select True or False.\n- Unit testing tests the whole application with integrations and dependencies.\n- The unit test method calls the method it is testing, passes the data, and checks return values for accuracy.\n- The primary goal of unit testing is to take the smallest piece of testable software in the application, isolate it from the remainder of the code, and determine whether it behaves exactly as expected.",
        "soal_id": "Untuk setiap pernyataan mengenai unit testing, pilih True atau False.\n- Unit testing menguji keseluruhan aplikasi beserta integrasi dan dependensinya.\n- Metode unit test memanggil metode yang diujinya, mengirimkan data, dan mengecek keakuratan nilai kembaliannya.\n- Tujuan utama dari unit testing adalah mengambil bagian perangkat lunak terkecil yang dapat diuji dari aplikasi, mengisolasinya dari sisa kode, dan menentukan apakah bagian tersebut berperilaku persis seperti yang diharapkan.",
        "pilihan_en": "True / False choices.",
        "jawaban": "False, True, True",
        "penjelasan": "1 (False): Unit testing menguji komponen secara terisolasi, bukan integrasi seluruh aplikasi. 2 (True): Unit test memberikan input dan memverifikasi output/return value. 3 (True): Ini adalah definisi dan tujuan utama dari Unit Testing."
    },
    {
        "no": 23,
        "soal_en": "You are creating a web application. The client computers that will access the application run a variety of web browsers.\nWhich term describes the process of making the application available for client computers to access?",
        "soal_id": "Anda sedang membuat aplikasi web. Komputer klien yang akan mengakses aplikasi tersebut menjalankan berbagai macam web browser.\nIstilah manakah yang mendeskripsikan proses untuk membuat aplikasi tersedia agar dapat diakses oleh komputer klien?",
        "pilihan_en": "A. Virtualization\nB. Packaging\nC. Casting\nD. Hosting",
        "jawaban": "D. Hosting",
        "penjelasan": "Hosting adalah proses menempatkan file web aplikasi dan databasenya di sebuah server yang terhubung ke internet sehingga dapat diakses oleh klien secara online."
    }
]

# Insert Q21-23 at indices 20, 21, 22
for idx, item in enumerate(insert_data):
    data.insert(20 + idx, item)

# Append Q34-40
append_data = [
    {
        "no": 34,
        "soal_en": "A web page displays a clock element.\nYou need to complete the JavaScript code to update the clock element every second.\nCode:\n[Dropdown 1] (function updateClock() {\n  let d = new Date();\n  document.getElementById(\"clock\").innerHTML = ...\n} [Dropdown 2] [Dropdown 3]);",
        "soal_id": "Sebuah halaman web menampilkan elemen jam (clock).\nAnda perlu melengkapi kode JavaScript untuk memperbarui elemen jam tersebut setiap detik.\nKode:\n[Dropdown 1] (function updateClock() {\n  let d = new Date();\n  document.getElementById(\"clock\").innerHTML = ...\n} [Dropdown 2] [Dropdown 3]);",
        "pilihan_en": "Dropdown 1 options: fetch(, setInterval(, setTimeout(\nDropdown 2 options: updateClock, updateClock()\nDropdown 3 options: 1, 60, 100, 1000",
        "jawaban": "1. setInterval(\n2. updateClock\n3. 1000",
        "penjelasan": "Fungsi setInterval() digunakan untuk memanggil fungsi secara berulang pada interval waktu tertentu (dalam milidetik). Karena diminta untuk update setiap detik (1 detik = 1000 milidetik), maka kita gunakan setInterval(updateClock, 1000)."
    },
    {
        "no": 35,
        "soal_en": "Which term describes a C# class that inherits functionality from an existing class?",
        "soal_id": "Istilah manakah yang mendeskripsikan sebuah class C# yang mewarisi fungsionalitas dari class yang sudah ada?",
        "pilihan_en": "A. Base class\nB. Inherited class\nC. Superclass\nD. Derived class",
        "jawaban": "D. Derived class",
        "penjelasan": "Class yang menerima/mewarisi fungsionalitas disebut 'Derived class' (class turunan). Class yang memberikan/diwariskan disebut 'Base class' (class dasar)."
    },
    {
        "no": 36,
        "soal_en": "For each statement about linked lists, select True or False.\n- A linked list can be sorted.\n- A linked list has a maximum of 100 nodes.\n- You can add new nodes anywhere in a linked list.",
        "soal_id": "Untuk setiap pernyataan mengenai linked list, pilih True (Benar) atau False (Salah).\n- Linked list dapat diurutkan (di-sort).\n- Linked list memiliki maksimal 100 node.\n- Anda dapat menambahkan node baru di bagian mana saja pada linked list.",
        "pilihan_en": "True / False choices.",
        "jawaban": "True, False, True",
        "penjelasan": "1 (True): Linked list dapat diurutkan meskipun algoritmanya berbeda dengan array. 2 (False): Linked list memiliki ukuran yang dinamis sesuai ketersediaan memori, tidak dibatasi hanya 100 node. 3 (True): Dengan manipulasi pointer/referensi, node baru dapat disisipkan di awal, tengah, atau akhir."
    },
    {
        "no": 37,
        "soal_en": "Configure the transaction to meet the following requirements:\n- If the customer has only one invoice, delete the invoice.\n- If the customer has more than one invoice, cancel the transaction.\nCode:\n[Dropdown 1]\nDELETE Invoices WHERE CustomerID=134;\nIF @@ROWCOUNT > 1\nBEGIN;\n  [Dropdown 2]\nEND;\nELSE\nBEGIN;\n  [Dropdown 3]\nEND;",
        "soal_id": "Konfigurasikan transaksi (transaction) untuk memenuhi persyaratan berikut:\n- Jika customer hanya memiliki satu invoice, hapus invoice tersebut.\n- Jika customer memiliki lebih dari satu invoice, batalkan transaksinya.\nKode:\n[Dropdown 1]\nDELETE Invoices WHERE CustomerID=134;\nIF @@ROWCOUNT > 1\nBEGIN;\n  [Dropdown 2]\nEND;\nELSE\nBEGIN;\n  [Dropdown 3]\nEND;",
        "pilihan_en": "Dropdown selections.",
        "jawaban": "1. BEGIN TRAN;\n2. ROLLBACK TRAN;\n3. COMMIT TRAN;",
        "penjelasan": "Transaksi dimulai dengan 'BEGIN TRAN'. Jika baris yang terhapus (@@ROWCOUNT) lebih dari 1, transaksi dibatalkan dengan 'ROLLBACK TRAN' untuk mengembalikan data seperti semula. Jika tidak, data valid untuk dihapus dan disimpan permanen dengan 'COMMIT TRAN'."
    },
    {
        "no": 38,
        "soal_en": "You have a class with a property.\nYou need to ensure that consumers of the class can write to the value of the property.\nWhich keyword should you use?",
        "soal_id": "Anda memiliki sebuah class dengan sebuah properti.\nAnda perlu memastikan bahwa pengguna class tersebut (consumers) dapat menulis (mengisi/mengubah) nilai dari properti tersebut.\nKeyword manakah yang harus Anda gunakan?",
        "pilihan_en": "A. value\nB. add\nC. set\nD. get",
        "jawaban": "C. set",
        "penjelasan": "Dalam C#, keyword 'set' di dalam properti digunakan untuk memberikan akses tulis (write) kepada pengguna class. Sedangkan 'get' digunakan untuk akses baca (read)."
    },
    {
        "no": 39,
        "soal_en": "You work on an app development team. The app is in a Git source control system.\nComplete the statements by moving the appropriate terms:\n- You should first create a [ ? ] of the source code.\n- As you work and verify your changes locally, you need to perform a [ ? ] so that your changes can be saved in your local repository.\n- You should then perform a [ ? ] to save your changes in the remote repository.\n- To notify other developers of your changes, you should create a [ ? ].\n- After your features are complete, the other developers should perform a [ ? ].",
        "soal_id": "Anda bekerja di tim pengembang aplikasi yang menggunakan sistem kontrol sumber Git.\nLengkapi pernyataan dengan memindahkan istilah yang tepat:\n- Pertama, Anda harus membuat [ ? ] dari source code.\n- Saat Anda bekerja dan memverifikasi perubahan secara lokal, Anda perlu melakukan [ ? ] agar perubahan tersimpan di repositori lokal Anda.\n- Kemudian Anda melakukan [ ? ] untuk menyimpan perubahan ke repositori remote.\n- Untuk memberi tahu developer lain tentang perubahan Anda, Anda membuat [ ? ].\n- Setelah fitur selesai, developer lain harus melakukan [ ? ].",
        "pilihan_en": "Terms: merge, push, commit, pull request, branch, clone.",
        "jawaban": "1. branch\n2. commit\n3. push\n4. pull request\n5. merge",
        "penjelasan": "Alur kerja Git yang standar: membuat 'branch' baru untuk fitur, menyimpan perubahan secara lokal dengan 'commit', mengirimnya ke server dengan 'push', membuat 'pull request' agar tim me-review, lalu tim akan melakukan 'merge' untuk menggabungkannya ke branch utama."
    },
    {
        "no": 40,
        "soal_en": "Which statement correctly describes a C# method that is declared as virtual in the base class?",
        "soal_id": "Pernyataan manakah yang dengan benar mendeskripsikan sebuah metode C# yang dideklarasikan sebagai virtual di class dasar (base class)?",
        "pilihan_en": "A. The method is hidden from implementation by a derived class.\nB. The method can be overridden with its own implementation by a derived class.\nC. The method must be overridden in any non-abstract class that directly inherits from that class.\nD. The method cannot be overridden with its own implementation by a derived class.",
        "jawaban": "B. The method can be overridden with its own implementation by a derived class.",
        "penjelasan": "Keyword 'virtual' menandakan bahwa sebuah metode di class dasar diizinkan untuk (opsional) di-override (ditulis ulang/diganti) oleh class turunan menggunakan keyword 'override'."
    }
]

data.extend(append_data)

with open(data_file, 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=4)

print(f"Data fixed and updated successfully. Total items: {len(data)}")
