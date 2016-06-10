var subpages = ['pageFolder/mainPages/recommended.html',
	'pageFolder/mainPages/home.html',
	'pageFolder/mainPages/search.html',
	'pageFolder/mainPages/user.html'
];
var activeTab = subpages[0];
var subpage_style = {
	top: 0,
	bottom: '51px'
};
mui.plusReady(function() {
	// 获取系统状态栏高度
	var systemBarHeight = plus.navigator.getStatusbarHeight();
	// 设置webview顶端为屏幕顶端
	subpage_style.top = systemBarHeight * -1 + 'px';
	// 设置ios系统栏文字为白色
	if (mui.os.ios){
		// 设置系统状态栏样式为白色文字
		plus.navigator.setStatusBarStyle( 'UIStatusBarStyleBlackOpaque' );
	}
	var currentview = plus.webview.currentWebview();
	for (var i = 0; i < 4; i++) {
		var page = plus.webview.create(subpages[i], subpages[i], subpage_style);
		if (i > 0) {
			page.hide();
		} else {
			page.show();
		}
		currentview.append(page);
	}
});
mui.ready(function() {
	mui('.mui-bar-tab').on('tap', 'a', function() {
		var targetTab = this.getAttribute('href');
		if (targetTab == activeTab) {
			return;
		}
		if (subpages.indexOf(targetTab) > subpages.indexOf(activeTab)) {
			//显示目标选项卡
			plus.webview.show(targetTab, 'slide-in-right', 100);
			//隐藏当前;
			plus.webview.hide(activeTab, 'slide-out-left', 100);
		} else {
			//显示目标选项卡
			plus.webview.show(targetTab, 'slide-in-left', 100);
			//隐藏当前;
			plus.webview.hide(activeTab, 'slide-out-right', 100);
		}
		//更改当前活跃的选项卡
		activeTab = targetTab;
	});
});