const questions = [
    { 
        question: "Sebuah mobil melaju dengan kecepatan 60 km/jam. Berapa jarak yang ditempuh dalam 2,5 jam?", 
        options: ["120 km", "150 km", "180 km", "200 km"],
        answer: "150 km",
        explanation: "Jarak = Kecepatan × Waktu. Jadi, 60 × 2.5 = 150 km."
    },
    { 
        question: "Jika x^2 - 4x + 4 = 0, berapakah nilai x?", 
        options: ["0", "1", "2", "3"],
        answer: "2",
        explanation: "(x - 2)(x - 2) = 0, sehingga x = 2."
    },
    { 
        question: "Dalam sebuah kotak terdapat 3 bola merah, 4 bola biru, dan 5 bola hijau. Jika diambil satu bola secara acak, berapa peluang terambil bola biru?", 
        options: ["1/3", "2/3", "4/12", "4/10"],
        answer: "4/12",
        explanation: "Jumlah total bola = 3 + 4 + 5 = 12, peluang bola biru = 4/12."
    },
    { 
        question: "Terdapat 5 kursi dan 3 orang ingin duduk. Berapa cara mereka bisa duduk?", 
        options: ["30", "60", "120", "10"],
        answer: "60",
        explanation: "Permutasi P(5,3) = 5! / (5-3)! = (5 × 4 × 3) = 60."
    },
    { 
        question: "Jika P → Q dan Q → R, maka kesimpulan yang benar adalah?", 
        options: ["P → R", "Q → P", "R → P", "Tidak ada kesimpulan"],
        answer: "P → R",
        explanation: "Hukum silogisme: Jika P → Q dan Q → R, maka kesimpulannya adalah P → R."
    },
    { 
        question: "Dalam sebuah kartu remi standar (52 kartu), berapa peluang mengambil kartu hati (♥)?", 
        options: ["1/4", "1/2", "1/3", "1/6"],
        answer: "1/4",
        explanation: "Terdapat 13 kartu hati dalam 52 kartu. Jadi, peluang = 13/52 = 1/4."
    },
    { 
        question: "Sebuah kelas memiliki 15 siswa. Jika dipilih 3 siswa sebagai pengurus kelas, berapa cara memilihnya?", 
        options: ["455", "560", "780", "990"],
        answer: "455",
        explanation: "Kombinasi C(15,3) = 15! / (3!(15-3)!) = 455."
    },
    { 
        question: "Dalam sebuah turnamen, ada 10 tim yang bertanding. Berapa cara memilih 4 tim untuk masuk ke semifinal?", 
        options: ["120", "210", "252", "300"],
        answer: "210",
        explanation: "Kombinasi C(10,4) = 10! / (4!(10-4)!) = 210."
    },
    { 
        question: "Sebuah restoran memiliki 12 menu. Jika pelanggan memilih 3 jenis makanan, berapa cara memilihnya?", 
        options: ["220", "300", "400", "600"],
        answer: "220",
        explanation: "Kombinasi C(12,3) = 12! / (3!(12-3)!) = 220."
    },
    { 
        question: "Berapa peluang mendapatkan angka prima saat melempar sebuah dadu?", 
        options: ["1/2", "1/3", "1/6", "2/3"],
        answer: "1/2",
        explanation: "Angka prima di dadu: 2, 3, 5 (3 dari 6 kemungkinan). Peluang = 3/6 = 1/2."
    },
    { 
        question: "Berapa peluang mendapatkan jumlah 7 saat melempar dua dadu?", 
        options: ["1/6", "1/8", "1/9", "1/12"],
        answer: "1/6",
        explanation: "Ada 6 cara untuk mendapatkan jumlah 7 dari 36 kemungkinan, jadi peluang = 6/36 = 1/6."
    },
    { 
        question: "Dalam suatu perlombaan, ada 8 peserta. Berapa cara memilih 3 pemenang dengan urutan juara?", 
        options: ["336", "450", "512", "600"],
        answer: "336",
        explanation: "Permutasi P(8,3) = 8! / (8-3)! = 8 × 7 × 6 = 336."
    },
    { 
        question: "Berapa banyak cara menyusun huruf dari kata 'KOMBINATORIK' tanpa pengulangan?", 
        options: ["1.814.400", "2.268.000", "3.200.000", "4.032.000"],
        answer: "1.814.400",
        explanation: "Permutasi dengan huruf berulang: 11! / (2!2!) = 1.814.400."
    }
];

export default questions;
