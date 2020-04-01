(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{281:function(n,t,e){"use strict";e.r(t);var a=e(28),l=Object(a.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"为自己出套面试题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为自己出套面试题"}},[n._v("#")]),n._v(" 为自己出套面试题")]),n._v(" "),e("h2",{attrs:{id:"函数防抖-debounce-和节流-throttle"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#函数防抖-debounce-和节流-throttle"}},[n._v("#")]),n._v(" 函数防抖(debounce)和节流(throttle)")]),n._v(" "),e("p",[n._v("函数节流和去抖的出现场景，一般都伴随着客户端 DOM 的事件监听。")]),n._v(" "),e("p",[n._v("节流 (throttle) 让一个函数不要执行的太频繁，减少执行过快的调用，叫节流。应用场景mousemove，mousedown/keydown，频繁点击，监听滚动事件等。")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("function throttle(func, wait) {\n    let timeout, lastTime = null;\n    return function() {\n        let context = this, now = new Date();\n        if (now - lastTime > wait) {\n            // 上次执行的时间和这次触发的时间大于一个执行周期，则执行\n            if (timeout) {\n                clearTimeout(timeout);\n                timeout = null;\n            }\n            func.apply(context, arguments);\n            lastTime = now;\n        } else {\n          if (!timeout) {\n            // 避免最后一次触发或者间隔很短而无法执行\n            timeout = setTimeout(() => {\n              func.apply(context, arguments);\n            }, wait);\n          }\n        }\n\n    };\n}\n\nfunction debounce(func, wait) {\n    let timeout，lastTime = null;\n    return function() {\n        let context = this;\n        let now = new Date();\n        // 判定不是一次抖动\n        if (now - lastTime > wait) {\n            setTimeout(() => {\n                func.apply(context, arguments);\n            }, wait);\n        } else {\n            if (timeout) {\n                clearTimeout(timeout);\n                timeout = null;\n            }\n            timeout = setTimeout(() => {\n                func.apply(context, arguments);\n            }, wait);\n        }\n        // 注意这里lastTime是上次的触发时间\n        lastTime = now;\n    }\n}\n")])])]),e("p",[n._v("去抖 (debounce) 就是对于一定时间段的连续的函数调用，只让其执行一次。应用场景，每次 resize/scroll 触发统计事件，文本输入的验证或发送请求等。\n作为一个前端老司机，近两年更多的是出笔试题 考别人，突然想给 自己出一套 笔试题 坑自己，同时 也以此 分享给 需要的人。")]),n._v(" "),e("h2",{attrs:{id:"html-部分"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#html-部分"}},[n._v("#")]),n._v(" HTML 部分")]),n._v(" "),e("ul",[e("li",[n._v('1 使用一个div模拟textarea的实现？\ndiv元素上加个contenteditable="true"属性。这是H5新增的内容可编辑属性，允许用户编辑元素内容包含的任意文本，包括子元素。应用了此属性后，普通的div标签也会像文本域一样可以获得焦点，同时有一个光标在那里。')]),n._v(" "),e("li",[n._v("2 请谈谈 vue 中使用的 template 元素？\n"),e("ul",[e("li",[n._v("template 元素 是一种用于保存客户端内容的机制，该内容在页面加载时不-被渲染，但可以在运行时使用JavaScript进行实例化。")]),n._v(" "),e("li",[n._v("在html中如果有很多重复的结构，就可以把重复部分写在这个标签内部供整个文档调用。2013年定稿的template标签为我们提供一种更统一、功能更强大的模板文本存放方式。")])])])]),n._v(" "),e("h2",{attrs:{id:"css-部分"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css-部分"}},[n._v("#")]),n._v(" CSS 部分")]),n._v(" "),e("ul",[e("li",[n._v("3 如何做好一个元素的居中？\n"),e("ul",[e("li",[n._v("方法一")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("div .box {\n  width:300px;\n  height:600px;\n  position:absolute; // 把元素变成定位元素\n  // 设置元素的定位位置，距离上、左都为50%\n  left:50%; \n  top:50%;\n  // 设置元素的左外边距、上外边距为宽高的负1/2\n  margin-left:-150px;\n  margin-top:-300px;\n}\n* 兼容性好; 但必须知道元素的宽高\n")])])]),e("ul",[e("li",[n._v("方法\b二")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("div .box {\n  position:absolute; // 把元素变成定位元素\n  // 设置元素的定位位置，距离上、下、左、右都为0\n  left:0;\n  right:0;\n  top:0;\n  bottom:0;\n  // 设置元素的margin样式值为 auto\n  margin:auto;\n}\n* 兼容性较好，但不支持IE7以下的浏览器\n")])])]),e("ul",[e("li",[n._v("方法三")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("div .box {\n  position:absolute; // 把元素变成定位元素\n  // 设置元素的定位位置，距离上、左都为50%\n  left:50%; \n  top:50%;\n  // 设置元素的相对于自身的偏移度为负50%\n  transform:translate(-50%,-50%);\n}\n* transform是css3里的样式;兼容性不好，只支持IE9+的浏览器\n")])])]),e("ul",[e("li",[n._v("方法四")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("div .box {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n* flex布局是css3里才有的;兼容性不好，只支持IE9+的浏览器\n")])])])]),n._v(" "),e("li",[n._v("4 请列举几种隐藏元素的方法?\n"),e("ul",[e("li",[n._v("visibility: hidden; 这个属性只是简单的隐藏某个元素，但是元素占用的空间任然存在")]),n._v(" "),e("li",[n._v("opacity: 0; CSS3属性，设置0可以使一个元素完全透明")]),n._v(" "),e("li",[n._v("position: absolute; 设置一个很大的 left 负值定位，使元素定位在可见区域之外")]),n._v(" "),e("li",[n._v("display: none; 元素会变得不可见，并且不会再占用文档的空间。")]),n._v(" "),e("li",[n._v("transform: scale(0); 将一个元素设置为缩放无限小，元素将不可见，元素原来所在的位置将被保留；")]),n._v(" "),e("li",[n._v('div 中 hidden="hidden" HTML5属性,效果和display:none;相同，但这个属性用于记录一个元素的状态；')]),n._v(" "),e("li",[n._v("height: 0; 将元素高度设为 0 ，并消除边框；")]),n._v(" "),e("li",[n._v("filter: blur(0); CSS3属性，将一个元素的模糊度设置为0，从而使这个元素“消失”在页面中。")])])])]),n._v(" "),e("h2",{attrs:{id:"js-部分"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#js-部分"}},[n._v("#")]),n._v(" JS 部分")]),n._v(" "),e("ul",[e("li",[e("p",[n._v("5 2 + 2 + '2' 和 '2' + 2 + 2的结果？\n'42'和'222'")])]),n._v(" "),e("li",[e("p",[n._v("6 var const let 的区别？")]),n._v(" "),e("ul",[e("li",[n._v("初始值：const 声明的变量必须设置初始值，且不能重复赋值。")]),n._v(" "),e("li",[n._v("重复定义：const 和 let 不支持重复定义")]),n._v(" "),e("li",[n._v("const，let 支持块级作用域，有效避免变量覆盖")]),n._v(" "),e("li",[n._v("变量提升：const 和 let 必须先声明再使用，不支持变量提升")])])]),n._v(" "),e("li",[e("p",[n._v("7 函数声明与函数表达式的区别？")]),n._v(" "),e("ul",[e("li",[n._v("在Javscript中，解析器在向执行环境中加载数据时，对函数声明和函数表达式并非是一视同仁的，解析器会率先读取函数声明，并使其在执行任何代码之前可用（可以访问）；")]),n._v(" "),e("li",[n._v("至于函数表达式，则必须等到解析器执行到它所在的代码行，才会真正被解析执行。")])])]),n._v(" "),e("li",[e("p",[n._v("8 如何深拷贝对象？")]),n._v(" "),e("ul",[e("li",[n._v("迭代递归法"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("// 深拷贝对象与数组\nfunction deepClone(obj) {\n    if (!isObject(obj)) {\n      throw new Error('obj 不是一个对象！')\n    }\n\n    let isArray = Array.isArray(obj)\n    let cloneObj = isArray ? [] : {}\n    for (let key in obj) {\n      cloneObj[key] = isObject(obj[key]) ? deepClone(obj[key]) : obj[key]\n    }\n\n    return cloneObj\n}\n")])])])]),n._v(" "),e("li",[n._v("序列化反序列化法")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("  // 序列化反序列化法\n  function deepClone(obj) {\n    return JSON.parse(JSON.stringify(obj))\n  }\n")])])])]),n._v(" "),e("li",[e("p",[n._v("9 代码输出结果及this几种不同的使用场景？")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("var x = 1;\nvar o = {\n  x: 2,\n  getX: function() {\n    return this.x;\n  }\n}\n\nconsole.log(o.getX()); // 2\nconsole.log(o.getX.call()); // 1\nconsole.log(o.getX.call({x:10})); // 10\n")])])]),e("ul",[e("li",[n._v("在构造函数中使用（构造函数本身）")]),n._v(" "),e("li",[n._v("作为对象属性时使用（调用属性的对象）")]),n._v(" "),e("li",[n._v("作为普通函数时使用（window）")]),n._v(" "),e("li",[n._v("call，apply，bind（执行的第一个参数）")])])]),n._v(" "),e("li",[e("p",[n._v("10 模拟实现bind?")])])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('Function.prototype.bind2 = function (context) {\n    if (typeof this !== "function") {\n      throw new Error("Function.prototype.bind - what is trying to be bound is not callable");\n    }\n    var self = this;\n    var args = Array.prototype.slice.call(arguments, 1);\n    var fNOP = function () {};\n    var fbound = function () {\n        self.apply(this instanceof self ? this : context, args.concat(Array.prototype.slice.call(arguments)));\n    }\n    fNOP.prototype = this.prototype;\n    fbound.prototype = new fNOP();\n    return fbound;\n}\n// https://blog.csdn.net/daimomo000/article/details/72897035\n')])])]),e("ul",[e("li",[n._v("11 代码输出结果及原因？")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("var x = 1; \nfunction test() {\n   var x = 2;\n   return () => {\n     x += 1;\n   }\n}\n\nvar t = test();\nt();\nconsole.log(x); // 1 闭包形成局部变量\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("var x = 1;\nif(!(y in window)) {\n  var y = 2;\n  x += 1;\n} else {\n  x += 2;\n}\nconsole.log(x); // 3\nconsole.log(y); // undefined\n")])])]),e("ul",[e("li",[n._v("12 代码输出结果及原因？")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("function Foo() {\n  getName = function() {\n    console.log(1)\n  }\n  return this;\n}\n\nFoo.getName = function() {console.log(2)}\nFoo.prototype.getName = function() {console.log(3)}\nvar getName = function() {console.log(4)}\nfunction getName() {console.log(5)}\n\nFoo.getName(); // 2\ngetName(); // 4\nFoo().getName(); // 1\ngetName(); // 1\n\nnew Foo.getName(); // 2\nnew Foo().getName(); // 3\nnew new Foo().getName(); // 3\n")])])]),e("ul",[e("li",[n._v("13 代码输出结果及原因？"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("for (var i = 0; i < 5; i++) {\nsetTimeout(function() {\n  console.log(i);\n}, 1000);\n}\n\nconsole.log(i);\n")])])]),e("ul",[e("li",[n._v("只要你对 JS 中同步和异步代码的区别、变量作用域、闭包等概念有正确的理解，就知道正确答案是5,5,5,5,5,5；")]),n._v(" "),e("li",[n._v("若用->表示其前后的两次输出之间有 1 秒，而逗号表示间隔可以忽略，结果是？ 循环执行过程中，几乎同时设置了 5 个定时器，一般情况下，这些定时器都会在 1 秒之后触发，而循环完的输出是立即执行的, 所以结果是 5 -> 5,5,5,5,5；")]),n._v(" "),e("li",[n._v("如果期望代码的输出变成：5 -> 0,1,2,3,4，该怎么改造代码？ 巧妙的利用 IIFE（声明即执行的函数表达式）来解决闭包造成的问题, 相当于把i赋值\b给了j这个局部变量:"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("for (var i = 0; i < 5; i++) {\n(function(j) { \n  setTimeout(function() {\n  console.log(j);\n  }, 1000);\n})(i);\n}\nconsole.log(i);\n")])])])]),n._v(" "),e("li",[n._v("有没有更符合直觉的做法？ 利用 JS 中基本类型的参数传递是按值传递的特征, 对循环体稍做手脚，让负责输出的那段代码能拿到每次循环的 i 值即可:"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("var print = function (i) {\nsetTimeout(function() {\n  console.log(i);\n}, 1000);\n};\nfor (var i = 0; i < 5; i++) {\n  print(i); // 传递到 print 的 i\b 值被复制了\n}\nconsole.log(i);\n")])])])]),n._v(" "),e("li",[n._v("如果期望代码的输出变成 0 -> 1 -> 2 -> 3 -> 4 -> 5，并且要求原有的代码块中的循环和两处 console.log 不变，该怎么改造代码？"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("for (var i = 0; i < 5; i++) {\n  (function(j) {\n    setTimeout(function() {\n    console.log(j);\n    }, 1000 * j)); // 这里修改 0~4 的定时器时间\n  })(i);\n}\n\nsetTimeout(function() { // 这里增加定时器，超时设置为 5 秒\n  console.log(i);\n}, 1000 * i);\n")])])])]),n._v(" "),e("li",[n._v("有没有基于ES6 Promise 的解决方案 ?"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("const tasks = [];\nfor (var i = 0; i < 5; i++) { \n  ((j) => {\n    tasks.push(new Promise((resolve) => {\n    setTimeout(() => {\n      console.log(j);\n      resolve(); // 一定要 resolve\n    }, 1000 * j); \n    }));\n  })(i);\n}\n\nPromise.all(tasks).then(() => {\n  setTimeout(() => {\n    console.log( i);\n  }, 1000); // 只需把超时设置为 1 秒\n});\n")])])])]),n._v(" "),e("li",[n._v("把上面 i 的声明改成 let，怎么做？"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("const tasks = [];\nfor (let i = 0; i < 5; i++) { \n  tasks.push(new Promise((resolve) => {\n    setTimeout(() => {\n      console.log(j);\n      resolve(); // 一定要 resolve\n    }, 1000 * j); \n  }));\n}\n\nPromise.all(tasks).then(() => {\n  setTimeout(() => {\n    console.log( i);\n  }, 1000); // 只需把超时设置为 1 秒\n});\n")])])])]),n._v(" "),e("li",[n._v("有没有代码层次更好的做法？"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("const tasks = []; // 存放异步操作的 Promise\nconst print = (i) => new Promise((resolve) => {\n  setTimeout(() => {\n    console.log(i);\n    resolve();\n  }, 1000 * i);\n});\n\n// 获得全部的异步操作\nfor (var i = 0; i < 5; i++) {\n  tasks.push(print(i));\n}\n\n// 输出最后的 i\nPromise.all(tasks).then(() => {\n  setTimeout(() => {\n    console.log(i);\n  }, 1000);\n});\n")])])])]),n._v(" "),e("li",[n._v("如何使用 ES7 中的 async await 特性来让这段代码变的更简洁？"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("  const sleep = (t) => new Promise((resolve) => {\n    setTimeout(resolve, t);\n  });\n  \n  (async () => { \n    for (var i = 0; i < 5; i++) {\n      await sleep(1000);\n      console.log(i);\n    }\n    await sleep(1000);\n    console.log(i);\n  })();\n")])])])]),n._v(" "),e("li",[n._v("还能优化吗？"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("  const sleep = (t) => new Promise((resolve) => {\n    setTimeout(resolve, t);\n  });\n  \n  const print = async () => { \n    for (let i = 0; i <= 5; i++) {\n      await sleep(1000);\n      console.log(i);\n    }\n  };\n\n  print();\n")])])])])])])]),n._v(" "),e("h2",{attrs:{id:"浏览器-部分"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器-部分"}},[n._v("#")]),n._v(" 浏览器 部分")]),n._v(" "),e("ul",[e("li",[e("p",[n._v("14 移动端 点击事件 300ms延迟如何去掉，原因是什么？\n双击缩放是 300 毫秒延迟的主要原因：在移动端触发时间会按照 touchstart，touchmove，touchend，click 顺序触发；触发touchend，click之间会有200-400不等的时间延时（因为移动端需要判断用户是不是想要进行双击）；")]),n._v(" "),e("ul",[e("li",[n._v("fastclick 和 zepto 的tap 事件 都可以解决 300 ms延时；原理：是在检测到touchend事件的时候，会通过DOM自定义事件立即出发模拟一个click事件，并把浏览器在300ms之后的click事件阻止掉。")]),n._v(" "),e("li",[n._v("tap 原理：在touchstart 时会记录一个值x1，y1，在touchend时会记录x2，y2，通过对比着几个值，判断用户是否是点击事件，而不是滑动事件，然后直接触发事件；\nhttps://www.cnblogs.com/chaojidan/p/4517895.html")])])]),n._v(" "),e("li",[e("p",[n._v("15 浏览器渲染主流程\n浏览器获取到html代码后，内核会做以下工作：")]),n._v(" "),e("ul",[e("li",[n._v("构建DOM树（Parse html）")]),n._v(" "),e("li",[n._v("构建CSSOM树（Recaculate Style）")]),n._v(" "),e("li",[n._v("合并DOM树与CSSOM树为Render树")]),n._v(" "),e("li",[n._v("布局（Layout）")]),n._v(" "),e("li",[n._v("绘制（Paint）")]),n._v(" "),e("li",[n._v("复合图层化（Composite）")])])]),n._v(" "),e("li",[e("p",[n._v("16 cookies，sessionStorage和localStorage的区别？")]),n._v(" "),e("ul",[e("li",[n._v("共同点：都是保存在浏览器端，且是同源的。")]),n._v(" "),e("li",[n._v("区别：\n"),e("ul",[e("li",[n._v("cookies是为了标识用户身份而存储在用户本地终端上的数据，始终在同源http请求中携带，即cookies在浏览器和服务器间来回传递，而sessionstorage和localstorage不会自动把数据发给服务器，仅在本地保存。")]),n._v(" "),e("li",[n._v("存储大小的限制不同。cookie保存的数据很小，不能超过4k，而sessionstorage和localstorage保存的数据大，可达到5M。")]),n._v(" "),e("li",[n._v("数据的有效期不同。cookie在设置的cookie过期时间之前一直有效，即使窗口或者浏览器关闭。sessionstorage仅在浏览器窗口关闭之前有效。localstorage始终有效，窗口和浏览器关闭也一直保存，用作长久数据保存。")]),n._v(" "),e("li",[n._v("作用域不同。cookie在所有的同源窗口都是共享；sessionstorage不在不同的浏览器共享，即使同一页面；localstorage在所有同源窗口都是共享。")])])])])])]),n._v(" "),e("h2",{attrs:{id:"主流框架使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主流框架使用"}},[n._v("#")]),n._v(" 主流框架使用")]),n._v(" "),e("ul",[e("li",[n._v("17 react 组件间是如何通信的？vue呢？\n"),e("ul",[e("li",[n._v("父组件向子组件通信：使用 props")]),n._v(" "),e("li",[n._v("子组件向父组件通信：使用 props 回调")]),n._v(" "),e("li",[n._v("跨级组件间通信：使用 context 对象")]),n._v(" "),e("li",[n._v("非嵌套组件间通信：使用事件订阅")])])])]),n._v(" "),e("p",[n._v("vue父子组件间传值: 父组件通过标签上面定义传值, 子组件通过props方法接受数据;子组件通过$emit方法传递参数向父组件传递数据。")]),n._v(" "),e("ul",[e("li",[n._v("18 react 生命周期？ vue呢\n"),e("ul",[e("li",[n._v("首次实例化时：\n"),e("ul",[e("li",[n._v("客户端"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("  1、getDefaultProps\n  2、getInitialState\n  3、componentWillMount\n  4、render\n  5、componentDidMount\n")])])])]),n._v(" "),e("li",[n._v("服务端渲染："),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("  1、getDefaultProps\n  2、getInitialState\n  3、componentWillMount\n  4、render\n  //componentDidMount 不会在服务端被渲染的过程中调用。\n")])])])])])]),n._v(" "),e("li",[n._v("交互时："),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("1、componentWillReceiveProps\n2、shouldComponentUpdate\n3、componentWillUpdate\n4、render\n5、componentDidUpdate\n")])])])])])])]),n._v(" "),e("p",[n._v("Vue生命周期钩子函数：")]),n._v(" "),e("ul",[e("li",[n._v("vue 实例从创建到销毁的过程，就是生命周期；")]),n._v(" "),e("li",[n._v("创建前/后： 在beforeCreate阶段，vue实例的挂载元素el和数据对象data都为undefined，还未初始化。在created阶段，vue实例的数据对象data有了，el还没有；")]),n._v(" "),e("li",[n._v("载入前/后：在beforeMount阶段，vue实例的$el和data都初始化了，但还是挂载之前为虚拟的dom节点，data.message还未替换。在mounted阶段，vue实例挂载完成，data.message成功渲染；")]),n._v(" "),e("li",[n._v("更新前/后：当data变化时，会触发beforeUpdate和updated方法；")]),n._v(" "),e("li",[n._v("销毁前/后：在执行destroy方法后，对data的改变不会再触发周期函数，说明此时vue实例已经解除了事件监听以及和dom的绑定，但是dom结构依然存在；")]),n._v(" "),e("li",[n._v("vue生命周期中的事件钩子，让我们在控制整个Vue实例的过程时更容易形成好的逻辑。")])]),n._v(" "),e("h2",{attrs:{id:"算法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#算法"}},[n._v("#")]),n._v(" 算法")]),n._v(" "),e("ul",[e("li",[n._v("19 去掉一组整型数组中重复的值")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("let unique =  function(arr){\n  let hash={};\n  let data=[];\n  for (let i=0;i < arr.length; i++){\n    if (!hash[arr[i]])  {\n      hash[arr[i]] = true;\n      data.push(arr[i]);\n    }      \n  }\n  return data\n}\n")])])]),e("ul",[e("li",[n._v("20 合并两个有序链表")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("function ListNode(val) {\n   this.val = val;\n   this.next = null;\n}\n// 方法1\nvar mergeTwoLists = function(l1, l2) {\n    var head=new ListNode(0);\n    var curr=head;\n    var p=l1,q=l2;\n    while(p!=null&&q!=null){\n    \tif(p.val<q.val){\n    \t\tcurr.next=new ListNode(p.val)\n    \t\tcurr=curr.next;\n    \t\tp=p.next;\n    \t} else if (p.val==q.val){\n    \t\tcurr.next=new ListNode(p.val);\n    \t\tcurr=curr.next;\n    \t\tcurr.next=new ListNode(p.val);\n    \t\tcurr=curr.next\n    \t\tp=p.next;\n    \t\tq=q.next;\n    \t} else {\n    \t\tcurr.next=new ListNode(q.val);\n    \t\tcurr=curr.next;\n    \t\tq=q.next;\n    \t}\n    }\n    if(p!==null) {\n    \tcurr.next=p;\n    }\n    if(q!==null) {\n    \tcurr.next=q;\n    }\n    return head.next; \n};\n\n// 方法2 将l2合并到l1\n// 外层循环控制遍历第二条链表，内层循环负责插入新节点，所以是O(m*n)的算法。\nvar mergeTwoLists = function(l1, l2) {\n    while(l2){\n        var prev = null;\n        var cur = l1;\n        while(cur && l2.val > cur.val){\n            prev = cur;\n            cur = cur.next;\n        }\n        var newNode = new ListNode(l2.val);\n        newNode.next = cur;\n        if(prev){\n            prev.next = newNode;\n        }else{\n            l1 = newNode;\n        }\n        l2 = l2.next;\n    }\n    return l1;\n};\n")])])])])}),[],!1,null,null,null);t.default=l.exports}}]);