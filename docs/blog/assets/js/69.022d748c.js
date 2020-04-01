(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{313:function(n,a,t){"use strict";t.r(a);var e=t(28),i=Object(e.a)({},(function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"_5-1-从0实现响应式导航栏"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-从0实现响应式导航栏"}},[n._v("#")]),n._v(" 5_1 从0实现响应式导航栏")]),n._v(" "),t("p",[n._v("本节将分享如何从0实现一个响应式导航栏。")]),n._v(" "),t("p",[n._v("响应式导航栏是静态网站特别常见的需求，多数网站都是基于Twitter推出的Bootstrap。所以掌握从0开发一个响应式导航栏的前端很少，本节将带大家一探究竟。")]),n._v(" "),t("h2",{attrs:{id:"什么是响应式导航栏"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是响应式导航栏"}},[n._v("#")]),n._v(" 什么是响应式导航栏")]),n._v(" "),t("p",[n._v("要想 知道什么是响应式导航栏，我们需要从两个方面去理解：")]),n._v(" "),t("ul",[t("li",[n._v("首先，是导航栏的定义：指位于页面顶部或者侧边区域的一排水平导航按钮，起着链接站点或者软件内的各个页面的作用；")]),n._v(" "),t("li",[n._v("其次，是响应式的定义：响应式确切称为响应式布局，是Ethan Marcotte在2010年5月份提出的一个概念，简而言之，就是一个网站能够兼容多个终端——而不是为每个终端做一个特定的版本，它是为解决移动互联网浏览而诞生的。")])]),n._v(" "),t("p",[n._v("结合响应式布局和导航栏的概念，我们就知道我们要实现的是一组兼容不同终端的导航按钮。")]),n._v(" "),t("h2",{attrs:{id:"布局的常识"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#布局的常识"}},[n._v("#")]),n._v(" 布局的常识")]),n._v(" "),t("p",[n._v("网页制作最重要的就是网页布局，先布局，后细节，只有在选择了合适的网站布局以后，才可以顺利的进行接下来的工作。")]),n._v(" "),t("p",[n._v("好的网页布局能够让前端开发人员更好地把握网页的整体结构，提高代码的书写效率，复用性，和后期维护。")]),n._v(" "),t("p",[n._v("常见的布局有：")]),n._v(" "),t("ul",[t("li",[n._v("静态布局：即最开始的网页设计，所有的网页尺寸都用px作为单位；")]),n._v(" "),t("li",[n._v("流式布局：使用%百分比定义宽度，页面元素宽度按照屏幕分辨率进行适配调整，元素大小会变化但整体布局不便，需要配合max-width或min-width等属性控制尺寸流动范围，如栅格系统；")]),n._v(" "),t("li",[n._v("自适应布局：分别为不同的屏幕分辨率定义布局，即创建多个静态布局，每个静态布局对应一个范围；")]),n._v(" "),t("li",[n._v("响应式布局：结合流水布局和自适应布局，搭配媒体查询技术的使用，元素位置和大小都会变，适应pc和移动端，和自适应一样，都需要检测设备，根据不同设备展示不同的样式；")]),n._v(" "),t("li",[n._v("弹性布局：包裹文字各元素的尺寸采用em/rem(为顺应不同网页字体大小展现而产生的，em相对其父元素，rem始终相对页面根元素)做单位，而页面主要划分区域的尺寸仍使用百分数或px，浏览器默认字体16px，所以1 em = 16px，为了计算方便通常将页面根元素设置为62.5%，1 rem = 10px。")])]),n._v(" "),t("p",[n._v("布局选择建议：")]),n._v(" "),t("ul",[t("li",[n._v("如果只做PC端，静态布局是最好的选择；")]),n._v(" "),t("li",[n._v("如果只做移动端，且高度和元素间距不高，弹性布局是最好的选择；")]),n._v(" "),t("li",[n._v("如果兼容PC和移动端，响应式布局是最好的选择。")])]),n._v(" "),t("p",[n._v("显然，我们要做的响应式导航栏就是要兼容多端，所以需要采用响应式布局。")]),n._v(" "),t("h2",{attrs:{id:"如何实现响应式导航栏"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何实现响应式导航栏"}},[n._v("#")]),n._v(" 如何实现响应式导航栏")]),n._v(" "),t("ul",[t("li",[n._v("设置 Meta 标签：大多数移动浏览器将HTML页面放大为宽的视图（viewport）以符合屏幕分辨率。你可以使用视图的meta标签来进行重置。下面的视图标签告诉浏览器，使用设备的宽度作为视图宽度并禁止初始的缩放。在"),t("code",[n._v("<head>")]),n._v("标签里加入这个meta标签。")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">\n')])])]),t("p",[n._v("user-scalable = no 属性能够解决 iPad 切换横屏之后触摸才能回到具体尺寸的问题。")]),n._v(" "),t("ul",[t("li",[n._v("首先，设定页面的大体布局，在index.html文件中加入如下内容：")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('    <header>\n        <nav>\n            <div class="navbar-header">\n              <a href="#" class="navbar-logo">Logo</a>\n              <button class="navbar-toggle" type="button">\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n              </button>\n            </div>\n            <div class="collapse navbar-collapse">\n              <ul class="nav navbar-nav" id="navList">\n                <li><a href="#" class="active">首页</a></li>\n                <li><a href="#">产品服务</a></li>\n                <li><a href="#">联系我们</a></li>\n                <li><a href="#">关于我们</a></li>\n               </ul>\n            </div>\n          </nav>\n    </header>\n    <section class="content-wrap">\n      \x3c!-- 网站内容 --\x3e\n      <img src="skills.jpg" alt="前端技能图">\n    </section>\n    <footer class="foot-wrap">\n        <p>©2018 慕课网学习 </p>\n        <p>京ICP备180043275号-2</p>\n    </footer>\n')])])]),t("p",[n._v("其中，header标签包含的是导航栏的部分，section标签包含的是前端技能图的部分，footer标签包含的是页脚部分。")]),n._v(" "),t("p",[n._v("然后在index.css中，添加如下的css样式：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("* {\n  box-sizing: border-box;\n}\nbody {\n  margin: 0;\n}\nbutton:focus {\n  outline: none;\n}\na {\n  text-decoration: none;\n  color: white;\n}\n\nul {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\nnav {\n  height: 60px;\n  padding: 20px;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  align-items: center;\n  background-color:#171717;\n}\n.navbar-header {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  align-items: center;\n}     \n.navbar-toggle {\n  height: 37px;\n  width: 30%;\n  text-align: center;\n  display: none;\n  border: none;\n  background-color: #171717;\n}\n.navbar-toggle span {\n  display: block;\n  width: 30px;\n  margin: 3px 0;\n  border-bottom: 2px solid #fff;\n}\n.navbar-logo {\n  display: block;\n}\n.navbar-nav li {\n  display: inline-block;\n  padding: 0.5em;\n}\n\n.navbar-nav li  a{\n  border-radius:3px;\n  padding:4px 8px;\n}\n\n.navbar-nav li a:hover{\n  color:#171717;\n  background-color:#fff;\n  box-shadow:1px 1px 1px 0 #fff\n}\n\n.active {\n  color:#171717;\n  background-color:#fff;\n  box-shadow:1px 1px 1px 0 #fff\n}\n.content-wrap {\n  height: calc(100% - 196px);\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.content-wrap img{\n  height: 100%;\n  width: auto;\n}\n\n.foot-wrap {\n  width: 100%;\n  height: 120px;\n  line-height: 50px;\n  text-align: center;\n  background-color: #695f5f;\n}\n\n@media(max-width: 768px) {\n  nav {\n    display: block;\n    padding: 0px;\n  }\n  .navbar-header {\n    padding: 10px 0px 10px 10px;\n  }     \n  .navbar-toggle {\n    display: flex;\n    flex-flow: column;\n    justify-content: center;\n    align-items: center;\n    width: 30%;\n    text-align: center;\n  }\n  .collapse {\n    display: none;\n  } \n  .navbar-collapse {\n    height: 100%;\n    width:30%;\n    right: 0;\n    position:fixed;\n    background-color:#171717;\n  }\n  .navbar-collapse li {\n    width: 100%;\n    border-bottom: 1px solid #fff;;\n    text-align: center;\n  }\n}\n")])])]),t("p",[n._v("最后，在在index.html文件中的body标签的底部添加js控制的相关代码：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v(" <script>\n      var toggleButton = document.querySelector('.navbar-toggle');\n      var collapsedElm = document.querySelector('.navbar-collapse');\n      toggleButton.addEventListener('click', function() {\n        collapsedElm.classList.toggle('collapse');\n      });\n    var navList = document.getElementById('navList');\n    var oList=navList.getElementsByTagName(\"a\");\n    for(var i=0;i<oList.length;i++){\n        oList[i].onclick=function(){\n            for(var j=0;j<oList.length;j++){\n              oList[j].className=\"\";\n            }\n            this.className+=\"active\";\n        }\n    }\n <\/script>\n")])])]),t("h2",{attrs:{id:"最终效果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最终效果"}},[n._v("#")]),n._v(" 最终效果")]),n._v(" "),t("ul",[t("li",[t("p",[n._v("pc 端效果：\n"),t("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/11988064-c452d0716bacfce0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"Screen Shot 2019-01-06 at 1.47.02 PM.png"}})])]),n._v(" "),t("li",[t("p",[n._v("h5移动端效果：\n"),t("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/11988064-f729a83e72cb656b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"Screen Shot 2019-01-06 at 1.47.28 PM.png"}}),n._v("\n点击折叠导航栏后：\n"),t("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/11988064-f021cb2be8575d9f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"Screen Shot 2019-01-06 at 1.48.53 PM.png"}})])])])])}),[],!1,null,null,null);a.default=i.exports}}]);