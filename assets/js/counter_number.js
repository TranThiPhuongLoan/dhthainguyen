let valueDisplays = document.querySelectorAll(".num"); //Lấy gtri các ptu nhúng vào nodeList
let interval = 300; // biến tính bằng mili giây
valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue); //duration tính toán thời gian giữa mỗi bước tăng giá trị
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});