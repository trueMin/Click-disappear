window.onload = function() {
	var box = document.getElementsByTagName('div');
	var lis = document.getElementsByTagName('li');
	var num = 0;
	var num2 = 0;
	var num3 = 0;
	for(var i = 0; i < lis.length; i++) {
		lis[i].style.left = num * 80 + 'px';
		num++;
	}
	box[0].onclick = function() {
		move(box[1], 'width', 1000, 480, 'linear');
		for(var i = 0; i < lis.length; i++) {
			(function(index) {
				setTimeout(function() {
					move(lis[index], 'top', 1000, -80, 'linear', null, function() {
						var newtop = 1 + css(lis[index], "top") / 80;
						lis[index].style.opacity = newtop;
					}); //元素 样式 时间 目的 回调函数 普通函数
				}, 300 * index)
			})(i)
		}
		setInterval(function() {
			move(box[1], 'width', 1000, 0, 'linear', null, function() {});
		}, 2000)
		setInterval(function() {

		}, 4000)
	}
}