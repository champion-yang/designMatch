window.onload=function(){
    function chushan(img, banner,time = 3000) {
        // 获取元素
        let imgs = document.querySelectorAll(img);
        let ban = document.querySelector(banner);
        // 定义下标
        let num = 0;
        // 设置图片默认显示第一张
        imgs[0].style.opacity = 1;
        // 设置轮播点默认显示第一个
        // 自动轮播
        let t = setInterval(move, time);
        function move() {
            num = num === imgs.length - 1 ? 0 : ++num;
            imgs.forEach((val, index) => {
                val.style.opacity = 0;
            });
            imgs[num].style.opacity = 1;
        }
        //鼠标移入停止轮播
        ban.onmouseover = () => {
            clearInterval(t);
        };
        //鼠标移出继续轮播
        ban.onmouseout = () => {
            t = setInterval(move, time);
        };
        // 页面失去焦点时停止轮播
        onblur = () => {
            clearInterval(t);
        };
        // 页面获得焦点时继续轮播
        onfocus = () => {
            t = setInterval(move, time);
        };
    }
    chushan(".banner",".banner-box",)
    
    function Banner_transform(img, leftbtn, rightbtn, ban) {
        // 获取元素
        let imgs = document.querySelectorAll(img);
        let lbtn = document.querySelector(leftbtn);
        let rbtn = document.querySelector(rightbtn);
        let banner = document.querySelector(ban);
        // 获取轮播图的宽度
        let widths = 278;
        // 定义双下标,now:当前页面下标,next:下一张页面下标
        let now = 0;
        let next = 0;
        // 定义开关
        let flag = true;
        // 设置图片默认显示第一张
        imgs.forEach(val => {
            val.style.left = widths + "px";
        });
        imgs[0].style.left = 0;
        // 设置轮播点默认显示第一个
        // 自动轮播
    
        // 点击轮播点，会出现对应的图片
        // dots.forEach((val, index) => {
        //     val.onclick = () => {
        //         dots.forEach((val, index) => {
        //             imgs[index].style.left = widths + "px";
        //             // val.classList.remove(active);
        //         });
        //         imgs[index].style.left = 0;
        //         // val.classList.add(active);
        //         now = next = index;
        //     };
        // });
        banner.onmouseenter=function(){
            lbtn.style.display="block";
            rbtn.style.display="block";
        }
        banner.onmouseleave=function(){
            lbtn.style.display="none";
            rbtn.style.display="none";
        }
        // 点击左箭头，出现上一张
        lbtn.onclick = () => {
            if (!flag) {
                return;
            }
            flag = false;
            next = next === 0 ? imgs.length - 1 : --next;
            imgs[now].style.left = 0;
            imgs[next].style.left = -widths + "px";
            animate(imgs[now], {left: widths});
            animate(imgs[next], {left: 0}, () => {
                // dots.forEach(val => {
                //     val.classList.remove(active);
                // });
                // dots[next].classList.add(active);
                flag = true;
            });
            now = next;
        };
        // 点击右箭头，出现下一张
        rbtn.onclick = () => {
            if (!flag) {
                return;
            }
            flag = false;
            next = next === imgs.length - 1 ? 0 : ++next;
            imgs[now].style.left = 0;
            imgs[next].style.left = widths + "px";
            animate(imgs[now], {left: -widths});
            animate(imgs[next], {left: 0}, () => {
                // dots.forEach(val => {
                //     val.classList.remove(active);
                // });
                // dots[next].classList.add(active);
                flag = true;
            });
            now = next;
        };
     
    }
    Banner_transform(".swiper-slide",".swiper-button-prev",".swiper-button-next",".swiper-container")
    Banner_transform(".swiper-slide1",".swiper-button-prev1",".swiper-button-next1",".swiper-container1")
}