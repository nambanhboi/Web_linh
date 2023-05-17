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
