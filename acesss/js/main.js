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

//FOOTER

//js này để làm responsive màn hình nhỏ hơn 740px
//tìm ra tất cả icon có class là icon-show( ở footer)
const iconshows = document.querySelectorAll('.icon-show')
//dùng vòng lặp foreach để lặp đến từng ion 1
iconshows.forEach(function(iconshow) {
    console.log(iconshow.parentElement.parentElement.className)
    //tìm ra thẻ bên ngoài chứa các thẻ icon trên nghĩa là thẻ cha của nó, 
    //.parentElement đầu tiên thì ra thẻ có class tieu_de_footer, 
    //.parentElement thứ 2 sẽ ra thẻ lớn nhất bên ngoài
    //ví dụ lần lặp đầu tiên iconshow tìm được thẻ cha 1 của nó là tieu_de_footer, cha thứ 2 bên ngoài 1 lớp nữa là thẻ class gioi_thieu 
    let cha = iconshow.parentElement.parentElement;

    //thêm sự kiện click cho thẻ vừa tìm được
    cha.addEventListener('click', function() {
        //nếu tên class của thẻ này là gioi_thieu thì thêm xóa luân phiên class show(class show trong main.css : display: flex !important) cho thẻ có class là chi_tiet_gt
        if(cha.className === 'gioi_thieu') {
            document.querySelector('.chi_tiet_gt').classList.toggle('show')
        }
        //dưới đây cũng tương tự như trên
        else if(cha.className === 'thong_tin_lien_he') {
            document.querySelector('.chi_tiet_ttlh').classList.toggle('show')
        }
        else if(cha.className === 'ho_tro') {
            document.querySelector('.chi_tiet_ht').classList.toggle('show')
        }
        else {
            document.querySelector('.chi_tiet_lk').classList.toggle('show')
        }
    })
})
