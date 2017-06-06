### 放大镜效果
    1、offsetLeft、offsetTop、offsetWidth、offsetHeight各自获取的值
        1.1 offsetLeft：该元素左border的左边缘到该元素的offsetParent的左border内边缘的水平距离
        1.2 offsetTop：该元素的上border的上边缘到该元素的offsetParent的上border内边缘的垂直距离
        1.3 offsetWidth =  border-left-width + padding-left + width + padding-right + border-right-width
        1.4 offsetHeight =  border-top-width + padding-top + height + padding-bottom + border-bottom-width;  
<img src="https://github.com/LY0528/jQuery-to-achieve-magnifying-glass/raw/master/images/3.png" width="500" height="400">

    2、jQuery中.width() .innerWidth() .outerWidth()各自获取的值
        2.1 .width(): 获取匹配元素的内容宽度,无论box-sizing的值如何 始终返回内容的宽度
        2.2 .innerWidth() = width + padding-left + padding-right
        2.3 .outerWidth()有一个参数false/true  默认是false
            .outerWidth() = width + padding-left + padding-right + border-left-width + border-right-width 
            .outerWidth(true) = width + padding-left + padding-right + border-left-width + border-right-width +margin-left-width + margin-right-width
<img src="https://github.com/LY0528/jQuery-to-achieve-magnifying-glass/raw/master/images/4.png" width="500" height="450">