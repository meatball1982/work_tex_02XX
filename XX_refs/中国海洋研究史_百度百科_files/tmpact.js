﻿/*
ps回流小流量实验
*/
(function(){
	function setNsLogListener(q,pid){
		baidu(q).on('mousedown',function(){
			nslog(pid);
		});
	}
	function getCookie(key){
        return baidu.cookie.get(key);
    }
    
    function setCookie(key,value){
        baidu.cookie.set(key,value,{path:"/",expires:1000*60*60*24*5,domain:".baike.baidu.com"});
    }
	var CVALUE='PSPVTEST';
	var cv=getCookie(CVALUE);
	if(cv==undefined){
		cv=Math.round(Math.random()*100);
		setCookie(CVALUE,cv);
	}

	try{
		if(cv<=5 || baikeViewInfo.id==26506){
			baidu('#search').css("width","880px");
			baidu('#search #help').append('<a id="pvrollback" href="javascript:;">去网页搜索</a>');
			baidu('#search #help #pvrollback').mousedown(function() {
				nslog(9193);
				setTimeout(function(){baidu('#search-content p a')[1].click();},80);
			});
			//新闻
			setNsLogListener('#search-content p a:eq(0)',9194);
			//网页
			setNsLogListener('#search-content p a:eq(1)',9195);
			//进入词条
			setNsLogListener('.s_btn_wr input:eq(0)',9196);
			//检索词条
			setNsLogListener('.s_btn_wr input:eq(1)',9197);
		}else{
			//新闻
			setNsLogListener('#search-content p a:eq(0)',9198);
			//网页
			setNsLogListener('#search-content p a:eq(1)',9199);
			//进入词条
			setNsLogListener('.s_btn_wr input:eq(0)',9200);
			//检索词条
			setNsLogListener('.s_btn_wr input:eq(1)',9201);
		}
	}catch(e){}
})();

/*加载日常活动标签*/
//添加到[id='header']上面
(function(){
var show = 1; //是否展示，0是不展示，1是展示，2只在首页展示，3只在词条页展示
	//信息分两组2，1组是首页，2组是词条页，如果show=1，就只按照1来展示
	var linkSrc1 = 'http://baike.baidu.com/cms/rc/200x100.png';
	//var linkSrc1 = 'http://baike.baidu.com/cms/rc/400x100.png';//图片的地址
	var linkHref1 = 'http://baike.baidu.com/cms/s/ips/index.html';//图片的链接
	var linkText1 = '中秋月圆';//鼠标滑过信息
	var isLink1 = false; //是否是连接，true的话linkHref1和linkText1必须给
	var isFlash1 = false;
	var flashSrc1 = 'http://img.baidu.com/img/baike/usercenter/celebration/2012/sleep.swf';
	var beginDate = '03/21/2012';
	
	var linkSrc2 = 'http://baike.baidu.com/cms/s/live/emei100x200.jpg';//图片的地址 
	var linkHref2 = 'http://baike.baidu.com/subview/2167/5091063.htm';//图片的链接
	var linkText2 = '24小时直播峨眉金顶';//鼠标滑过信息
	var isLink2 = true;
	var isFlash2 = true;

	var wrap = baidu.dom.query('.nav1')[0];
	var viewFlag = (document.body.id == 'view');
	//默认的设置，都是连接
	function defaultSet(src, href, text){
		//链接的话，大小是238*60
		var link = document.createElement('a');
		link.href = href;
		link.target = '_blank';
		link.hideFocus = true;
		link.innerHTML = text;
		link.onclick = function(){
			nslog(location.href, 3626);
		}
		link.title = text;
		link.style.cssText = 'position:absolute;top:-100px;right:-46px;width:200px;height:100px;outline:0;font-size:0;text-indent:-999em;background:url('+ src +') no-repeat 0 0';
		wrap.appendChild(link);
		if (baidu.browser.ie == 6) {
			link.style.position = 'relative';
			link.style.position = 'absolute';
		}
	}
	//flash页面
	/*function flashSet(src){
		var link = document.createElement('div');
		link.id = 'bk-push';
		var title = document.title;
		baidu.swf.create({
			id:'flash',
			url:src,
			width:240,
			height:60,
			wmode: 'transparent',
			allowscriptaccess: 'always'
		}, link);
		//fixZIndex();
		link.style.cssText = 'position:absolute;top:-60px;right:0;width:240px;height:60px;';
		setTimeout(function(){wrap.appendChild(link);},300);
		if(baidu.browser.ie){
			try{
				var timer = null;
				var count = 0 //记录次数，如果1分钟了还木改变，就停止
				var totalCount = 600;
				timer = setInterval(function(){
					if(count++ > totalCount){
						clearInterval(timer);
						return;
					}
					var curTitle = document.title;
					if(curTitle.indexOf('#') != -1 && curTitle != title){
						clearInterval(timer);
						document.title = title;
					}
				}, 100);	
			} catch (exp){}
		}
	}*/
	//独特的首页#_$，只需要一个图片地址。
	function singleSet(src){
		//普通的话，大小是400*100，注意阿姨6/7下的margin不折叠，所以高度要长一些
		var ca = document.createElement('div');
		//fixZIndex();
		ca.style.cssText = 'position:absolute;top:-100px;right:-46px;width:200px;height:100px;outline:0;font-size:0;text-indent:-999em;background:url('+ src +') no-repeat 0 0;';
		wrap.appendChild(ca);
		if (baidu.browser.ie == 6) {
			ca.style.position = 'relative';
			ca.style.position = 'absolute';
		}
	}
	
	function generatePage(src, href, text, isLink, isFlash){
		isLink ? defaultSet(src, href, text) : singleSet(src);
	}
	
	if(wrap){
		if(1 == show){
			generatePage(linkSrc2, linkHref2, linkText2, isLink2, isFlash2);
			return;
		}
		
		if(2 == show && !viewFlag){
			generatePage(linkSrc2, linkHref2, linkText2, isLink2, isFlash2);
			return;
		}

		if(3 == show && viewFlag){
			generatePage(linkSrc2, linkHref2, linkText2, isLink2, isFlash2);
		}
	}
})();





