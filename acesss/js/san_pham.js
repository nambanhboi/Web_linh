//lấy ra thẻ button thêm sự kiện click hiển thị tất cả các sản phẩm còn lại
document.querySelector('button').addEventListener('click', function() {
    //lấy ra các sản phẩm có class them và xóa từng thuộc tính style của các sản phẩm bị ẩn
    document.querySelectorAll('.them').forEach(function(sanpham) {
        sanpham.removeAttribute('style');
    })
    //thêm style display: none để ẩn thẻ button
    this.style.display = 'none';
})

document.querySelector('.bo_loc_res').addEventListener('click', function() {
    document.querySelector('.filter').classList.toggle('hien')
})