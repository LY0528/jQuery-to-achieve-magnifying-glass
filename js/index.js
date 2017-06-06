$(function() {
  $('#smallBox').on('mouseover', function() {
    //鼠标经过盒子 显示 mask 和 bigBox
    $('#mask').show()
    $('#bigBox').show()
  })
  $('#smallBox').on('mouseleave', function() {
    //鼠标经过盒子 显示 mask 和 bigBox
    $('#mask').hide()
    $('#bigBox').hide()
  })
  $('#smallBox').on('mousemove', function(e) {
    var maskX = e.pageX - $('#box').offset().left - $('#mask').outerWidth() / 2
    var maskY = e.pageY - $('#box').offset().top - $('#mask').outerHeight() / 2
    if (maskX < 0) {
      maskX = 0;
    }
    //向右的最大移动范围 是 smallBox的宽度-mask的宽度
    if (maskX > $('#smallBox').outerWidth() - $('#mask').outerWidth()) {
      maskX = $('#smallBox').outerWidth() - $('#mask').outerWidth()
    }
    if (maskY < 0) {
      maskY = 0;
    }
    if (maskY > $('#smallBox').outerHeight() - $('#mask').outerHeight()) {
      maskY = $('#smallBox').outerHeight() - $('#mask').outerHeight()
    }
    //按照遮罩的位置设置left和top
    $('#mask').css({ 'top': maskY + 'px', 'left': maskX + 'px' })
      // 大图移动的总距离 = 大图片的宽度 - 大盒子的宽度
    var bigToMove = $('#bigBox>img').outerWidth() - $('#bigBox').outerWidth()
      // 遮罩移动的总距离 = 小盒子的宽度 - 遮罩的宽度
    var maskToMove = $('#smallBox').outerWidth() - $('#mask').outerWidth()
    var rate = bigToMove / maskToMove;
    $('#bigBox>img').css({ 'top': -rate * maskY + 'px', 'left': -rate * maskX + 'px' })
  })
})
