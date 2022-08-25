"use strict";

$(function () {
  // 下拉式選單
  $('.dropdown').click(function (e) {
    event.preventDefault();
    $(this).toggleClass('active');
    $(this).siblings().slideToggle();
  }); // Reply 留言板呼叫

  $('.reply-btn').click(function (e) {
    event.preventDefault();
    $('.hide, .chevron').addClass('none');
    $('.reply-box').addClass('change');
  });
  $('.back-btn').click(function (e) {
    event.preventDefault();
    $('.reply-box').removeClass('change');
    $('.hide, .chevron').removeClass('none');
  });
});
//# sourceMappingURL=all.js.map
