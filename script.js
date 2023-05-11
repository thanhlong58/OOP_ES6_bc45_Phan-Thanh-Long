import { Listperson } from "./model/ListPerSon.js";
import { Person } from "./model/Person.js";
import { Employee } from "./model/Person.js";
import { Student } from "./model/Person.js";
import { Customer } from "./model/Person.js";
let cyberSoftAcademy = new Listperson();

import { kiemTraRong, kiemTraTen, kiemTraEmail, kiemTraKhoang } from "./utility/method.js";


//Them User
document.querySelector('#btnThemPerson').onclick = () => {
  let newPerSon = new Person();
  console.log(newPerSon);
  let newStudent = new Student()
  let newCustomer = new Customer();
  let newEmployee = new Employee();
  console.log(newPerSon);

  // newPerSon = {...newPerSon,...newStudent,...newEmployee,... newEmployee}

  let arrInput = document.querySelectorAll('#myModal input,#myModal select  ,  #myModal textarea');
  console.log(arrInput);

  let loai = document.querySelector('#loai').value;
  for (let input of arrInput) {
    let { id, value } = input;
    newPerSon[id] = value;



  }

  console.log(loai);
  //validation

  let valid = true;

  let idValid = document.querySelector('#validation-id');
  let emailValid = document.querySelector('#validation-email');
  let addressValid = document.querySelector('#validation-address');

  let nameValid = document.querySelector('#validation-name');
  let mathValid = document.querySelector('#validation-math');
  let physicsValid = document.querySelector('#validation-physics');
  let chemistryValid = document.querySelector('#validation-chemistry');

  let dayValid = document.querySelector('#validation-day');
  let salaryValid = document.querySelector('#validation-salary');
  let companyValid = document.querySelector('#validation-company');
  let billValid = document.querySelector('#validation-bill');
  let reviewValid = document.querySelector('#validation-review');

  console.log(cyberSoftAcademy.mangPerSon);
  let selectValue = document.querySelector('#loai').value;
  if (selectValue === 'choose') {
    valid = false
    document.querySelector('#validation-type').innerHTML = 'Please select an option'
  } else {
    valid = true;
    document.querySelector('#validation-type').innerHTML = ''
  }
  
  valid = kiemTraRong(newPerSon.ma, idValid.id) & kiemTraRong(newPerSon.email, emailValid.id) & kiemTraRong(newPerSon.hoTen, nameValid.id) & kiemTraRong(newPerSon.diaChi, addressValid.id) &
    kiemTraRong(newPerSon.toan, mathValid.id) & kiemTraRong(newPerSon.ly, physicsValid.id) &
    kiemTraRong(newPerSon.hoa, chemistryValid.id) & kiemTraRong(newPerSon.danhGia, reviewValid.id) &
    kiemTraRong(newPerSon.triGiaHoaDon, billValid.id) & kiemTraRong(newPerSon.tenCongTy, companyValid.id) &
    kiemTraRong(newPerSon.soNgayLam, dayValid.id) & kiemTraRong(newPerSon.luongTheoNgay, salaryValid.id);
  //kiem tra ten 
  if (kiemTraRong(newPerSon.hoTen, nameValid.id)) {
    valid = valid & kiemTraTen(newPerSon.hoTen, nameValid.id);
  }

  //kiem tra khoang 
  if (kiemTraRong(newPerSon.toan, mathValid.id)) {
    valid = valid & kiemTraKhoang(newPerSon.toan, mathValid.id, 0, 10)
  }
  if (kiemTraRong(newPerSon.ly, physicsValid.id)) {
    valid = valid & kiemTraKhoang(newPerSon.ly, physicsValid.id, 0, 10)
  }
  if (kiemTraRong(newPerSon.hoa, chemistryValid.id)) {
    valid = valid & kiemTraKhoang(newPerSon.hoa, chemistryValid.id, 0, 10)
  }
  if (kiemTraRong(newPerSon.soNgayLam, dayValid.id)) {
    valid = valid & kiemTraKhoang(newPerSon.soNgayLam, dayValid.id, 0, 31)
  }

  
  
 

 //kiem tra id 

 let mangPerson = cyberSoftAcademy.mangPerSon;

  let mangId = mangPerson.map((item) => {
    return item.ma;
  });
  console.log(mangId);
 if (kiemTraRong(newPerSon.ma,idValid.id)) {
  if (mangId.includes(newPerSon.ma)) {
    valid = false;
    document.querySelector('#validation-id').innerHTML = 'Id is registered';

  } else {
    document.querySelector('#validation-id').innerHTML = '';
    valid = true;
  }
 }
  

  
  //kiem tra emai;
  if (kiemTraRong(newPerSon.email, emailValid.id)) {
    valid = valid & kiemTraEmail(newPerSon.email, emailValid.id);
  }




  let arrSpanValidation = document.querySelectorAll('#myModal span');
  // console.log(validationText);
  for (let spanValid of arrSpanValidation) {
    if (spanValid.style.display === 'none') {
     
      continue;
    }
    if (spanValid.textContent.trim() !== '') {
     
      valid = false;
      return;
    }
  }
  let arrInputStudent = document.querySelectorAll('#toan,#ly,#hoa');
  let arrInputEmployee = document.querySelectorAll('#luongTheoNgay,#soNgayLam');
  let arrInputCustomer = document.querySelectorAll('#tenCongTy,#danhGia,#triGiaHoaDon');
  if (selectValue === 'student') {
   arrInputCustomer.forEach((input)=>{
    if(input.value !== '') {
      valid = false;
    }
   })
   arrInputEmployee.forEach((input)=>{
    if(input.value !== '') {
      valid = false;
    }
   })
  }
  if (selectValue === 'employee') {
    arrInputStudent.forEach((input)=>{
      if(input.value !== '') {
        valid = false;
      }
     })
     arrInputCustomer.forEach((input)=>{
      if(input.value !== '') {
        valid = false;
      }
     })
  }

  if (selectValue === 'customer') {
    arrInputStudent.forEach((input)=>{
      if(input.value !== '') {
        valid = false;
      }
     })
     arrInputEmployee.forEach((input)=>{
      if(input.value !== '') {
        valid = false;
      }
     })
  }

  if(selectValue === 'choose') {
    valid = false;
   
  }
  


  if (!valid) {
    return;
  }
  




  cyberSoftAcademy.themPerSon(newPerSon);
  console.log(cyberSoftAcademy);

  cyberSoftAcademy.renderDanhSachPerSon('#tbodyPerSon');
  cyberSoftAcademy.luuPerSon();

  document.querySelector('#btnDong').click();
  document.querySelector('#myform').reset();


}


