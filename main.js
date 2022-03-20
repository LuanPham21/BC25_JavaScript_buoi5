document.getElementById("btnQLTS").onclick = function(){
    //Dau vao
    DiemChuan = document.getElementById("txtDiemChuan").value * 1;
    Diem1 = document.getElementById("txtDiem1").value * 1;
    Diem2 = document.getElementById("txtDiem2").value * 1;
    Diem3 = document.getElementById("txtDiem3").value * 1;
    KhuVuc = (document.getElementById("optKhuVuc").value);
    DoiTuong = (document.getElementById("optDoiTuong").value);

    //Xu ly

    var diemkhuVuc = 0;
    if(KhuVuc == "X"){
        diemkhuVuc = 0;
    }else if(KhuVuc == "A"){
        diemkhuVuc = 2;
    }else if(KhuVuc == "B"){
        diemkhuVuc = 1;
    }else if(KhuVuc == "C"){
        diemkhuVuc = 0,5;
    }

    var diemDoiTuong = 0;
    if(DoiTuong == 0){
        diemDoiTuong = 0;
    }else if(DoiTuong == 1){
        diemDoiTuong = 2.5;
    }else if(DoiTuong == 2){
        diemDoiTuong = 1.5;
    }else if(DoiTuong == 3){
        diemDoiTuong = 1;
    }

    var TinhDiem = Diem1 + Diem2 + Diem3 + diemDoiTuong + diemkhuVuc;
    var tongKet = "";
    if(Diem1 > 0 && Diem2 > 0 && Diem3 > 0 && TinhDiem >= DiemChuan)
    {
        tongKet = "Đậu";
    }
    else{
        tongKet = "Rớt";
    }
    var kq = "Thí sinh đó " + tongKet + "<br/>" +
    "Số điểm đạt được " + TinhDiem;
    //Dau ra
    document.getElementById("footerThongBaoBai1").innerHTML = kq;
}

//Tien dien
const giakwDau = 500;
const gia50kwke = 650;
const gia100kwke = 850;
const gia150kwke = 1100;
const giakwConLai = 1300;
var tienKwDau = 0;
var tienKw_1 = 0;
var tienKw_2 = 0;
var tienKw_3 = 0;
var tienKw_4 = 0;
var tongTien =0;
const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  })


document.getElementById("btnTinhTienDien").onclick = function(){
    //Dau vao
    Ten = document.getElementById("txtTen").value;
    SoDien = document.getElementById("txtSoDien").value * 1;

    //Xu ly

    tinhTienChiTiet(SoDien);
    var kqTD = "Tổng tiền điện của " + Ten + " là " + formatter.format(tongTien) + "";
    //Dau ra
    document.getElementById("footerThongBaoBai2").innerHTML = kqTD;

}
function TienKwDau(soKw,giaKw){
    var kq = 0;
    kq = giaKw * soKw;
    return kq;
}
function TienKw1(soKw,giaKw){
    //50hw
    var kq = 0;
    kq = soKw * giaKw;
    return kq;
}
function TienKw2(soKw,giaKw){
    var kq = 0;
    kq = soKw * giaKw;
    return kq;
}
function TienKw3(soKw,giaKw){
    var kq = 0;
    kq = soKw* giaKw;
    return kq;
}
function TienKw4(soKw,giaKw){
    var kq = 0;
    kq = soKw * giaKw;
    return kq;
}
function tinhTienChiTiet(soKw){
    if( 0 <= soKw && soKw <= 50){
        tienKwDau = TienKwDau(soKw,giakwDau);
        tongTien = tienKwDau ;
    }else if(50 < soKw && soKw <= 100){
        tienKwDau = TienKwDau(50,giakwDau);
        tienKw_1 = TienKw1(soKw,gia50kwke);       
        tongTien = tienKwDau + tienKw_1;
    }else if(100 < soKw && soKw <= 200){
        tienKwDau = TienKwDau(50,giakwDau);
        tienKw_1 = TienKw1(50,gia50kwke);   
        tienKw_2 = TienKw2(soKw-100,gia100kwke);    
        tongTien = tienKwDau + tienKw_1 + tienKw_2;
    }else if(200 < soKw && soKw <= 350){
        tienKwDau = TienKwDau(50,giakwDau);
        tienKw_1 = TienKw1(50,gia50kwke);   
        tienKw_2 = TienKw2(100,gia100kwke);     
        tienKw_3 = TienKw3(soKw-200,gia150kwke);    
        tongTien = tienKwDau + tienKw_1 + tienKw_2 + tienKw_3;
    }else if(350 < soKw){
        tienKwDau = TienKwDau(50,giakwDau);
        tienKw_1 = TienKw1(50,gia50kwke);   
        tienKw_2 = TienKw2(100,gia100kwke);     
        tienKw_3 = TienKw3(150,gia150kwke);    
        tienKw_4 = TienKw4(soKw-350,giakwConLai);    
        tongTien = tienKwDau + tienKw_1 + tienKw_2 + tienKw_3 + tienKw_4;
    }
}
