const quizData = [
    {
        "no": 1,
        "soal_en": "A stack contains integer values that are pushed onto the stack in the following order: 2, 4, 6, 8. You run the following sequence of operations:\nPop\nPush 3\nPop\nPush 4\nPush 6\nPush 7\nPop\nPop\nPop\n\nWhat is the value of the top element after these operations run?",
        "soal_id": "Sebuah stack berisi nilai integer yang dimasukkan ke dalam stack dengan urutan berikut: 2, 4, 6, 8. Anda menjalankan urutan operasi berikut:\nPop\nPush 3\nPop\nPush 4\nPush 6\nPush 7\nPop\nPop\nPop\n\nBerapakah nilai dari elemen teratas (top element) setelah operasi tersebut dijalankan?",
        "pilihan_en": "A. 2\nB. 3\nC. 6\nD. 7",
        "jawaban": "C. 6",
        "penjelasan": "Awal: [2, 4, 6, 8] (Top = 8)\nPop -> [2, 4, 6]\nPush 3 -> [2, 4, 6, 3]\nPop -> [2, 4, 6]\nPush 4 -> [2, 4, 6, 4]\nPush 6 -> [2, 4, 6, 4, 6]\nPush 7 -> [2, 4, 6, 4, 6, 7]\nPop -> [2, 4, 6, 4, 6]\nPop -> [2, 4, 6, 4]\nPop -> [2, 4, 6] (Top = 6)",
        "images": [
            "../Sample Soft Dev/1.jpg"
        ],
        "ui_info": {
            "type": "multiple-choice",
            "is_multi": false,
            "options": [
                "A. 2",
                "B. 3",
                "C. 6",
                "D. 7"
            ]
        }
    },
    {
        "no": 2,
        "soal_en": "You are designing a C# class for an application. You need to restrict the availability of the member variable 'accessCount' to the base class and any classes that are derived from the base class.\n\nWhich access modifier should you use?",
        "soal_id": "Anda sedang merancang class C# untuk sebuah aplikasi. Anda perlu membatasi ketersediaan variabel member 'accessCount' hanya untuk base class dan class apa pun yang diturunkan dari base class tersebut.\n\nAccess modifier manakah yang harus Anda gunakan?",
        "pilihan_en": "A. private\nB. internal\nC. protected\nD. public",
        "jawaban": "C. protected",
        "penjelasan": "'protected' membatasi akses hanya di dalam class itu sendiri dan class yang mewarisinya (derived class). 'private' hanya untuk class itu sendiri, 'internal' untuk assembly yang sama, dan 'public' bisa diakses dari mana saja.",
        "images": [
            "../Sample Soft Dev/2.jpg"
        ],
        "ui_info": {
            "type": "multiple-choice",
            "is_multi": false,
            "options": [
                "A. private",
                "B. internal",
                "C. protected",
                "D. public"
            ]
        }
    },
    {
        "no": 3,
        "soal_en": "Complete the diagram to illustrate the core functionality in the MVC architecture. Move each action from the list on the left to the correct location on the right.",
        "soal_id": "Lengkapi diagram berikut untuk mengilustrasikan fungsionalitas inti dalam arsitektur MVC. Pindahkan setiap aksi dari daftar ke lokasi yang benar.",
        "pilihan_en": "Available Actions:\n- converts event into request\n- displays data\n- interprets and passes data\n- user clicks button\n- validates request, stores data",
        "jawaban": "1. View: user clicks button\n2. Controller: converts event into request\n3. Model: validates request, stores data\n4. Controller: interprets and passes data\n5. View: displays data",
        "penjelasan": "Alur standar MVC (Model-View-Controller) dimulai dari interaksi pengguna pada View, yang mengirimkan event ke Controller. Controller mengubahnya menjadi request ke Model. Model memvalidasi dan menyimpan data, lalu Controller menginterpretasikan dan meneruskan data tersebut kembali ke View untuk ditampilkan.",
        "images": [
            "../Sample Soft Dev/3-1.jpg",
            "../Sample Soft Dev/3-2.jpg"
        ],
        "ui_info": {
            "type": "dropdown",
            "count": 5,
            "dropdowns": [
                {
                    "id": "Dropdown 1",
                    "label": "1. View",
                    "options": [
                        "converts event into request",
                        "displays data",
                        "interprets and passes data",
                        "user clicks button",
                        "validates request, stores data"
                    ]
                },
                {
                    "id": "Dropdown 2",
                    "label": "2. Controller",
                    "options": [
                        "converts event into request",
                        "displays data",
                        "interprets and passes data",
                        "user clicks button",
                        "validates request, stores data"
                    ]
                },
                {
                    "id": "Dropdown 3",
                    "label": "3. Model",
                    "options": [
                        "converts event into request",
                        "displays data",
                        "interprets and passes data",
                        "user clicks button",
                        "validates request, stores data"
                    ]
                },
                {
                    "id": "Dropdown 4",
                    "label": "4. Controller",
                    "options": [
                        "converts event into request",
                        "displays data",
                        "interprets and passes data",
                        "user clicks button",
                        "validates request, stores data"
                    ]
                },
                {
                    "id": "Dropdown 5",
                    "label": "5. View",
                    "options": [
                        "converts event into request",
                        "displays data",
                        "interprets and passes data",
                        "user clicks button",
                        "validates request, stores data"
                    ]
                }
            ]
        }
    },
    {
        "no": 4,
        "soal_en": "How can you structure data in a NoSQL document database?",
        "soal_id": "Bagaimana Anda dapat menyusun struktur data dalam database dokumen NoSQL?",
        "pilihan_en": "A. As nodes, edges, and properties\nB. As rows and columns\nC. As XML\nD. With two columns: one that represents a key and one that represents a value",
        "jawaban": "C. As XML",
        "penjelasan": "Document database (seperti MongoDB, CouchDB) menyimpan data dalam format dokumen terstruktur seperti JSON, BSON, atau XML. Opsi A merujuk ke Graph database, opsi B merujuk ke Relational database, dan opsi D merujuk ke Key-Value store.",
        "images": [
            "../Sample Soft Dev/4.jpg"
        ],
        "ui_info": {
            "type": "multiple-choice",
            "is_multi": false,
            "options": [
                "A. As nodes, edges, and properties",
                "B. As rows and columns",
                "C. As XML",
                "D. With two columns: one that represents a key and one that represents a value"
            ]
        }
    },
    {
        "no": 5,
        "soal_en": "Which process transforms data into an XML string for a web service?",
        "soal_id": "Proses manakah yang mengubah data menjadi string XML untuk sebuah web service?",
        "pilihan_en": "A. Deserialization\nB. Serialization\nC. Decoding\nD. Encoding",
        "jawaban": "B. Serialization",
        "penjelasan": "Serialisasi (Serialization) adalah proses menerjemahkan struktur data atau state dari sebuah objek menjadi format yang dapat disimpan atau ditransmisikan (seperti XML atau JSON). Proses sebaliknya (dari XML ke objek) disebut Deserialization.",
        "images": [
            "../Sample Soft Dev/5.jpg"
        ],
        "ui_info": {
            "type": "multiple-choice",
            "is_multi": false,
            "options": [
                "A. Deserialization",
                "B. Serialization",
                "C. Decoding",
                "D. Encoding"
            ]
        }
    },
    {
        "no": 6,
        "soal_en": "You run the following code:\nint a = 10;\nint b = 20;\nint c = 30;\nint result = 0;\n\nif (a <= b && c <= a)\n    result = 10;\nelse if (a <= b && b >= c)\n    result = 20;\nelse\n    result = 30;\n\nWhat is the value of result after the code runs?",
        "soal_id": "Anda menjalankan kode berikut:\nint a = 10;\nint b = 20;\nint c = 30;\nint result = 0;\n\nif (a <= b && c <= a)\n    result = 10;\nelse if (a <= b && b >= c)\n    result = 20;\nelse\n    result = 30;\n\nApakah nilai dari result setelah kode dijalankan?",
        "pilihan_en": "A. 0\nB. 10\nC. 20\nD. 30",
        "jawaban": "D. 30",
        "penjelasan": "Mari kita periksa kondisinya:\n- Kondisi pertama (a <= b && c <= a): 10 <= 20 (Benar) dan 30 <= 10 (Salah). Karena menggunakan logika AND (&&), keseluruhan kondisi bernilai Salah.\n- Kondisi kedua (a <= b && b >= c): 10 <= 20 (Benar) dan 20 >= 30 (Salah). Keseluruhan kondisi bernilai Salah.\n- Karena kedua kondisi 'if' dan 'else if' salah, maka program akan masuk ke blok 'else', sehingga nilai result di-set menjadi 30.",
        "images": [
            "../Sample Soft Dev/6.jpg"
        ],
        "ui_info": {
            "type": "multiple-choice",
            "is_multi": false,
            "options": [
                "A. 0",
                "B. 10",
                "C. 20",
                "D. 30"
            ]
        }
    },
    {
        "no": 7,
        "soal_en": "You are building an application to store exam results.\nYou need to record whether each answer is correct or incorrect. You also need to minimize the amount of memory required to store the data.\nWhich data type should you use?",
        "soal_id": "Anda sedang membangun aplikasi untuk menyimpan hasil ujian.\nAnda perlu merekam apakah setiap jawaban benar atau salah. Anda juga perlu meminimalkan jumlah memori yang dibutuhkan untuk menyimpan data tersebut.\nTipe data manakah yang harus Anda gunakan?",
        "pilihan_en": "A. boolean\nB. string\nC. integer\nD. double",
        "jawaban": "A. boolean",
        "penjelasan": "Tipe data 'boolean' hanya dapat memiliki dua nilai: True atau False (Benar atau Salah). Ini sangat cocok untuk merekam kondisi biner (benar/salah) dan memakan ukuran memori paling kecil dibandingkan tipe data string, integer, maupun double.",
        "images": [
            "../Sample Soft Dev/7.jpg"
        ],
        "ui_info": {
            "type": "multiple-choice",
            "is_multi": false,
            "options": [
                "A. boolean",
                "B. string",
                "C. integer",
                "D. double"
            ]
        }
    },
    {
        "no": 8,
        "soal_en": "Which two types of information should you include in an effective unit test case? (Choose 2.)",
        "soal_id": "Dua jenis informasi manakah yang harus Anda sertakan dalam test case unit yang efektif? (Pilih 2.)",
        "pilihan_en": "A. A test case with no assertions\nB. Any pre-conditions necessary to test the case\nC. Integration with other test cases\nD. All use cases combined into a single test\nE. The expected result from testing the case",
        "jawaban": "B dan E",
        "penjelasan": "Test case unit yang efektif harus mendefinisikan keadaan awal atau prasyarat (pre-conditions) agar tes dapat berjalan dengan benar. Selain itu, tes harus mendefinisikan hasil yang diharapkan (expected result) agar program bisa mengevaluasi apakah hasil aktualnya sesuai dengan ekspektasi atau tidak.",
        "images": [
            "../Sample Soft Dev/8.jpg"
        ],
        "ui_info": {
            "type": "multiple-choice",
            "is_multi": true,
            "options": [
                "A. A test case with no assertions",
                "B. Any pre-conditions necessary to test the case",
                "C. Integration with other test cases",
                "D. All use cases combined into a single test",
                "E. The expected result from testing the case"
            ]
        }
    },
    {
        "no": 9,
        "soal_en": "Which term describes converting a value type to a reference type in an object?",
        "soal_id": "Istilah manakah yang mendeskripsikan pengubahan tipe nilai (value type) menjadi tipe referensi (reference type) dalam sebuah objek?",
        "pilihan_en": "A. Boxing\nB. Unboxing\nC. Interfacing\nD. Mapping",
        "jawaban": "A. Boxing",
        "penjelasan": "Boxing adalah proses mengubah struktur tipe nilai (value type) ke tipe referensi objek (object reference type) secara implisit. Sebaliknya, Unboxing adalah proses mengekstrak kembali nilai (value type) dari sebuah objek tipe referensi.",
        "images": [
            "../Sample Soft Dev/9.jpg"
        ],
        "ui_info": {
            "type": "multiple-choice",
            "is_multi": false,
            "options": [
                "A. Boxing",
                "B. Unboxing",
                "C. Interfacing",
                "D. Mapping"
            ]
        }
    },
    {
        "no": 10,
        "soal_en": "Which two statements describe advantages of normalizing a database? (Choose 2.)",
        "soal_id": "Dua pernyataan manakah yang mendeskripsikan keuntungan dari menormalisasi sebuah database? (Pilih 2.)",
        "pilihan_en": "A. Normalization decreases disk space usage.\nB. Normalization reduces schema limitations.\nC. Normalization minimizes impact of data corruption.\nD. Normalization prevents data inconsistencies.",
        "jawaban": "A dan D",
        "penjelasan": "Normalisasi (Normalization) merancang struktur database secara sistematis untuk mengurangi redundansi data, yang berdampak pada penurunan penggunaan ruang penyimpanan (disk space). Selain itu, dengan menghilangkan redudansi dan anomali (insertion, update, deletion anomalies), normalisasi mencegah ketidakkonsistenan data (data inconsistencies).",
        "images": [
            "../Sample Soft Dev/10.jpg"
        ],
        "ui_info": {
            "type": "multiple-choice",
            "is_multi": true,
            "options": [
                "A. Normalization decreases disk space usage.",
                "B. Normalization reduces schema limitations.",
                "C. Normalization minimizes impact of data corruption.",
                "D. Normalization prevents data inconsistencies."
            ]
        }
    },
    {
        "no": 11,
        "soal_en": "What are three advantages of connection pooling? (Choose 3.)",
        "soal_id": "Apa tiga keuntungan dari connection pooling (penggabungan koneksi)? (Pilih 3.)",
        "pilihan_en": "A. Improved scalability\nB. Improved performance\nC. Improved security\nD. Reduced time to create a connection\nE. Requires no configuration",
        "jawaban": "A, B, D",
        "penjelasan": "Connection pooling menyimpan sekumpulan koneksi database yang sudah terbuka agar dapat digunakan ulang. Ini mengurangi waktu pembuatan koneksi (Reduced time), meningkatkan performa (Improved performance), dan memungkinkan aplikasi menangani lebih banyak pengguna secara bersamaan (Improved scalability).",
        "images": [
            "../Sample Soft Dev/11.jpg"
        ],
        "ui_info": {
            "type": "multiple-choice",
            "is_multi": true,
            "options": [
                "A. Improved scalability",
                "B. Improved performance",
                "C. Improved security",
                "D. Reduced time to create a connection",
                "E. Requires no configuration"
            ]
        }
    },
    {
        "no": 12,
        "soal_en": "Move each version control system command from the list on the left to the correct description on the right.\nCommands: branch, commit, merge, rollback",
        "soal_id": "Pindahkan setiap perintah sistem kontrol versi dari daftar di sebelah kiri ke deskripsi yang tepat di sebelah kanan.\nPerintah: branch, commit, merge, rollback",
        "pilihan_en": "Descriptions:\n- Manages a line of development\n- Updates all or part of the working project\n- Points your local project back to a previous state\n- Brings the content of another project into the current project",
        "jawaban": "1. branch: Manages a line of development\n2. commit: Updates all or part of the working project\n3. rollback: Points your local project back to a previous state\n4. merge: Brings the content of another project into the current project",
        "penjelasan": "'branch' membuat jalur pengembangan baru. 'commit' menyimpan/memperbarui perubahan pada repositori. 'rollback' mengembalikan status proyek ke titik sebelumnya. 'merge' menggabungkan perubahan dari branch/proyek lain ke proyek saat ini.",
        "images": [
            "../Sample Soft Dev/12.jpg"
        ],
        "ui_info": {
            "type": "matching",
            "count": 4,
            "options": [
                "branch",
                "commit",
                "rollback",
                "merge"
            ]
        }
    },
    {
        "no": 13,
        "soal_en": "For each statement about secure coding practices, select True or False.\n- Digital signatures encrypt messages using the sender's public key.\n- CSRF (cross-site request forgery) tokens are used to prevent attacks.\n- One way to prevent SQL injection attacks is to escape user input.",
        "soal_id": "Untuk setiap pernyataan tentang praktik pemrograman aman, pilih Benar (True) atau Salah (False).\n- Tanda tangan digital mengenkripsi pesan menggunakan public key (kunci publik) pengirim.\n- Token CSRF (cross-site request forgery) digunakan untuk mencegah serangan.\n- Salah satu cara mencegah serangan SQL injection adalah melakukan escape pada input pengguna.",
        "pilihan_en": "True / False choices.",
        "jawaban": "False, True, True",
        "penjelasan": "1 (False): Tanda tangan digital ditandatangani menggunakan private key (kunci privat) pengirim, bukan public key. 2 (True): CSRF token memang merupakan standar untuk mencegah serangan request palsu dari lintas situs. 3 (True): Melakukan escaping atau validasi input adalah salah satu cara untuk mencegah SQL Injection.",
        "images": [
            "../Sample Soft Dev/13.jpg"
        ],
        "ui_info": {
            "type": "true-false",
            "count": 3,
            "statements": [
                "Digital signatures encrypt messages using the sender's public key.",
                "CSRF (cross-site request forgery) tokens are used to prevent attacks.",
                "One way to prevent SQL injection attacks is to escape user input."
            ]
        }
    },
    {
        "no": 14,
        "soal_en": "You write the following code:\npublic delegate void Notification();\npublic Notification DelegateA;\nDelegateA = MethodA;\nDelegateA += MethodA;\n\npublic event Notification EventA;\nEventA = EventHandlerA;\nEventA += EventHandlerA;\n\nWhich statement prevents the program from running correctly?",
        "soal_id": "Anda menulis kode berikut:\npublic delegate void Notification();\npublic Notification DelegateA;\nDelegateA = MethodA;\nDelegateA += MethodA;\n\npublic event Notification EventA;\nEventA = EventHandlerA;\nEventA += EventHandlerA;\n\nPernyataan manakah yang mencegah program berjalan dengan benar?",
        "pilihan_en": "A. DelegateA = MethodA;\nB. DelegateA += MethodA;\nC. EventA = EventHandlerA;\nD. EventA += EventHandlerA;",
        "jawaban": "C. EventA = EventHandlerA;",
        "penjelasan": "Dalam C#, sebuah Event ('EventA') tidak dapat di-assign secara langsung menggunakan operator '=' dari luar kelas tempat ia dideklarasikan. Kita hanya bisa menambahkan (+=) atau mengurangi (-=) handler dari event tersebut.",
        "images": [
            "../Sample Soft Dev/14.jpg"
        ],
        "ui_info": {
            "type": "multiple-choice",
            "is_multi": false,
            "options": [
                "A. DelegateA = MethodA;",
                "B. DelegateA += MethodA;",
                "C. EventA = EventHandlerA;",
                "D. EventA += EventHandlerA;"
            ]
        }
    },
    {
        "no": 15,
        "soal_en": "You are translating software specifications into code components. The specifications require a class that cannot be instantiated, but can specify methods that must be implemented in concrete inherited classes.\nWhich type of class should you build?",
        "soal_id": "Anda sedang menerjemahkan spesifikasi perangkat lunak ke dalam komponen kode. Spesifikasi tersebut membutuhkan sebuah class yang tidak dapat di-instansiasi, tetapi dapat menetapkan metode yang harus diimplementasikan oleh class turunan yang konkrit.\nTipe class apakah yang harus Anda buat?",
        "pilihan_en": "A. public\nB. abstract\nC. protected\nD. sealed",
        "jawaban": "B. abstract",
        "penjelasan": "Class 'abstract' (abstrak) tidak dapat di-instansiasi langsung (tidak bisa di-new). Class ini digunakan sebagai blueprint yang menyediakan kerangka (termasuk metode abstrak) yang wajib diimplementasikan oleh class-class turunannya.",
        "images": [
            "../Sample Soft Dev/15.jpg"
        ],
        "ui_info": {
            "type": "multiple-choice",
            "is_multi": false,
            "options": [
                "A. public",
                "B. abstract",
                "C. protected",
                "D. sealed"
            ]
        }
    },
    {
        "no": 16,
        "soal_en": "You create an application that contains a function named Red. Red calls a function named Blue.\nHow does the compiler return to the correct location in the code path after Blue finishes executing?",
        "soal_id": "Anda membuat aplikasi yang berisi sebuah fungsi bernama Red. Fungsi Red memanggil fungsi bernama Blue.\nBagaimana compiler dapat kembali ke lokasi yang tepat pada alur kode setelah fungsi Blue selesai dieksekusi?",
        "pilihan_en": "A. Function calls are stored on the stack. After a function completes, all its data is popped off the stack, leaving the last instruction at the top.\nB. Function calls are stored in memory on the heap. After a function completes, all its data is destroyed except for the last instruction.\nC. Function calls are stored in memory on the heap. The memory allocation unit keeps track of the instruction location.\nD. Function calls are stored on the stack. The memory allocation unit keeps track of the instruction location.",
        "jawaban": "A. Function calls are stored on the stack. After a function completes, all its data is popped off the stack, leaving the last instruction at the top.",
        "penjelasan": "Setiap pemanggilan fungsi beserta variabel lokalnya disimpan di dalam Call Stack. Ketika fungsi (Blue) selesai, instruksi atau datanya di-'pop' (dikeluarkan) dari stack, dan eksekusi dilanjutkan dari posisi fungsi pemanggilnya (Red) yang kini berada di posisi atas stack.",
        "images": [
            "../Sample Soft Dev/16.jpg"
        ],
        "ui_info": {
            "type": "multiple-choice",
            "is_multi": false,
            "options": [
                "A. Function calls are stored on the stack. After a function completes, all its data is popped off the stack, leaving the last instruction at the top.",
                "B. Function calls are stored in memory on the heap. After a function completes, all its data is destroyed except for the last instruction.",
                "C. Function calls are stored in memory on the heap. The memory allocation unit keeps track of the instruction location.",
                "D. Function calls are stored on the stack. The memory allocation unit keeps track of the instruction location."
            ]
        }
    },
    {
        "no": 17,
        "soal_en": "Which two statements correctly describe JSON objects? (Choose 2.)",
        "soal_id": "Dua pernyataan manakah yang dengan tepat mendeskripsikan objek JSON? (Pilih 2.)",
        "pilihan_en": "A. JSON objects can utilize namespaces.\nB. JSON objects can be built with name/value pairs.\nC. JSON objects are extensible.\nD. JSON objects can be built with an ordered list of values.",
        "jawaban": "B dan C",
        "penjelasan": "Objek JSON dibangun dengan menggunakan pasangan kunci/nilai (name/value pairs) dan bersifat extensible (dapat diperluas atau ditambah elemen baru kapan saja). JSON tidak mengenal konsep 'namespace' bawaan, dan urutan tidak dijamin dalam JSON Object (sedangkan ordered list adalah JSON Array).",
        "images": [
            "../Sample Soft Dev/17.jpg"
        ],
        "ui_info": {
            "type": "multiple-choice",
            "is_multi": true,
            "options": [
                "A. JSON objects can utilize namespaces.",
                "B. JSON objects can be built with name/value pairs.",
                "C. JSON objects are extensible.",
                "D. JSON objects can be built with an ordered list of values."
            ]
        }
    },
    {
        "no": 18,
        "soal_en": "You are extending an application that stores and displays the results of various types of foot races. The application contains the following definitions: ...\nMatch declarations to the implementation of FootRace.",
        "soal_id": "Anda memperluas aplikasi yang menyimpan dan menampilkan hasil perlombaan lari. Lengkapi kode FootRace dengan memindahkan deklarasi yang tepat ke lokasinya.",
        "pilihan_en": "Declarations:\n- public override void Display()\n- public void DisplayRaw()\n- void IDisplayResult.Display()\n- private void Display()",
        "jawaban": "1. public override void Display()\n2. public void DisplayRaw()\n3. void IDisplayResult.Display()",
        "penjelasan": "Berdasarkan output yang diminta: '99 seconds' muncul dari pemanggilan r1.Display() sehingga itu hasil override dari base (deklarasi 1). '99' berasal dari pemanggilan r1.DisplayRaw() yang memanggil base.Display() (deklarasi 2). '1.65 minutes' dipanggil via interface r2 (IDisplayResult.Display), ini adalah implementasi eksplisit interface (deklarasi 3).",
        "images": [
            "../Sample Soft Dev/18-1.jpg",
            "../Sample Soft Dev/18-2.jpg"
        ],
        "ui_info": {
            "type": "dropdown",
            "count": 3,
            "dropdowns": [
                {
                    "id": "Dropdown 1",
                    "label": "Declaration 1 (Console.WriteLine(Seconds + \" second\"))",
                    "options": [
                        "public override void Display()",
                        "public void DisplayRaw()",
                        "void IDisplayResult.Display()",
                        "private void Display()"
                    ]
                },
                {
                    "id": "Dropdown 2",
                    "label": "Declaration 2 (base.Display())",
                    "options": [
                        "public override void Display()",
                        "public void DisplayRaw()",
                        "void IDisplayResult.Display()",
                        "private void Display()"
                    ]
                },
                {
                    "id": "Dropdown 3",
                    "label": "Declaration 3 (Console.WriteLine(Seconds / 60d + \" minutes\"))",
                    "options": [
                        "public override void Display()",
                        "public void DisplayRaw()",
                        "void IDisplayResult.Display()",
                        "private void Display()"
                    ]
                }
            ]
        }
    },
    {
        "no": 19,
        "soal_en": "You need to create the following graphic (green fading to black with rounded corners) by using CSS.\nFor the background-image style, you should use the value:\nFor the border-radius style, you should use the value:",
        "soal_id": "Anda perlu membuat grafik (gradasi warna hijau pudar ke hitam dengan sudut membulat) menggunakan CSS.\nUntuk style background-image, Anda harus menggunakan nilai:\nUntuk style border-radius, Anda harus menggunakan nilai:",
        "pilihan_en": "",
        "jawaban": "1. linear-gradient(to bottom, green, black);\n2. 10px;",
        "penjelasan": "Grafik memiliki warna hijau di atas dan gradasi memudar menjadi hitam di bawah, sehingga 'to bottom, green, black' adalah perintah gradient yang benar. Sudut objek tersebut melengkung rata di setiap sudut, sehingga nilainya cukup menggunakan '10px' saja.",
        "images": [
            "../Sample Soft Dev/19-1.jpg",
            "../Sample Soft Dev/19-2.jpg"
        ],
        "ui_info": {
            "type": "dropdown",
            "count": 2,
            "dropdowns": [
                {
                    "id": "Dropdown 1",
                    "label": "background-image",
                    "options": [
                        "linear-gradient(to top, green, black);",
                        "linear-gradient(to bottom, green, black);",
                        "radial-gradient(green, black);",
                        "repeating-linear-gradient(green, black);"
                    ]
                },
                {
                    "id": "Dropdown 2",
                    "label": "border-radius",
                    "options": [
                        "10px;",
                        "10px, 10px, 10px;",
                        "inherit;",
                        "initial;"
                    ]
                }
            ]
        }
    },
    {
        "no": 20,
        "soal_en": "You need to group all the style settings into a separate file that you can apply to all the pages of a web application.\nWhat should you do?",
        "soal_id": "Anda perlu mengelompokkan semua pengaturan style ke dalam sebuah file terpisah yang dapat Anda terapkan pada semua halaman web application.\nApa yang harus Anda lakukan?",
        "pilihan_en": "A. Use an Extensible Markup Language (XML) schema.\nB. Use an external style sheet.\nC. Use an internal style sheet.\nD. Use inline styles.",
        "jawaban": "B. Use an external style sheet.",
        "penjelasan": "Untuk menggunakan style yang seragam (bisa dipakai ulang) di seluruh halaman pada satu web aplikasi secara efisien dan memisahkan struktur (HTML) dan gaya (CSS), praktik terbaiknya adalah dengan membuat dan menggunakan Eksternal Style Sheet (.css file).",
        "images": [
            "../Sample Soft Dev/20.jpg"
        ],
        "ui_info": {
            "type": "multiple-choice",
            "is_multi": false,
            "options": [
                "A. Use an Extensible Markup Language (XML) schema.",
                "B. Use an external style sheet.",
                "C. Use an internal style sheet.",
                "D. Use inline styles."
            ]
        }
    },
    {
        "no": 21,
        "soal_en": "What is the purpose of the catch section in an exception handler?",
        "soal_id": "Apakah tujuan dari bagian catch dalam sebuah exception handler (penanganan pengecualian)?",
        "pilihan_en": "A. To conclude the execution of the application\nB. To execute code regardless of whether an exception is thrown\nC. To execute code only when an exception is thrown\nD. To break out of the error handler",
        "jawaban": "C. To execute code only when an exception is thrown",
        "penjelasan": "Blok catch digunakan untuk menangkap dan menangani exception (error) yang terjadi di dalam blok try. Kode di dalamnya hanya akan dieksekusi jika terjadi exception.",
        "images": [
            "../Sample Soft Dev/21.jpg"
        ],
        "ui_info": {
            "type": "multiple-choice",
            "is_multi": false,
            "options": [
                "A. To conclude the execution of the application",
                "B. To execute code regardless of whether an exception is thrown",
                "C. To execute code only when an exception is thrown",
                "D. To break out of the error handler"
            ]
        }
    },
    {
        "no": 22,
        "soal_en": "For each statement about unit testing, select True or False.\n- Unit testing tests the whole application with integrations and dependencies.\n- The unit test method calls the method it is testing, passes the data, and checks return values for accuracy.\n- The primary goal of unit testing is to take the smallest piece of testable software in the application, isolate it from the remainder of the code, and determine whether it behaves exactly as expected.",
        "soal_id": "Untuk setiap pernyataan mengenai unit testing, pilih True atau False.\n- Unit testing menguji keseluruhan aplikasi beserta integrasi dan dependensinya.\n- Metode unit test memanggil metode yang diujinya, mengirimkan data, dan mengecek keakuratan nilai kembaliannya.\n- Tujuan utama dari unit testing adalah mengambil bagian perangkat lunak terkecil yang dapat diuji dari aplikasi, mengisolasinya dari sisa kode, dan menentukan apakah bagian tersebut berperilaku persis seperti yang diharapkan.",
        "pilihan_en": "True / False choices.",
        "jawaban": "False, True, True",
        "penjelasan": "1 (False): Unit testing menguji komponen secara terisolasi, bukan integrasi seluruh aplikasi. 2 (True): Unit test memberikan input dan memverifikasi output/return value. 3 (True): Ini adalah definisi dan tujuan utama dari Unit Testing.",
        "images": [
            "../Sample Soft Dev/22.jpg"
        ],
        "ui_info": {
            "type": "true-false",
            "count": 3,
            "statements": [
                "Unit testing tests the whole application with integrations and dependencies.",
                "The unit test method calls the method it is testing, passes the data, and checks return values for accuracy.",
                "The primary goal of unit testing is to take the smallest piece of testable software in the application, isolate it from the remainder of the code, and determine whether it behaves exactly as expected."
            ]
        }
    },
    {
        "no": 23,
        "soal_en": "You are creating a web application. The client computers that will access the application run a variety of web browsers.\nWhich term describes the process of making the application available for client computers to access?",
        "soal_id": "Anda sedang membuat aplikasi web. Komputer klien yang akan mengakses aplikasi tersebut menjalankan berbagai macam web browser.\nIstilah manakah yang mendeskripsikan proses untuk membuat aplikasi tersedia agar dapat diakses oleh komputer klien?",
        "pilihan_en": "A. Virtualization\nB. Packaging\nC. Casting\nD. Hosting",
        "jawaban": "D. Hosting",
        "penjelasan": "Hosting adalah proses menempatkan file web aplikasi dan databasenya di sebuah server yang terhubung ke internet sehingga dapat diakses oleh klien secara online.",
        "images": [
            "../Sample Soft Dev/23.jpg"
        ],
        "ui_info": {
            "type": "multiple-choice",
            "is_multi": false,
            "options": [
                "A. Virtualization",
                "B. Packaging",
                "C. Casting",
                "D. Hosting"
            ]
        }
    },
    {
        "no": 24,
        "soal_en": "Class C and class D inherit from class B. Class B inherits from class A. The classes have the methods shown in the following table.\nA: m1\nB: m2\nC: m3\nD: m4\nAll methods have a protected scope. Which methods can class C access?",
        "soal_id": "Class C dan class D mewarisi dari class B. Class B mewarisi dari class A. Class-class tersebut memiliki metode seperti tabel berikut.\nA: m1\nB: m2\nC: m3\nD: m4\nSemua metode memiliki scope protected. Metode manakah yang dapat diakses oleh class C?",
        "pilihan_en": "A. Only m1 and m3\nB. Only m2 and m3\nC. Only m3 and m4\nD. m1, m2, and m3\nE. m1, m3, and m4\nF. m2, m3, and m4",
        "jawaban": "D. m1, m2, and m3",
        "penjelasan": "Class C mewarisi B, dan B mewarisi A. Oleh karena itu, C memiliki akses ke metodenya sendiri (m3) dan metode protected dari semua class induknya (m1 dari A, m2 dari B). C tidak dapat mengakses m4 karena m4 berada di class D (sibling/saudara), bukan parent.",
        "images": [
            "../Sample Soft Dev/24-1.jpg",
            "../Sample Soft Dev/24-2.jpg"
        ],
        "ui_info": {
            "type": "multiple-choice",
            "is_multi": true,
            "options": [
                "A. Only m1 and m3",
                "B. Only m2 and m3",
                "C. Only m3 and m4",
                "D. m1, m2, and m3",
                "E. m1, m3, and m4",
                "F. m2, m3, and m4"
            ]
        }
    },
    {
        "no": 25,
        "soal_en": "Complete the sentences by selecting the correct option from each drop-down list.\n- Every web server has [ an IP ] address and domain name that identifies it on the internet.\n- The web server accepts client requests via [ an HTTP ] protocol, and responds by transferring data back to the client in the form of a web page.\n- A client with access can revise or remove the content hosted on the web server via [ an FTP ] protocol.",
        "soal_id": "Lengkapi kalimat berikut dengan memilih opsi yang tepat dari setiap daftar drop-down.\n- Setiap web server memiliki alamat [ IP ] dan nama domain yang mengidentifikasinya di internet.\n- Web server menerima request dari klien melalui protokol [ HTTP ], dan merespons dengan mentransfer data kembali ke klien dalam bentuk halaman web.\n- Klien yang memiliki akses dapat merevisi atau menghapus konten yang di-host di web server melalui protokol [ FTP ].",
        "pilihan_en": "",
        "jawaban": "1. an IP\n2. an HTTP\n3. an FTP",
        "penjelasan": "Setiap server di internet diidentifikasi secara unik oleh alamat IP. Komunikasi standar untuk melayani halaman web adalah melalui HTTP (Hypertext Transfer Protocol). Untuk memodifikasi (mengunggah/menghapus) file di server secara langsung, protokol yang umum digunakan adalah FTP (File Transfer Protocol).",
        "images": [
            "../Sample Soft Dev/25-1.jpg",
            "../Sample Soft Dev/25-2.jpg",
            "../Sample Soft Dev/25-3.jpg"
        ],
        "ui_info": {
            "type": "dropdown",
            "count": 3,
            "dropdowns": [
                {
                    "id": "Dropdown 1",
                    "label": "Address type",
                    "options": [
                        "an FTP",
                        "an HTML",
                        "an HTTP",
                        "an IP",
                        "a TCP"
                    ]
                },
                {
                    "id": "Dropdown 2",
                    "label": "Protocol (accepts requests)",
                    "options": [
                        "an FTP",
                        "an HTML",
                        "an HTTP",
                        "an IP",
                        "a TCP"
                    ]
                },
                {
                    "id": "Dropdown 3",
                    "label": "Protocol (revise/remove content)",
                    "options": [
                        "an FTP",
                        "an HTML",
                        "an HTTP",
                        "an IP",
                        "a TCP"
                    ]
                }
            ]
        }
    },
    {
        "no": 26,
        "soal_en": "You are reviewing a database design. A portion of this design is as shown:\nCustomer ---<| Order\nWhich term describes the relationship between Customer and Order?",
        "soal_id": "Anda sedang meninjau desain database. Sebagian dari desain tersebut ditunjukkan seperti gambar (Garis dari Customer ke Order dengan simbol crow's foot di sisi Order).\nIstilah manakah yang mendeskripsikan hubungan antara Customer dan Order?",
        "pilihan_en": "A. Many-to-many\nB. One-dimensional\nC. One-to-many\nD. One-to-one\nE. Multi-dimensional",
        "jawaban": "C. One-to-many",
        "penjelasan": "Simbol crow's foot (kaki gagak) pada entitas Order menunjukkan bahwa satu entitas Customer dapat memiliki banyak entitas Order. Oleh karena itu, hubungan ini adalah One-to-many (Satu ke banyak).",
        "images": [
            "../Sample Soft Dev/26.jpg"
        ],
        "ui_info": {
            "type": "multiple-choice",
            "is_multi": false,
            "options": [
                "A. Many-to-many",
                "B. One-dimensional",
                "C. One-to-many",
                "D. One-to-one",
                "E. Multi-dimensional"
            ]
        }
    },
    {
        "no": 27,
        "soal_en": "A C# project includes a class named Landscape and a class named Tree. The Tree class has an internal property named color and a protected property named NumberOfLeaves.\nFor each statement, select True or False.\n- Methods in the Landscape class can access the color property.\n- Methods in the Landscape class can access the NumberOfLeaves property.\n- Methods in the Tree class can access all private properties in Landscape.",
        "soal_id": "Sebuah proyek C# mencakup class bernama Landscape dan class bernama Tree. Class Tree memiliki properti internal bernama 'color' dan properti protected bernama 'NumberOfLeaves'.\nUntuk setiap pernyataan, pilih True (Benar) atau False (Salah).\n- Metode di class Landscape dapat mengakses properti color.\n- Metode di class Landscape dapat mengakses properti NumberOfLeaves.\n- Metode di class Tree dapat mengakses semua properti private di Landscape.",
        "pilihan_en": "True / False choices.",
        "jawaban": "True, False, False",
        "penjelasan": "1 (True): Properti 'internal' dapat diakses oleh class manapun di dalam assembly/proyek yang sama. 2 (False): Properti 'protected' hanya bisa diakses oleh class itu sendiri atau class turunannya. (Landscape bukan turunan Tree). 3 (False): Properti 'private' hanya bisa diakses dari dalam class tempat ia dideklarasikan.",
        "images": [
            "../Sample Soft Dev/27.jpg"
        ],
        "ui_info": {
            "type": "true-false",
            "count": 3,
            "statements": [
                "Methods in the Landscape class can access the color property.",
                "Methods in the Landscape class can access the NumberOfLeaves property.",
                "Methods in the Tree class can access all private properties in Landscape."
            ]
        }
    },
    {
        "no": 28,
        "soal_en": "A table named Items has the following fields: ID, Description, Completed.\nYou need to delete only the rows where the Completed field is set to True.\nWhich statement should you use?",
        "soal_id": "Sebuah tabel bernama Items memiliki field berikut: ID, Description, Completed.\nAnda perlu menghapus HANYA baris-baris di mana field Completed bernilai True.\nPernyataan manakah yang harus Anda gunakan?",
        "pilihan_en": "A. DELETE FROM Items WHERE (Items.Completed = 0)\nB. DELETE FROM * WHERE (Items.Completed = 1)\nC. DELETE FROM Items WHERE (Items.Completed = 1)\nD. DELETE FROM Items",
        "jawaban": "C. DELETE FROM Items WHERE (Items.Completed = 1)",
        "penjelasan": "Dalam SQL, nilai Boolean 'True' sering direpresentasikan sebagai 1. Sintaks yang benar untuk menghapus data dengan kondisi adalah 'DELETE FROM nama_tabel WHERE kondisi', sehingga opsi C adalah yang paling tepat.",
        "images": [
            "../Sample Soft Dev/28.jpg"
        ],
        "ui_info": {
            "type": "multiple-choice",
            "is_multi": false,
            "options": [
                "A. DELETE FROM Items WHERE (Items.Completed = 0)",
                "B. DELETE FROM * WHERE (Items.Completed = 1)",
                "C. DELETE FROM Items WHERE (Items.Completed = 1)",
                "D. DELETE FROM Items"
            ]
        }
    },
    {
        "no": 29,
        "soal_en": "Which LINQ operator flattens a sequence?",
        "soal_id": "Operator LINQ manakah yang meratakan (flattens) sebuah sequence (urutan)?",
        "pilihan_en": "A. GroupBy\nB. ToArray\nC. Cast\nD. SelectMany",
        "jawaban": "D. SelectMany",
        "penjelasan": "Operator SelectMany pada LINQ digunakan untuk memproyeksikan setiap elemen dari sebuah sequence menjadi sequence baru, dan kemudian meratakan (flatten) sequence-sequence yang dihasilkan tersebut menjadi satu sequence tunggal.",
        "images": [
            "../Sample Soft Dev/29.jpg"
        ],
        "ui_info": {
            "type": "multiple-choice",
            "is_multi": false,
            "options": [
                "A. GroupBy",
                "B. ToArray",
                "C. Cast",
                "D. SelectMany"
            ]
        }
    },
    {
        "no": 30,
        "soal_en": "Identify the correct components of the MVC architectural pattern in the diagram.\nTop-right box receives input from User and interacts with Bottom-right box. Top-right box sends output to Bottom-left box, which presents to User.",
        "soal_id": "Identifikasi komponen yang benar dari pola arsitektur MVC pada diagram.\nKotak Kanan-Atas menerima input dari User dan berinteraksi dengan kotak Kanan-Bawah. Kotak Kanan-Atas juga mengirim ke Kiri-Bawah yang ditampilkan ke User.",
        "pilihan_en": "",
        "jawaban": "Top-Right: Controller\nBottom-Right: Model\nBottom-Left: View",
        "penjelasan": "Dalam alur aplikasi web MVC tradisional: Pengguna (User) mengirim request ke Controller (Top-Right). Controller mengolah logika dan memperbarui Model (Bottom-Right). Setelah itu, Controller memilih View (Bottom-Left) dan meneruskan data Model kepadanya. View kemudian di-render menjadi antarmuka untuk Pengguna.",
        "images": [
            "../Sample Soft Dev/30-1.jpg",
            "../Sample Soft Dev/30-2.jpg",
            "../Sample Soft Dev/30-3.jpg"
        ],
        "ui_info": {
            "type": "dropdown",
            "count": 3,
            "dropdowns": [
                {
                    "id": "Dropdown 1",
                    "label": "Top-Right (receives input from User)",
                    "options": [
                        "Controller",
                        "Model",
                        "View"
                    ]
                },
                {
                    "id": "Dropdown 2",
                    "label": "Bottom-Right (interacts with Top-Right)",
                    "options": [
                        "Controller",
                        "Model",
                        "View"
                    ]
                },
                {
                    "id": "Dropdown 3",
                    "label": "Bottom-Left (presents to User)",
                    "options": [
                        "Controller",
                        "Model",
                        "View"
                    ]
                }
            ]
        }
    },
    {
        "no": 31,
        "soal_en": "You run the following code:\nint a = 10; int b = 20; int c = 30; int result = 0;\nif (a <= b || c > a)\n    result = 10;\nelse if (a <= b || c <= a)\n    result = 20;\nelse\n    result = 30;\nWhat is the value of result after the code runs?",
        "soal_id": "Anda menjalankan kode berikut:\nint a = 10; int b = 20; int c = 30; int result = 0;\nif (a <= b || c > a)\n    result = 10;\nelse if (a <= b || c <= a)\n    result = 20;\nelse\n    result = 30;\nApakah nilai dari result setelah kode dijalankan?",
        "pilihan_en": "A. 0\nB. 10\nC. 20\nD. 30",
        "jawaban": "B. 10",
        "penjelasan": "Pada statement kondisi pertama: (a <= b || c > a). Karena nilai a (10) kurang dari b (20), maka 'a <= b' bernilai True. Karena menggunakan operator OR (||), jika salah satu kondisi True, keseluruhan bernilai True. Oleh karena itu, blok if pertama langsung dieksekusi dan result menjadi 10.",
        "images": [
            "../Sample Soft Dev/31.jpg"
        ],
        "ui_info": {
            "type": "multiple-choice",
            "is_multi": false,
            "options": [
                "A. 0",
                "B. 10",
                "C. 20",
                "D. 30"
            ]
        }
    },
    {
        "no": 32,
        "soal_en": "Which type of function can a derived class override?",
        "soal_id": "Tipe fungsi apakah yang dapat di-override (ditimpa) oleh sebuah class turunan?",
        "pilihan_en": "A. A static function\nB. A non-virtual public member function\nC. A private virtual function\nD. A protected virtual member function",
        "jawaban": "D. A protected virtual member function",
        "penjelasan": "Untuk dapat di-override, sebuah metode harus ditandai sebagai 'virtual' (atau abstract/override) di class induknya, DAN harus dapat diakses oleh class turunannya. Fungsi 'private virtual' tidak bisa diakses dari class turunan, sehingga tidak bisa di-override. Yang bisa adalah 'protected virtual' atau 'public virtual'.",
        "images": [
            "../Sample Soft Dev/32.jpg"
        ],
        "ui_info": {
            "type": "multiple-choice",
            "is_multi": false,
            "options": [
                "A. A static function",
                "B. A non-virtual public member function",
                "C. A private virtual function",
                "D. A protected virtual member function"
            ]
        }
    },
    {
        "no": 33,
        "soal_en": "Which term describes the process of converting an object to a more general type?",
        "soal_id": "Istilah manakah yang mendeskripsikan proses mengonversi sebuah objek menjadi tipe yang lebih umum (general)?",
        "pilihan_en": "A. Upcasting\nB. Downcasting\nC. Interfacing\nD. Flexing",
        "jawaban": "A. Upcasting",
        "penjelasan": "Upcasting adalah proses mengubah referensi dari class turunan (spesifik) menjadi class induk (lebih general). Ini selalu aman (implicit). Downcasting adalah sebaliknya, dari class induk ke class turunan.",
        "images": [
            "../Sample Soft Dev/33.jpg"
        ],
        "ui_info": {
            "type": "multiple-choice",
            "is_multi": false,
            "options": [
                "A. Upcasting",
                "B. Downcasting",
                "C. Interfacing",
                "D. Flexing"
            ]
        }
    },
    {
        "no": 34,
        "soal_en": "A web page displays a clock element.\nYou need to complete the JavaScript code to update the clock element every second.\nCode:\n[Dropdown 1] (function updateClock() {\n  let d = new Date();\n  document.getElementById(\"clock\").innerHTML = ...\n} [Dropdown 2] [Dropdown 3]);",
        "soal_id": "Sebuah halaman web menampilkan elemen jam (clock).\nAnda perlu melengkapi kode JavaScript untuk memperbarui elemen jam tersebut setiap detik.\nKode:\n[Dropdown 1] (function updateClock() {\n  let d = new Date();\n  document.getElementById(\"clock\").innerHTML = ...\n} [Dropdown 2] [Dropdown 3]);",
        "pilihan_en": "Dropdown 1 options: fetch(, setInterval(, setTimeout(\nDropdown 2 options: updateClock, updateClock()\nDropdown 3 options: 1, 60, 100, 1000",
        "jawaban": "1. setInterval(\n2. updateClock\n3. 1000",
        "penjelasan": "Fungsi setInterval() digunakan untuk memanggil fungsi secara berulang pada interval waktu tertentu (dalam milidetik). Karena diminta untuk update setiap detik (1 detik = 1000 milidetik), maka kita gunakan setInterval(updateClock, 1000).",
        "images": [
            "../Sample Soft Dev/34-1.jpg",
            "../Sample Soft Dev/34-2.jpg",
            "../Sample Soft Dev/34-3.jpg"
        ],
        "ui_info": {
            "type": "dropdown",
            "count": 3,
            "dropdowns": [
                {
                    "id": "Dropdown 1",
                    "options": [
                        "fetch(",
                        "setInterval(",
                        "setTimeout("
                    ]
                },
                {
                    "id": "Dropdown 2",
                    "options": [
                        "updateClock",
                        "updateClock()"
                    ]
                },
                {
                    "id": "Dropdown 3",
                    "options": [
                        "1",
                        "60",
                        "100",
                        "1000"
                    ]
                }
            ]
        }
    },
    {
        "no": 35,
        "soal_en": "Which term describes a C# class that inherits functionality from an existing class?",
        "soal_id": "Istilah manakah yang mendeskripsikan sebuah class C# yang mewarisi fungsionalitas dari class yang sudah ada?",
        "pilihan_en": "A. Base class\nB. Inherited class\nC. Superclass\nD. Derived class",
        "jawaban": "D. Derived class",
        "penjelasan": "Class yang menerima/mewarisi fungsionalitas disebut 'Derived class' (class turunan). Class yang memberikan/diwariskan disebut 'Base class' (class dasar).",
        "images": [
            "../Sample Soft Dev/35.jpg"
        ],
        "ui_info": {
            "type": "multiple-choice",
            "is_multi": false,
            "options": [
                "A. Base class",
                "B. Inherited class",
                "C. Superclass",
                "D. Derived class"
            ]
        }
    },
    {
        "no": 36,
        "soal_en": "For each statement about linked lists, select True or False.\n- A linked list can be sorted.\n- A linked list has a maximum of 100 nodes.\n- You can add new nodes anywhere in a linked list.",
        "soal_id": "Untuk setiap pernyataan mengenai linked list, pilih True (Benar) atau False (Salah).\n- Linked list dapat diurutkan (di-sort).\n- Linked list memiliki maksimal 100 node.\n- Anda dapat menambahkan node baru di bagian mana saja pada linked list.",
        "pilihan_en": "True / False choices.",
        "jawaban": "True, False, True",
        "penjelasan": "1 (True): Linked list dapat diurutkan meskipun algoritmanya berbeda dengan array. 2 (False): Linked list memiliki ukuran yang dinamis sesuai ketersediaan memori, tidak dibatasi hanya 100 node. 3 (True): Dengan manipulasi pointer/referensi, node baru dapat disisipkan di awal, tengah, atau akhir.",
        "images": [
            "../Sample Soft Dev/36.jpg"
        ],
        "ui_info": {
            "type": "true-false",
            "count": 3,
            "statements": [
                "A linked list can be sorted.",
                "A linked list has a maximum of 100 nodes.",
                "You can add new nodes anywhere in a linked list."
            ]
        }
    },
    {
        "no": 37,
        "soal_en": "Configure the transaction to meet the following requirements:\n- If the customer has only one invoice, delete the invoice.\n- If the customer has more than one invoice, cancel the transaction.\nCode:\n[Dropdown 1]\nDELETE Invoices WHERE CustomerID=134;\nIF @@ROWCOUNT > 1\nBEGIN;\n  [Dropdown 2]\nEND;\nELSE\nBEGIN;\n  [Dropdown 3]\nEND;",
        "soal_id": "Konfigurasikan transaksi (transaction) untuk memenuhi persyaratan berikut:\n- Jika customer hanya memiliki satu invoice, hapus invoice tersebut.\n- Jika customer memiliki lebih dari satu invoice, batalkan transaksinya.\nKode:\n[Dropdown 1]\nDELETE Invoices WHERE CustomerID=134;\nIF @@ROWCOUNT > 1\nBEGIN;\n  [Dropdown 2]\nEND;\nELSE\nBEGIN;\n  [Dropdown 3]\nEND;",
        "pilihan_en": "Dropdown selections.",
        "jawaban": "1. BEGIN TRAN;\n2. ROLLBACK TRAN;\n3. COMMIT TRAN;",
        "penjelasan": "Transaksi dimulai dengan 'BEGIN TRAN'. Jika baris yang terhapus (@@ROWCOUNT) lebih dari 1, transaksi dibatalkan dengan 'ROLLBACK TRAN' untuk mengembalikan data seperti semula. Jika tidak, data valid untuk dihapus dan disimpan permanen dengan 'COMMIT TRAN'.",
        "images": [
            "../Sample Soft Dev/37-1.jpg",
            "../Sample Soft Dev/37-2.jpg",
            "../Sample Soft Dev/37-3.jpg",
            "../Sample Soft Dev/37-4.jpg"
        ],
        "ui_info": {
            "type": "dropdown",
            "count": 3,
            "dropdowns": [
                {
                    "id": "Dropdown 1",
                    "label": "Before DELETE statement",
                    "options": [
                        "TRY TRAN;",
                        "BEGIN TRAN;",
                        "TRAN;",
                        "BEGIN;"
                    ]
                },
                {
                    "id": "Dropdown 2",
                    "label": "IF @@ROWCOUNT > 1 (cancel)",
                    "options": [
                        "SAVE TRAN;",
                        "REVOKE TRAN;",
                        "ROLLBACK TRAN;",
                        "END TRAN;",
                        "COMMIT TRAN;"
                    ]
                },
                {
                    "id": "Dropdown 3",
                    "label": "ELSE (keep deletion)",
                    "options": [
                        "SAVE TRAN;",
                        "CATCH TRAN;",
                        "ROLLBACK TRAN;",
                        "GRANT TRAN;",
                        "COMMIT TRAN;"
                    ]
                }
            ]
        }
    },
    {
        "no": 38,
        "soal_en": "You have a class with a property.\nYou need to ensure that consumers of the class can write to the value of the property.\nWhich keyword should you use?",
        "soal_id": "Anda memiliki sebuah class dengan sebuah properti.\nAnda perlu memastikan bahwa pengguna class tersebut (consumers) dapat menulis (mengisi/mengubah) nilai dari properti tersebut.\nKeyword manakah yang harus Anda gunakan?",
        "pilihan_en": "A. value\nB. add\nC. set\nD. get",
        "jawaban": "C. set",
        "penjelasan": "Dalam C#, keyword 'set' di dalam properti digunakan untuk memberikan akses tulis (write) kepada pengguna class. Sedangkan 'get' digunakan untuk akses baca (read).",
        "images": [
            "../Sample Soft Dev/38.jpg"
        ],
        "ui_info": {
            "type": "multiple-choice",
            "is_multi": false,
            "options": [
                "A. value",
                "B. add",
                "C. set",
                "D. get"
            ]
        }
    },
    {
        "no": 39,
        "soal_en": "You work on an app development team. The app is in a Git source control system.\nComplete the statements by moving the appropriate terms:\n- You should first create a [ ? ] of the source code.\n- As you work and verify your changes locally, you need to perform a [ ? ] so that your changes can be saved in your local repository.\n- You should then perform a [ ? ] to save your changes in the remote repository.\n- To notify other developers of your changes, you should create a [ ? ].\n- After your features are complete, the other developers should perform a [ ? ].",
        "soal_id": "Anda bekerja di tim pengembang aplikasi yang menggunakan sistem kontrol sumber Git.\nLengkapi pernyataan dengan memindahkan istilah yang tepat:\n- Pertama, Anda harus membuat [ ? ] dari source code.\n- Saat Anda bekerja dan memverifikasi perubahan secara lokal, Anda perlu melakukan [ ? ] agar perubahan tersimpan di repositori lokal Anda.\n- Kemudian Anda melakukan [ ? ] untuk menyimpan perubahan ke repositori remote.\n- Untuk memberi tahu developer lain tentang perubahan Anda, Anda membuat [ ? ].\n- Setelah fitur selesai, developer lain harus melakukan [ ? ].",
        "pilihan_en": "Terms: merge, push, commit, pull request, branch, clone.",
        "jawaban": "1. branch\n2. commit\n3. push\n4. pull request\n5. merge",
        "penjelasan": "Alur kerja Git yang standar: membuat 'branch' baru untuk fitur, menyimpan perubahan secara lokal dengan 'commit', mengirimnya ke server dengan 'push', membuat 'pull request' agar tim me-review, lalu tim akan melakukan 'merge' untuk menggabungkannya ke branch utama.",
        "images": [
            "../Sample Soft Dev/39-1.jpg",
            "../Sample Soft Dev/39-2.jpg"
        ],
        "ui_info": {
            "type": "matching",
            "count": 5,
            "options": [
                "branch",
                "commit",
                "push",
                "pull request",
                "merge"
            ]
        }
    },
    {
        "no": 40,
        "soal_en": "Which statement correctly describes a C# method that is declared as virtual in the base class?",
        "soal_id": "Pernyataan manakah yang dengan benar mendeskripsikan sebuah metode C# yang dideklarasikan sebagai virtual di class dasar (base class)?",
        "pilihan_en": "A. The method is hidden from implementation by a derived class.\nB. The method can be overridden with its own implementation by a derived class.\nC. The method must be overridden in any non-abstract class that directly inherits from that class.\nD. The method cannot be overridden with its own implementation by a derived class.",
        "jawaban": "B. The method can be overridden with its own implementation by a derived class.",
        "penjelasan": "Keyword 'virtual' menandakan bahwa sebuah metode di class dasar diizinkan untuk (opsional) di-override (ditulis ulang/diganti) oleh class turunan menggunakan keyword 'override'.",
        "images": [
            "../Sample Soft Dev/40.jpg"
        ],
        "ui_info": {
            "type": "multiple-choice",
            "is_multi": false,
            "options": [
                "A. The method is hidden from implementation by a derived class.",
                "B. The method can be overridden with its own implementation by a derived class.",
                "C. The method must be overridden in any non-abstract class that directly inherits from that class.",
                "D. The method cannot be overridden with its own implementation by a derived class."
            ]
        }
    }
];