/*
 *词条页右侧side推广图片位
 *author ：tianzixin
 *Date   : 2012-08-16
 */
(function(){
	//第一张图片参数
	var linkSrc1 = 'http://baike.baidu.com/cms/s/banner/bowuguan400x100.jpg';//图片的地址
	var linkHref1 = 'http://baike.baidu.com/museum/museumIndex.html?id=208463';//图片的链接
	var linkText1 = '中国国家博物馆数字馆';//鼠标滑过信息
	var width1 = "0px";  //图片1宽度,例如："100px;",如果不希望图片1展示，仅需设置width1 = "0px"，引号不能少哦
	var height1 = "40px";	//图片1高度
	
	//第二张图片参数
	var linkSrc2 = 'http://baike.baidu.com/cms/s/banner/bowuguan400x100.jpg';//图片的地址 
	var linkHref2 = 'http://baike.baidu.com/museum/museumIndex.html?id=208463';//图片的链接
	var linkText2 = '中国国家博物馆数字馆';//鼠标滑过信息
	var width2 = "0px";	//图片2宽度,例如："100px;",如果不希望图片2展示，仅需设置width2 = "0px"，引号不能少哦
	var height2 = "40px";	//图片2高度


	var beginDate = '03/21/2012';
	
	var wrap = baidu.dom.g("side");
	var viewFlag = (document.body.id == 'view');
	//默认的设置，都是连接
	function defaultSet(src, href, text, width, height){
		var link = document.createElement('a');
		link.href = href;
		link.target = '_blank';
		link.hideFocus = true;
		link.innerHTML = text;
		link.onclick = function(){
			nslog(location.href, 3626);
		}
		link.title = text;
		link.style.cssText = 'display:block;width:'+width+';height:'+height+';border: 1px solid #CCC;margin:5px 0 5px 0;outline:0;font-size:0;text-indent:-999em;background:url('+ src +') no-repeat 0 0';
		
		wrap.appendChild(link);
	}

	function generatePage(src, href, text, width, height){
			 defaultSet(src, href, text, width, height);
	}
	
	if(viewFlag){
		if(width1 !== "0px"){
			generatePage(linkSrc1, linkHref1, linkText1, width1, height1);
		}
		if(width2 !== "0px"){
			generatePage(linkSrc2, linkHref2, linkText2, width2, height2);
		}
	}

})();