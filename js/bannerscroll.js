window.addEventListener('scroll', function() {
    var banner = document.querySelector('.banner'); // 获取 Banner 元素
    var nav = document.querySelector('.nav'); // 获取导航栏元素
    var bannerHeight = banner.offsetHeight; // 获取 Banner 的高度
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop; // 获取滚动的距离

    if (scrollTop > bannerHeight/4) { // 如果滚动距离大于 Banner 高度
        nav.classList.add('fixed'); // 添加固定导航栏的类
    } else {
        nav.classList.remove('fixed'); // 移除固定导航栏的类
    }
});



