mui.init();
var subpages = ["pagefolder/recommended.html",
	"pagefolder/home.html",
	"pagefolder/search.html",
	"pagefolder/user.html"
];
var activeTab = subpages[0];
var subpage_style = {
	top: '45px',
	bottom: '51px'
};
mui.plusReady(function() {
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
	mui('.mui-bar-tab').on('tap', 'a', function(e) {
		var title = document.getElementById("title");
		var targetTab = this.getAttribute('href');
		if (targetTab == activeTab) {
			return;
		}
		//更换标题
		title.innerHTML = this.querySelector('.mui-tab-label').innerHTML;
		if (subpages.indexOf(targetTab) > subpages.indexOf(activeTab)) {
			//显示目标选项卡
			plus.webview.show(targetTab, "slide-in-right", 100);
			//隐藏当前;
			plus.webview.hide(activeTab, "slide-out-left", 100);
		} else {
			//显示目标选项卡
			plus.webview.show(targetTab, "slide-in-left", 100);
			//隐藏当前;
			plus.webview.hide(activeTab, "slide-out-right", 100);
		}
		//更改当前活跃的选项卡
		activeTab = targetTab;
	});
});