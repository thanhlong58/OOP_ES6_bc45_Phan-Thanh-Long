import { Person } from "./Person.js";
import { Employee } from "./Person.js";
import { Customer } from "./Person.js";
import { Student } from "./Person.js";


export class Listperson {

    mangPerSon = [];
   
    
    themPerSon(PerSonMoi) {
        this.mangPerSon.push(PerSonMoi);
       
        return this.mangPerSon;
    }

    
    renderDanhSachPerSon(selector) {
        let trPerSon = '';
        for (let perSon of this.mangPerSon) {
            let perSonMoi = new Person();
            let customerMoi = new Customer();
            let employeeMoi = new Employee();
            let studenMoi = new Student();

            perSonMoi = { ...perSonMoi, ...customerMoi, ...employeeMoi, ...studenMoi, ...perSon }
            const tinhLuong = perSonMoi.tinhLuong();
            const diemTrungBinh = perSonMoi.tinhdiemTrungBinh();

            trPerSon += `
                <tr>
                    <td>${perSonMoi.ma}</td>
                    <td class= "text-success">${perSonMoi.loai}</td>
                    <td>${perSonMoi.hoTen}</td>
                    <td>${perSonMoi.diaChi}</td>
                    <td>${perSonMoi.email}</td>
                    <td id="tinh-luong-nv">${tinhLuong}</td>
                    <td id="tinh-dtb">${diemTrungBinh}</td>
                    <td>${perSonMoi.tenCongTy}</td>
                    <td>${perSonMoi.triGiaHoaDon}</td>
                    <td>${perSonMoi.danhGia}</td>
                    <td style="text-align: center;">
                        <button class="btn btn-danger" onclick="xoaPerSon('${perSonMoi.ma}')">Del</button>
                        <button class="btn btn-primary" onclick="chinhSua('${perSonMoi.ma}')">Edit</button>
                    </td>
                </tr>
            `
        }
        document.querySelector(selector).innerHTML = trPerSon;

        
        const tdElements = document.querySelectorAll(`${selector} td`);
        tdElements.forEach((td) => {
            if (td.innerHTML.trim() === '') {
             td.innerHTML = `<span class="text-center" ><i class="fa fa-smile-wink text-success"></i></span>`
           
            }
           
        });
        

        return trPerSon;
    }
    luuPerSon() {
        let sMangPerSon = JSON.stringify(this.mangPerSon);
        localStorage.setItem('mangPerSon', sMangPerSon);
    }

    layPerSon() {
        if (localStorage.getItem('mangPerSon')) {
            let mangPerSon = JSON.parse(localStorage.getItem('mangPerSon'));
            this.mangPerSon = mangPerSon;
        }

    }

    
    xoaPerSon(maPerSon) {
        console.log(maPerSon);
        let indexDel = this.mangPerSon.findIndex(person => person.ma == maPerSon);
        if (indexDel !== -1) {
            this.mangPerSon.splice(indexDel, 1);
            return true;
        }
        return false;
    }

    laythongtinPerson(maPerson) {
        let perSonChinhSua = this.mangPerSon.find(person => person.ma === maPerson);
console.log(perSonChinhSua);
        return perSonChinhSua;
        
    }

    capNhatPerSon(maPerson, perSonCapNhat) {
        let personTrongMang = this.laythongtinPerson(maPerson);

        if (personTrongMang) {
            for (let key in personTrongMang) {
                personTrongMang[key] = perSonCapNhat[key];
            }
            return true;
        }

        return false;
    }

    filterPerSon(value) {
        if (value !== 'all') {
            this.mangPerSon = this.mangPerSon.filter(person => person.loai === value)
           
        }
        return this.mangPerSon;
    }
    
    orderByName(array) {
     return   array.sort((person, personPrev) => {
            let name = person.hoTen.toLowerCase();
            let namePrev = personPrev.hoTen.toLowerCase();
            if (name < namePrev) {
                return -1;
            }
            return 1;
        });
        
    }
     

    
    
      

   

}








