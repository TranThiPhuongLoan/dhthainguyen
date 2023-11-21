// Khai báo biến modal và gán biến để lấy phương thức
var modal = document.getElementById("myModal");

// Gán biến btn với nút mở modal
var btn = document.getElementById("myBtn");

// Gán biển span khi đóng moadal
var span = document.getElementsByClassName("close")[0];

// Bắt sự kiện click btn mở modal
btn.onclick = function () {
  modal.style.display = "block";
};

// Bắt sự kiện click vào <span> (x), đóng modal
span.onclick = function () {
  modal.style.display = "none";
};

// Bắt sự kiện khi click vào 1 nơi bất kỳ trên màn hình, đóng modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
