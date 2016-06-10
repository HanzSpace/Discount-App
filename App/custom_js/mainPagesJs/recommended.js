mui.init({
	//加载下拉刷新组件
	pullRefresh: {
		container: '#pullrefresh',
		down: {
			callback: pulldownRefresh
		}
	}
});
/**
 * 下拉刷新具体业务实现
 */
// 获取系统状态栏高度
var systemBarHeight = plus.navigator.getStatusbarHeight() * -1 + 'px';

var subpage_style = {
	top: systemBarHeight,
	bottom: '51px'
};

function pulldownRefresh() {
	var temp = plus.webview.create('recommended.html', 'pageFolder/mainPages/recommended.html', subpage_style);
	plus.webview.getLaunchWebview().append(temp);
	var timer = setInterval(function() {
		if (temp) {
			clearInterval(timer);
		}
	}, 500);
	setTimeout(function() {
		mui('#pullrefresh').pullRefresh().endPulldownToRefresh();
		temp.show();
		plus.webview.currentWebview().close();
	}, 1000);
}
var screenHeight;
var recommendedSliderHeight;
mui.plusReady(function() {
	screenHeight = plus.screen.resolutionHeight;
});
mui.ready(function() {
	//获得newsBar轮播插件对象
	var newsBar = mui('#newsBar');
	newsBar.slider({
		interval: 3000 //自动轮播周期为3000ms
	});
	document.getElementsByClassName('mui-slider')[2].setAttribute('hidden', 'hidden');
	document.getElementsByClassName('mui-slider')[4].setAttribute('hidden', 'hidden');
	//根据按钮开关状态来更换标题文字和显示内容
	var switchBtn = document.getElementsByClassName('mui-switch');
	for (var i = 0; i < switchBtn.length; i++) {
		switchBtn[i].addEventListener('tap', function() {
			var isActive = this.classList.contains("mui-active");
			if (isActive) {
				this.previousElementSibling.children[0].innerHTML = '品牌';
				this.parentElement.nextElementSibling.children[0].setAttribute('hidden', 'hidden');
				this.parentElement.nextElementSibling.children[1].removeAttribute('hidden');
				this.parentElement.nextElementSibling.children[1].slider().gotoItem(0);
			} else {
				this.previousElementSibling.children[0].innerHTML = '商场';
				this.parentElement.nextElementSibling.children[1].setAttribute('hidden', 'hidden');
				this.parentElement.nextElementSibling.children[0].removeAttribute('hidden');
				this.parentElement.nextElementSibling.children[0].slider().gotoItem(0);
			}
		});
	}
});
window.onload = function() {
	//获取hotBar
	var hotBar = document.getElementsByClassName('hotBar');
	//计算hotBar合适高度
	var hotBarHeight = (screen.height - document.getElementById('newsBar').offsetHeight - document.getElementsByClassName('mui-bar')[0].offsetHeight * 2 - 45 - 6) / 2 + 'px';
	//设置hotBar高度
	for (var i = 0; i < hotBar.length; i++) {
		hotBar[i].style.height = hotBarHeight;
	}
};