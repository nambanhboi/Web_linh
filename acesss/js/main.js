const taikhoan = document.querySelector('.tdt_tai_khoan')// tạo biến taikhoan để lưu class có tên là .tdt_tai_khoan
const dang_nhap = document.querySelector('.dang_nhap_ok')
const dang_ky = document.querySelector('.dang_ky_ok')
const chitietsp = document.querySelector('.td_san_pham_chi_tiet')
const bst = document.querySelector('.td_bst')
const home = document.querySelector('.td_trang_chu')
const tdd_moblie = document.querySelector('.fa-bars')

let isShow = false;

// tạo sự kiện nếu ấn vào class .tdt_tai_khoan thì .danh_muc_tk sẽ hiện lên ngược lại click lần nữa sẽ ẩn đi,
// và sự kiện nếu ấn vào class .tdt_tai_khoan thì class .dang_nhap .danh_ky sẽ bị ẩn đi
taikhoan.addEventListener('click', function(){
    this.isShow = !this.isShow
    if(this.isShow == true){
        document.querySelector('.danh_muc_tk').style.display = 'block'
        document.querySelector('.dang_nhap').style.display = 'none'
        document.querySelector('.dang_ky').style.display = 'none'
    }
    else{
        document.querySelector('.danh_muc_tk').style.display = 'none'
    }
})

// tạo sự kiện nếu ấn vào class .dang_nhap_ok thì .dang_nhap sẽ hiện lên ngược lại click lần nữa sẽ ẩn đi, 
// đồng thời .danh_muc_tk bị ẩn đi
dang_nhap.addEventListener('click',function (){
    this.isShow = !this.isShow
    if(this.isShow == true){
        document.querySelector('.danh_muc_tk').style.display = 'none'
        document.querySelector('.dang_nhap').style.display = 'block'
    }
    else{
        document.querySelector('.dang_nhap').style.display = 'none'
    }
})

// tạo sự kiện nếu ấn vào class .dang_ky_ok thì .dang_ky sẽ hiện lên ngược lại click lần nữa sẽ ẩn đi, 
// đồng thời .danh_muc_tk bị ẩn đi
dang_ky.addEventListener('click',function (){
    this.isShow = !this.isShow
    if(this.isShow == true){
        document.querySelector('.danh_muc_tk').style.display = 'none'
        document.querySelector('.dang_ky').style.display = 'block'
    }
    else{
        document.querySelector('.dang_ky').style.display = 'none'
    }
})

// tạo sự kiện nếu ấn vào class .fa-bars thì .tieu_de_duoi_mobile sẽ hiện lên ngược lại click lần nữa sẽ ẩn đi
tdd_moblie.addEventListener('click',function (){
    this.isShow = !this.isShow
    if(this.isShow == true){
        document.querySelector('.tieu_de_duoi_mobile').style.display = 'block'
    }
    else{
        document.querySelector('.tieu_de_duoi_mobile').style.display = 'none'
    }
})

// start: tạo sự kiện cho class .tieu_de_duoi đổi màu với web-page tương ứng
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.chon_td')
console.log(tabs)
//forEach được sử dụng để gắn sự kiện click cho mỗi phần tử trong tabs. Khi một phần tử được nhấp vào, mã kiểm tra xem nó đã có lớp active hay chưa. Nếu có, lớp active sẽ được loại bỏ. Nếu không,
// tất cả các phần tử khác có lớp active sẽ được loại bỏ và lớp active sẽ được thêm vào phần tử được nhấp vào.
tabs.forEach((tab) => {
    tab.onclick = function () {
      if (this.classList.contains('active')) {
        this.classList.remove('active');
      } else {
        $$('.chon_td.active').forEach((activeTab) => {
          activeTab.classList.remove('active');
        });
        this.classList.add('active');
      }
    };
});


// tạo sự kiện khi click vào chitietsp thì sẽ dẫn tới đường link tương ứng
chitietsp.addEventListener('click',function() {
    window.location.href = "http://127.0.0.1:5500/chi_tiet_san_pham.html";
})

bst.addEventListener('click',function() {
    window.location.href = "http://127.0.0.1:5500/san_pham.html";
})

home.addEventListener('click',function() {
    window.location.href = "http://127.0.0.1:5500/trang_chu.html";
})