window.onload = () => {

  cyberSoftAcademy.layPerSon();
  cyberSoftAcademy.renderDanhSachPerSon('#tbodyPerSon');
}


window.xoaPerSon = (maPersonXoa) => {
  if (cyberSoftAcademy.xoaPerSon(maPersonXoa)) {
    cyberSoftAcademy.renderDanhSachPerSon('#tbodyPerSon');
    cyberSoftAcademy.luuPerSon();
  }

}



//lay thong tin user len Modal
window.chinhSua = (maPerSon) => {

  // document.querySelector('#myBtn').click();
  // mod
  modal.style.display = "block";
  document.querySelector('#ma').disabled = true;
  document.querySelector('#loai').disabled = true;
 document.querySelector('#btnThemPerson').disabled = true;
  document.querySelector('#btnCapNhat').disabled = false;
 let arrValid = document.querySelectorAll('#myModal span');
 console.log(arrValid);
 for (let span of arrValid) {
span.className = 'text-danger'
span.style.display = 'none'
 }




  let perSonChinhSua = cyberSoftAcademy.laythongtinPerson(maPerSon);

  if (perSonChinhSua) {





    let arrInput = document.querySelectorAll('#myModal input, #myModal select, #myModal textarea');
    console.log(arrInput);
    for (let input of arrInput) {
      let { id } = input;

      input.value = perSonChinhSua[id];
    }
  }

  let arrInput = document.querySelectorAll('#toan,#ly,#hoa,#luongTheoNgay,#soNgayLam,#tenCongTy,#danhGia,#triGiaHoaDon')
  let arrInputStudent = document.querySelectorAll('#toan,#ly,#hoa');
  let arrInputEmployee = document.querySelectorAll('#luongTheoNgay,#soNgayLam');
  let arrInputCustomer = document.querySelectorAll('#tenCongTy,#danhGia,#triGiaHoaDon');
  if (perSonChinhSua.loai === 'student') {
    for (let input of arrInput) {
      input.disabled = true;
      for (let input of arrInputStudent) {
        input.disabled = false;
      }
    }

  } else if (perSonChinhSua.loai === 'employee') {
    for (let input of arrInput) {
      input.disabled = true;
    }
    for (let input of arrInputEmployee) {
      input.disabled = false;
    }
  } else if (perSonChinhSua.loai === 'customer') {
    for (let input of arrInput) {
      input.disabled = true;
    }
    for (let input of arrInputCustomer) {
      input.disabled = false;
    }
  }


  console.log(perSonChinhSua);


}
//Cap Nhat User
document.querySelector('#btnCapNhat').onclick = () => {
  console.log(12324);
  
  
  let perSonCapNhat = new Person();
  let arrInput = document.querySelectorAll('#myModal input, #myModal select,  #myModal textarea');
  for (let input of arrInput) {
    let { id, value } = input;
    perSonCapNhat[id] = value;
    if (input.type === 'number') {
      perSonCapNhat[id] = +value;
    }

  }
  


  cyberSoftAcademy.capNhatPerSon(perSonCapNhat.ma, perSonCapNhat);
  cyberSoftAcademy.renderDanhSachPerSon('#tbodyPerSon');

  document.querySelector('#btnDong').click();
  cyberSoftAcademy.luuPerSon();



}


