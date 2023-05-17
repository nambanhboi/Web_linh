const iconshows = document.querySelectorAll('.icon-show')

iconshows.forEach(function(iconshow) {
    console.log(iconshow.parentElement.parentElement.className)

    let cha = iconshow.parentElement.parentElement;
    cha.addEventListener('click', function() {
        if(cha.className === 'gioi_thieu') {
            document.querySelector('.chi_tiet_gt').classList.toggle('show')
        }
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
