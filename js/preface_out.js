window.onload = function() {
  var textElement = document.querySelector('.preface');
  var text = textElement.textContent; // 获取 div 元素的文本内容作为打字机效果的文本内容
  var speed = 100; // 设置打字机速度（每个字符之间的延迟时间，单位为毫秒）

  textElement.textContent = ''; // 将文本内容初始化为空

  var i = 0;
  function typeWriter() {
    if (i < text.length) {
      textElement.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
  
};