document.querySelector('#selLoai').onchange = (e) => {
  let arrTh = document.querySelectorAll('.sales-boxes th');
  

  console.log(arrTh);
  let loai = e.target.value;
  let nv = new Employee();
  let customer = new Customer();




  let arrPerSonBackUp = [...cyberSoftAcademy.mangPerSon];

  cyberSoftAcademy.filterPerSon(loai);
  console.log(cyberSoftAcademy.mangPerSon);
 
  
  console.log(cyberSoftAcademy.mangPerSon);
  
 
  
  cyberSoftAcademy.renderDanhSachPerSon('#tbodyPerSon');

  cyberSoftAcademy.mangPerSon = arrPerSonBackUp;



  let thList = document.querySelectorAll('.sales-boxes th');
  console.log(thList);
  let tdLuongList = document.querySelectorAll('td:nth-child(6)');
  let tdCongTyList = document.querySelectorAll('td:nth-child(8)');
  let tdBillList = document.querySelectorAll('td:nth-child(9)');
  let tdReviewList = document.querySelectorAll('td:nth-child(10)');
  let tdDiemTBList = document.querySelectorAll('td:nth-child(7)');


  let thdisabledforStudent = document.querySelectorAll('#th-danhGia,#th-hoa-don,#th-congTy,#th-luong');
  let thdisabledForEmployee = document.querySelectorAll('#th-dtb,#th-congTy,#th-hoa-don,#th-danhGia');
  let thdisabledForCustomer = document.querySelectorAll('#th-luong,#th-dtb');

  let thenabledforStudent = document.querySelector('#th-dtb');
  let thenabledforEmployee = document.querySelector('#th-luong');
  let thenabledforCustomer = document.querySelectorAll('#th-danhGia,#th-hoa-don,#th-congTy');


  if (loai === 'student') {
    thenabledforStudent.style.display = '';
    for (let th of thdisabledforStudent) {
      th.style.display = 'none'
    }


    tdLuongList.forEach((tdLuong) => {
      tdLuong.style.display = 'none';
    });

    tdBillList.forEach((tdBill) => {
      tdBill.style.display = 'none'
    })
    tdCongTyList.forEach((tdCongTy) => {
      tdCongTy.style.display = 'none';
    });

    tdReviewList.forEach((tdReview) => {
      tdReview.style.display = 'none'
    })
  }
  
  
  if (loai === 'employee') {
    thenabledforEmployee.style.display = '';
    
    for (let th of thdisabledForEmployee) {
      th.style.display = 'none';
    }

    tdDiemTBList.forEach((tdDTB) => {
      tdDTB.style.display = 'none';
    })
    tdBillList.forEach((tdBill) => {
      tdBill.style.display = 'none'
    })
    tdCongTyList.forEach((tdCongTy) => {
      tdCongTy.style.display = 'none';
    });

    tdReviewList.forEach((tdReview) => {
      tdReview.style.display = 'none'
    })

  }
  
  
  if (loai === 'customer') {
    for (let th of thenabledforCustomer) {
      th.style.display = '';
    }
    
    for (let th of thdisabledForCustomer) {
      th.style.display = 'none';
    }
    tdDiemTBList.forEach((tdDTB) => {
      tdDTB.style.display = 'none';
    })
    tdLuongList.forEach((tdLuong) => {
      tdLuong.style.display = 'none';
    });


  }

  if (loai === 'all') {
    for (let th of thList) {
      th.style.display= '';
    }
  }

}



//sap xep

