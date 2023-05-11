export class Person {
    hoTen = '';
    diaChi = '';
    ma = '';
    email = '';
    loai = '';
   
    
}




export class Student extends Person { 
    toan = 0;
    ly = 0;
    hoa = 0;
    
    tinhdiemTrungBinh = function() {
        if (this.toan === '' || this.ly === '' || this.hoa === '') {
            return '';
        }
        let diemTb = ( Number (this.toan) + Number (this.ly) + Number (this.hoa)) / 3;
        return diemTb;
    }
}

export class Employee extends Person {
    soNgayLam = 0;
    luongTheoNgay = 0;
    tinhLuong = function () {
        if (this.soNgayLam === '' || this.luongTheoNgay === '' ) {
            return '';
        }
        let luong = this.soNgayLam * this.luongTheoNgay;
        return luong;
    }
}

export class Customer extends Person {
    tenCongTy = '';
    triGiaHoaDon = '';
    danhGia = '';
    
}