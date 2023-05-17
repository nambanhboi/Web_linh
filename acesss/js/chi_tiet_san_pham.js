let vi_tri = 0; // khởi tạo biến vi_tri
const slides = document.getElementsByClassName('anh_chay'); // gọi biến slides để luuwu tất cả các class có tên là anh_chay

// hàm Hient_thi_slide() để hiển thị ảnh, dùng vòng lặp để mỗi i thì sẽ chuyển sang trục X với kích thước -${vi_tri * 100}
function Hien_thi_slide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(-${vi_tri * 100}%)`;
  }
}

// khi click vào slide_truoc thì tương ứng sẽ chuyển sang 1 ảnh tiếp theo
function next() {
  if (vi_tri < slides.length - 1) {
    vi_tri++;
  } else {
    vi_tri = 0;
  }
  Hien_thi_slide();
}

// khi click vào slide_sau thì tương ứng sẽ chuyển lùi 1 ảnh 
function prev() {
  if (vi_tri > 0) {
    vi_tri--;
  } else {
    vi_tri = slides.length - 1;
  }
  Hien_thi_slide();
}

// cho các ảnh chạy tăng dần và mỗi ảnh sẽ chạy sau 3500 giây
setInterval(next,3500);

Hien_thi_slide();