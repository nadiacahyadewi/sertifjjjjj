import json
import os

new_data = [
    {
        "no": 11,
        "soal_en": "What are three advantages of connection pooling? (Choose 3.)",
        "soal_id": "Apa tiga keuntungan dari connection pooling (penggabungan koneksi)? (Pilih 3.)",
        "pilihan_en": "A. Improved scalability\nB. Improved performance\nC. Improved security\nD. Reduced time to create a connection\nE. Requires no configuration",
        "jawaban": "A, B, D",
        "penjelasan": "Connection pooling menyimpan sekumpulan koneksi database yang sudah terbuka agar dapat digunakan ulang. Ini mengurangi waktu pembuatan koneksi (Reduced time), meningkatkan performa (Improved performance), dan memungkinkan aplikasi menangani lebih banyak pengguna secara bersamaan (Improved scalability)."
    },
    {
        "no": 12,
        "soal_en": "Move each version control system command from the list on the left to the correct description on the right.\nCommands: branch, commit, merge, rollback",
        "soal_id": "Pindahkan setiap perintah sistem kontrol versi dari daftar di sebelah kiri ke deskripsi yang tepat di sebelah kanan.\nPerintah: branch, commit, merge, rollback",
        "pilihan_en": "Descriptions:\n- Manages a line of development\n- Updates all or part of the working project\n- Points your local project back to a previous state\n- Brings the content of another project into the current project",
        "jawaban": "1. branch: Manages a line of development\n2. commit: Updates all or part of the working project\n3. rollback: Points your local project back to a previous state\n4. merge: Brings the content of another project into the current project",
        "penjelasan": "'branch' membuat jalur pengembangan baru. 'commit' menyimpan/memperbarui perubahan pada repositori. 'rollback' mengembalikan status proyek ke titik sebelumnya. 'merge' menggabungkan perubahan dari branch/proyek lain ke proyek saat ini."
    },
    {
        "no": 13,
        "soal_en": "For each statement about secure coding practices, select True or False.\n- Digital signatures encrypt messages using the sender's public key.\n- CSRF (cross-site request forgery) tokens are used to prevent attacks.\n- One way to prevent SQL injection attacks is to escape user input.",
        "soal_id": "Untuk setiap pernyataan tentang praktik pemrograman aman, pilih Benar (True) atau Salah (False).\n- Tanda tangan digital mengenkripsi pesan menggunakan public key (kunci publik) pengirim.\n- Token CSRF (cross-site request forgery) digunakan untuk mencegah serangan.\n- Salah satu cara mencegah serangan SQL injection adalah melakukan escape pada input pengguna.",
        "pilihan_en": "True / False choices.",
        "jawaban": "False, True, True",
        "penjelasan": "1 (False): Tanda tangan digital ditandatangani menggunakan private key (kunci privat) pengirim, bukan public key. 2 (True): CSRF token memang merupakan standar untuk mencegah serangan request palsu dari lintas situs. 3 (True): Melakukan escaping atau validasi input adalah salah satu cara untuk mencegah SQL Injection."
    },
    {
        "no": 14,
        "soal_en": "You write the following code:\npublic delegate void Notification();\npublic Notification DelegateA;\nDelegateA = MethodA;\nDelegateA += MethodA;\n\npublic event Notification EventA;\nEventA = EventHandlerA;\nEventA += EventHandlerA;\n\nWhich statement prevents the program from running correctly?",
        "soal_id": "Anda menulis kode berikut:\npublic delegate void Notification();\npublic Notification DelegateA;\nDelegateA = MethodA;\nDelegateA += MethodA;\n\npublic event Notification EventA;\nEventA = EventHandlerA;\nEventA += EventHandlerA;\n\nPernyataan manakah yang mencegah program berjalan dengan benar?",
        "pilihan_en": "A. DelegateA = MethodA;\nB. DelegateA += MethodA;\nC. EventA = EventHandlerA;\nD. EventA += EventHandlerA;",
        "jawaban": "C. EventA = EventHandlerA;",
        "penjelasan": "Dalam C#, sebuah Event ('EventA') tidak dapat di-assign secara langsung menggunakan operator '=' dari luar kelas tempat ia dideklarasikan. Kita hanya bisa menambahkan (+=) atau mengurangi (-=) handler dari event tersebut."
    },
    {
        "no": 15,
        "soal_en": "You are translating software specifications into code components. The specifications require a class that cannot be instantiated, but can specify methods that must be implemented in concrete inherited classes.\nWhich type of class should you build?",
        "soal_id": "Anda sedang menerjemahkan spesifikasi perangkat lunak ke dalam komponen kode. Spesifikasi tersebut membutuhkan sebuah class yang tidak dapat di-instansiasi, tetapi dapat menetapkan metode yang harus diimplementasikan oleh class turunan yang konkrit.\nTipe class apakah yang harus Anda buat?",
        "pilihan_en": "A. public\nB. abstract\nC. protected\nD. sealed",
        "jawaban": "B. abstract",
        "penjelasan": "Class 'abstract' (abstrak) tidak dapat di-instansiasi langsung (tidak bisa di-new). Class ini digunakan sebagai blueprint yang menyediakan kerangka (termasuk metode abstrak) yang wajib diimplementasikan oleh class-class turunannya."
    },
    {
        "no": 16,
        "soal_en": "You create an application that contains a function named Red. Red calls a function named Blue.\nHow does the compiler return to the correct location in the code path after Blue finishes executing?",
        "soal_id": "Anda membuat aplikasi yang berisi sebuah fungsi bernama Red. Fungsi Red memanggil fungsi bernama Blue.\nBagaimana compiler dapat kembali ke lokasi yang tepat pada alur kode setelah fungsi Blue selesai dieksekusi?",
        "pilihan_en": "A. Function calls are stored on the stack...\nB. Function calls are stored in memory on the heap...\nC. Function calls are stored in memory on the heap...\nD. Function calls are stored on the stack...",
        "jawaban": "A. Function calls are stored on the stack. After a function completes, all its data is popped off the stack, leaving the last instruction at the top.",
        "penjelasan": "Setiap pemanggilan fungsi beserta variabel lokalnya disimpan di dalam Call Stack. Ketika fungsi (Blue) selesai, instruksi atau datanya di-'pop' (dikeluarkan) dari stack, dan eksekusi dilanjutkan dari posisi fungsi pemanggilnya (Red) yang kini berada di posisi atas stack."
    },
    {
        "no": 17,
        "soal_en": "Which two statements correctly describe JSON objects? (Choose 2.)",
        "soal_id": "Dua pernyataan manakah yang dengan tepat mendeskripsikan objek JSON? (Pilih 2.)",
        "pilihan_en": "A. JSON objects can utilize namespaces.\nB. JSON objects can be built with name/value pairs.\nC. JSON objects are extensible.\nD. JSON objects can be built with an ordered list of values.",
        "jawaban": "B dan C",
        "penjelasan": "Objek JSON dibangun dengan menggunakan pasangan kunci/nilai (name/value pairs) dan bersifat extensible (dapat diperluas atau ditambah elemen baru kapan saja). JSON tidak mengenal konsep 'namespace' bawaan, dan urutan tidak dijamin dalam JSON Object (sedangkan ordered list adalah JSON Array)."
    },
    {
        "no": 18,
        "soal_en": "You are extending an application that stores and displays the results of various types of foot races. The application contains the following definitions: ...\nMatch declarations to the implementation of FootRace.",
        "soal_id": "Anda memperluas aplikasi yang menyimpan dan menampilkan hasil perlombaan lari. Lengkapi kode FootRace dengan memindahkan deklarasi yang tepat ke lokasinya.",
        "pilihan_en": "Declarations:\n- public override void Display()\n- public void DisplayRaw()\n- void IDisplayResult.Display()\n- private void Display()",
        "jawaban": "1. public override void Display()\n2. public void DisplayRaw()\n3. void IDisplayResult.Display()",
        "penjelasan": "Berdasarkan output yang diminta: '99 seconds' muncul dari pemanggilan r1.Display() sehingga itu hasil override dari base (deklarasi 1). '99' berasal dari pemanggilan r1.DisplayRaw() yang memanggil base.Display() (deklarasi 2). '1.65 minutes' dipanggil via interface r2 (IDisplayResult.Display), ini adalah implementasi eksplisit interface (deklarasi 3)."
    },
    {
        "no": 19,
        "soal_en": "You need to create the following graphic (green fading to black with rounded corners) by using CSS.\nFor the background-image style, you should use the value:\nFor the border-radius style, you should use the value:",
        "soal_id": "Anda perlu membuat grafik (gradasi warna hijau pudar ke hitam dengan sudut membulat) menggunakan CSS.\nUntuk style background-image, Anda harus menggunakan nilai:\nUntuk style border-radius, Anda harus menggunakan nilai:",
        "pilihan_en": "Dropdown 1: linear-gradient(to bottom, green, black);\nDropdown 2: 10px;",
        "jawaban": "1. linear-gradient(to bottom, green, black);\n2. 10px;",
        "penjelasan": "Grafik memiliki warna hijau di atas dan gradasi memudar menjadi hitam di bawah, sehingga 'to bottom, green, black' adalah perintah gradient yang benar. Sudut objek tersebut melengkung rata di setiap sudut, sehingga nilainya cukup menggunakan '10px' saja."
    },
    {
        "no": 20,
        "soal_en": "You need to group all the style settings into a separate file that you can apply to all the pages of a web application.\nWhat should you do?",
        "soal_id": "Anda perlu mengelompokkan semua pengaturan style ke dalam sebuah file terpisah yang dapat Anda terapkan pada semua halaman web application.\nApa yang harus Anda lakukan?",
        "pilihan_en": "A. Use an Extensible Markup Language (XML) schema.\nB. Use an external style sheet.\nC. Use an internal style sheet.\nD. Use inline styles.",
        "jawaban": "B. Use an external style sheet.",
        "penjelasan": "Untuk menggunakan style yang seragam (bisa dipakai ulang) di seluruh halaman pada satu web aplikasi secara efisien dan memisahkan struktur (HTML) dan gaya (CSS), praktik terbaiknya adalah dengan membuat dan menggunakan Eksternal Style Sheet (.css file)."
    }
]

data_file = r"c:\Users\PREDATOR\Documents\KULIAH\latihan sertifikasi internasional\data.json"
with open(data_file, 'r', encoding='utf-8') as f:
    data = json.load(f)

data.extend(new_data)

with open(data_file, 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=4)

print("Data appended successfully.")