document.querySelector('#sort-select').onchange = (e) => {
   let loai = document.querySelector('#selLoai').value;
  let sortValue = e.target.value;
  let arrPerSonBackUp = [...cyberSoftAcademy.mangPerSon];






  let tdLuongList = document.querySelectorAll('td:nth-child(6)');
  let tdCongTyList = document.querySelectorAll('td:nth-child(8)');
  let tdBillList = document.querySelectorAll('td:nth-child(9)');
  let tdReviewList = document.querySelectorAll('td:nth-child(10)');
  let tdDiemTBList = document.querySelectorAll('td:nth-child(7)');
  if (sortValue === "name"  ) {
    
    cyberSoftAcademy.orderByName(cyberSoftAcademy.mangPerSon);
    // cyberSoftAcademy.filterPerSon(loai);
    
   
    cyberSoftAcademy.renderDanhSachPerSon('#tbodyPerSon');
    cyberSoftAcademy.mangPerSon = arrPerSonBackUp;


  } 
  if(sortValue === "name" && (loai === 'student' || loai === 'employee' || loai ==='customer') ) {
    
   
    cyberSoftAcademy.filterPerSon(loai);
    console.log(cyberSoftAcademy.mangPerSon);
    cyberSoftAcademy.orderByName(cyberSoftAcademy.mangPerSon)
    cyberSoftAcademy.renderDanhSachPerSon('#tbodyPerSon')
    
    cyberSoftAcademy.mangPerSon = arrPerSonBackUp;
  }
  
}
//Click mo modal 
const myBtn = document.getElementById("myBtn"); // select the element by its ID

myBtn.addEventListener("click", function (event) {


  document.querySelector('#btnThemPerson').disabled = false;
  document.querySelector('#btnCapNhat').disabled = true;
  let selectValue = document.querySelector('#loai').value;
  console.log(selectValue);
  event.preventDefault(); // prevent the link from following its href
  document.querySelector('#myform').reset();
  let arrSpanValidation = document.querySelectorAll('#myModal span');
  for (let spanValid of arrSpanValidation) {
    spanValid.innerHTML = '';
  }
 
  let arrInput = document.querySelectorAll('#myModal input, #myModal select, #myModal textarea');
  for (let input of arrInput) {
    input.disabled = false;
  }
  document.querySelector('#loai').onchange = (e) => {
    let loai = e.target.value;
    let arrSpan = document.querySelectorAll('#myModal span');
    console.log(arrSpan)
    let arrSpanStudent = document.querySelectorAll('#validation-math,#validation-physics,#validation-chemistry,#validation-name,#validation-id,#validation-id2,#validation-address,#validation-email');
    let arrSpanEmployee = document.querySelectorAll('#validation-id,#validation-id2,#validation-name,#validation-address,#validation-email,#validation-day,#validation-salary');
    let arrSpanCustomer = document.querySelectorAll('#validation-id,#validation-id2,#validation-name,#validation-address,#validation-email,#validation-company,#validation-bill,#validation-review')
    console.log(arrSpanStudent);
    let arrInput2 = document.querySelectorAll('#toan,#ly,#hoa,#luongTheoNgay,#soNgayLam,#tenCongTy,#danhGia,#triGiaHoaDon')
    let arrInputStudent = document.querySelectorAll('#toan,#ly,#hoa');
    let arrInputEmployee = document.querySelectorAll('#luongTheoNgay,#soNgayLam');
    let arrInputCustomer = document.querySelectorAll('#tenCongTy,#danhGia,#triGiaHoaDon');
    if (loai === 'student') {
      document.querySelector('#btnThemPerson').disabled = false;
      for (let span of arrSpan) {
        span.className = 'text-danger';
        span.style.display = 'none'
        console.log(span);
      }
      for (let span of arrSpanStudent) {
        span.style.display = 'block'
      }

      for (let input of arrInput2) {
        input.disabled = true;
        for (let input of arrInputStudent) {
          input.disabled = false;
        }
      }

    } else if (loai === 'employee') {
      document.querySelector('#btnThemPerson').disabled = false;
      for (let span of arrSpan) {
        span.className = 'text-danger';
        span.style.display = 'none';
      }
      for (let span of arrSpanEmployee) {
        span.style.display = 'block';
      }
      for (let input of arrInput2) {
        input.disabled = true;
      }
      for (let input of arrInputEmployee) {
        input.disabled = false;
      }
    } else if (loai === 'customer') {
      document.querySelector('#btnThemPerson').disabled = false;
      for (let span of arrSpan) {
        span.className = 'text-danger';
        span.style.display = 'none'
      }
      for (let span of arrSpanCustomer) {
        span.style.display = 'block';
      }
      for (let input of arrInput2) {
        input.disabled = true;
      }
      for (let input of arrInputCustomer) {
        input.disabled = false;
      }
    } else {
      
      for (let span of arrSpan) {
        span.style.display = 'block';
      }
      for (let input of arrInput) {
        input.disabled = false;
      }

    }
  }




});



//Modal
const myModal = document.getElementById("myModal");


const closeButton = document.getElementById("btnDong");


closeButton.addEventListener("click", () => {
  myModal.style.display = "none";
});


let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");
sidebarBtn.onclick = function () {
  sidebar.classList.toggle("active");
  if (sidebar.classList.contains("active")) {
    sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  } else
    sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
}




var modal = document.getElementById("myModal");


var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function () {
  modal.style.display = "block";
}


span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}





