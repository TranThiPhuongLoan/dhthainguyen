// /**
//  * @name: Navbar
//  * @description: Class nav for controlling the navbar
//  */
// var Navbar = function(container) {
// 		// Bắt sự kiện khi click vào icon
// 		this.dom.dropdown.toggle.on('click', function(e) {
// 			e.preventDefault();

// 			var $parent = $(this).parent();

// 			if($parent.hasClass('open')) {
// 				$parent.removeClass('open');
// 			}
// 			else {
// 				/** Hide all dropdown-menus */
// 				that.dom.dropdown.elem.removeClass('open');

// 				$parent.addClass('open');
// 			}
// 		});
// 		/**
// 		 * Listen to click event on burger-icon
// 		 */
// 		this.dom.toggleNavbar.on('click', function(e) {
// 			e.preventDefault();

// 			that.showNavbar('navbar');
// 		});
// 		/**
// 		 * @name: showNavbar
// 		 * @param:
// 		 * @description: display the targetted element
// 		 */
// 		this.showNavbar = function() {
// 			if(that.dom.navbar.elem.hasClass('open')) {
// 				that.dom.navbar.elem.removeClass('open');
// 				that.dom.toggleNavbar.removeClass('open');
// 			}
// 			else {
// 				that.hideNavbar();
// 				that.dom.navbar.elem.addClass('open');
// 				that.dom.toggleNavbar.addClass('open');
// 			}
// 		};
// 		/**
// 		 * @name: hideNavbar
// 		 * @param: -
// 		 * @description: hide all navbars
// 		 */
// 		this.hideNavbar = function() {
// 			that.dom.navbar.all.removeClass('open');
// 			/** close burger-icon */
// 			that.dom.toggleNavbar.removeClass('open');

// 		if (window.innerWidth <= 767) {
// 			document.querySelector('.header-group .container-logo').style.display = 'none';
// 		} else {
// 			document.querySelector('.header-group .container-logoư').style.display = 'block';
// 		}
// 		};
// 	};
// ;

// var navbar = new Navbar($('#main-navbar'));
// navbar.init();

// Header

// Khai báo biến modal và gán biến để lấy phương thức
var modal = document.getElementById("myModal");

// Gán biến btn với nút mở modal
var btn = document.getElementById("myBtn");

// Gán biển span khi đóng moadal
var span = document.getElementByClassName("close-modal")[0];

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
