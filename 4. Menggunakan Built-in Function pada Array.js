var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input){ 

    input.splice(1,1, "Roman Alamsyah Elsharawy");
    input.splice(2,1, "Provinsi Bandar Lampung");
    input.splice(4,1, "Pria", "SMA Internasional Metro");
    console.log(input);

    var tanggal=  input[3].split("/");
    var bulan = tanggal[1];
    var tanggal1=tanggal.join("-");
    tanggal.sort(function(a,b){return b-a});

    switch (bulan) {
        case '01':
        bulan="Januari";
            break;
        case '02':
        bulan="Februari";
            break;
        case '03':
        bulan="Maret";
            break;
        case '04':
        bulan="April";
            break;
        case '05':
        bulan="Mei";
            break;
        case '06':
        bulan="Juni";
            break;
        case '07':
        bulan="Juli";
            break;
        case '08':
        bulan="Agustus";
            break;
        case '09':
        bulan="September";
            break;
        case '10':
        bulan="Oktober";
            break;
        case '11':
        bulan="November";
            break;
        case '12':
        bulan="Desember";
            break;                                                                                                                                                                                                                                    
        default:
        bulan="Invalid";
            break;
    }

    console.log(bulan);
    console.log(tanggal);
    console.log(tanggal1);
    console.log(input[1].slice(0, 15));

    
}

dataHandling2(input);