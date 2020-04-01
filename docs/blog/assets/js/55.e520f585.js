(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{299:function(e,a,s){"use strict";s.r(a);var t=s(28),n=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"基于webpack从0配置vue开发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于webpack从0配置vue开发"}},[e._v("#")]),e._v(" 基于webpack从0配置vue开发")]),e._v(" "),s("p",[e._v("vue 官方为了让开发者快速进行开发，为了很大的精力，提供了vue-cli脚手架，只需简单几步，就能开始vue的开发了。")]),e._v(" "),s("p",[e._v("然而，对项目里的webpack封装和配置了解的不清楚，就容易导致出问题不知如何解决，甚至不会通过webpack去扩展新功能，对webpack+vue项目究竟是怎样搭建起来的感到一脸懵逼。")]),e._v(" "),s("p",[e._v("本文就是要解决这个问题。")]),e._v(" "),s("h2",{attrs:{id:"初始化项目："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初始化项目："}},[e._v("#")]),e._v(" 初始化项目：")]),e._v(" "),s("p",[e._v("打开terminal，通过以下命令生成项目目录：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("mkdir vue_webpack_demo\n")])])]),s("p",[e._v("进入项目目录，并生成 package.json 文件（主要是项目的基本信息）：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("mkdir vue_webpack_demo && npm init\n")])])]),s("h2",{attrs:{id:"安装webpack及脚手架"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装webpack及脚手架"}},[e._v("#")]),e._v(" 安装webpack及脚手架")]),e._v(" "),s("p",[e._v("在安装好了node开发环境后，通过以下命令安装：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npm i -D webpack webpack-cli\n")])])]),s("p",[e._v("此时webpack和webpack-cli会被安装到项目目录的node_modules目录下，同时webpack和webpack-cli会被添加到package.json 文件中的devDependencies(因为只是辅助开发，所以在此)对象中。")]),e._v(" "),s("p",[e._v("因为写当前博客的时间是2019年12月，所以安装的webpack是webpack4的最新稳定版本，很多配置都有默认的了。")]),e._v(" "),s("h2",{attrs:{id:"配置es6-转码为es5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置es6-转码为es5"}},[e._v("#")]),e._v(" 配置ES6+转码为ES5:")]),e._v(" "),s("p",[e._v("babel-loader可以将ES6代码转为ES5代码，从而可以在现有环境执行，所以我们可以用ES6编写，而不用考虑环境支持的问题。")]),e._v(" "),s("p",[e._v("例如IE9根本看不懂代码写的let和const是什么东西？只能选择报错，这就是浏览器对ES6的兼容性问题；我们可以通过 babel-polyfill 对一些不支持新语法、兼容性差的客户端提供新语法的实现。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npm i -D babel-loader @babel/core @babel/preset-env\n")])])]),s("p",[e._v("然后，在项目根目录下新建一个src文件夹，然后再建一个 index.js 文件，")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("mkdir src && cd src && vi index.js\n")])])]),s("p",[e._v("在 index.js中，写上2句代码：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("const str = 'word';\nconsole.log('hello ', str);\n")])])]),s("p",[e._v("因为写当前博客的时间是2019年12月，所以安装的webpack是webpack4的最新稳定版本，很多配置都有默认的了。所以在项目根目录下执行以下命令：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("webpack\n")])])]),s("p",[e._v("就会把src的默认入口文件 index.js 打包到dist目录下。")]),e._v(" "),s("h2",{attrs:{id:"创建webpack-config-js文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建webpack-config-js文件"}},[e._v("#")]),e._v(" 创建webpack.config.js文件")]),e._v(" "),s("p",[e._v("在项目根目录下增加webpack.config.js文件：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("vi webpack.config.js\n")])])]),s("p",[e._v("然后写入以下配置：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("module.exports = {\n  mode: 'development', // 打包模式\n  entry : './src/index.js', // 入口文件\n  output : {\n      filename : 'index.js', // 输出文件名\n      path :  __dirname+'/dist' // 输出文件的根路径\n  },\n  module : {\n      rules: [\n          {\n              /*将js文件转码成es5*/\n              test: /\\.js?$/,\n              use: {\n                  loader: 'babel-loader',\n                  options: {\n                    presets: ['@babel/preset-env']\n                  }\n                }\n          },\n      ]\n  },\n}\n")])])]),s("p",[e._v("然后在package.json的scripts先添加下面这个指令：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('"build": "webpack --config ./webpack.config.js",\n')])])]),s("p",[e._v("最后在terminal中运行:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npm run build\n")])])]),s("p",[e._v("可以看到根目录会生成一个 dist 文件夹，包含一个由 src/index.js 打包出来的index.js。")]),e._v(" "),s("h2",{attrs:{id:"使用-html-webpack-plugin来创建html页面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-html-webpack-plugin来创建html页面"}},[e._v("#")]),e._v(" 使用 html-webpack-plugin来创建html页面")]),e._v(" "),s("ul",[s("li",[e._v("安装html-webpack-plugin插件")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npm i -D html-webpack-plugin\n")])])]),s("ul",[s("li",[e._v("添加入口文件\n在根目录下创建 index.html 文件：")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("vi  index.html\n")])])]),s("ul",[s("li",[e._v("添加下面代码：")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n    <title>做有追求的码农</title>\n  </head>\n\n  <body>\n    <div id="app"></div>\n  </body>\n</html>\n')])])]),s("ul",[s("li",[e._v("修改webpack.config.js配置")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("const path = require('path');\nconst HtmlWebpackplugin = require('html-webpack-plugin');\n\nmodule.exports = {\n  mode: 'development', // 指定开发者打包模式\n  entry : './src/idex.js', //入口文件\n  output : {\n      filename : 'index.js',\n      path :  __dirname+'/dist'\n  },\n  module : {\n      rules: [\n          {\n            /*将js文件转码成es5*/\n            test: /\\.js?$/,\n            use: {\n              loader: 'babel-loader',\n              options: {\n                presets: ['@babel/preset-env']\n              }\n            }\n          },\n      ]\n  },\n  plugins:[\n    new HtmlWebpackplugin({\n      filename: 'index.html', // 打包后的文件名，默认index.html\n      template: path.resolve(__dirname, 'index.html') // 导入被打包的文件模板\n    })\n  ]\n}\n")])])]),s("ul",[s("li",[e._v("查看效果\n运行npm run build ，我们可以看到 dist 文件夹下有一个index.html生成了，而且还引入了src/index.js的压缩包index.js。")])]),e._v(" "),s("h2",{attrs:{id:"安装配置并使用vue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装配置并使用vue"}},[e._v("#")]),e._v(" 安装配置并使用vue")]),e._v(" "),s("ul",[s("li",[e._v("安装vue及其插件：")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npm i vue && npm i -D vue-loader vue-template-compiler\n")])])]),s("p",[e._v("其中，vue-loader 用于解析.vue文件，vue-template-compiler 用于编译模板。")]),e._v(" "),s("ul",[s("li",[e._v("修改webpack.config.js配置")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("const path = require('path');\nconst HtmlWebpackplugin = require('html-webpack-plugin');\nconst VueLoaderPlugin = require('vue-loader/lib/plugin');\n\nmodule.exports = {\n  mode: 'development', // 指定开发者打包模式\n  entry : './src/idex.js', //入口文件\n  output : {\n      filename : 'index.js',\n      path :  __dirname+'/dist'\n  },\n  module : {\n      rules: [\n          {\n            /*将js文件转码成es5*/\n            test: /\\.js?$/,\n            use: {\n              loader: 'babel-loader',\n              options: {\n                presets: ['@babel/preset-env']\n              }\n            }\n          },            \n          {\n            test: /\\.vue$/,\n            use: [\n              {\n                loader: 'vue-loader',\n                options: {\n                  compilerOptions: {\n                    preserveWhitespace: false\n                  },\n                }\n              }\n            ]\n          },\n      ]\n  },\n  plugins:[\n    new HtmlWebpackplugin({\n      filename: 'index.html', // 打包后的文件名，默认index.html\n      template: path.resolve(__dirname, 'index.html') // 导入被打包的文件模板\n    }),\n     new VueLoaderPlugin()\n  ]\n}\n")])])]),s("ul",[s("li",[e._v("使用vue\n在 src 新建一个 App.vue：")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("cd src && vi App.vue\n")])])]),s("p",[e._v("在App.vue 中添加以下代码：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<template>\n  <div class="App">\n    要做 {{msg}} 的码农\n  </div>\n</template>\n\n<script>\nexport default {\n  name: \'App\',\n\n  data() {\n    return {\n        msg: "有追求的",\n    };\n  }\n};\n<\/script>\n')])])]),s("ul",[s("li",[e._v("修改src/index.js的代码为：")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("import Vue from 'vue'\nimport App from './App.vue'\n\nnew Vue({\n  render: h => h(App)\n}).$mount('#app');\n")])])]),s("ul",[s("li",[e._v("打包及运行vue\n再次运行：")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npm run build\n")])])]),s("p",[e._v("然后在浏览器打开 dist/index.html，可以发现vue已经可以运行了。")]),e._v(" "),s("h2",{attrs:{id:"安装本地服务及代码热更新"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装本地服务及代码热更新"}},[e._v("#")]),e._v(" 安装本地服务及代码热更新")]),e._v(" "),s("ul",[s("li",[e._v("安装webpack-dev-server")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npm i -D webpack-dev-server \n")])])]),s("ul",[s("li",[e._v("修改webpack.config.js配置")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// ...\n    devServer: { \n        host: 'localhost',\n        port: 9527\n    },\n// ...\n")])])]),s("ul",[s("li",[e._v("在package.json的scripts中增加一行启动本地服务指令：")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('"start": "webpack-dev-server",\n')])])]),s("p",[e._v("默认会读取根目录下的webpack.config.js配置文件。")]),e._v(" "),s("ul",[s("li",[e._v("运行以及查看效果")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npm start\n")])])]),s("p",[e._v("用浏览器打开 http://localhost:9527/, 就可以本地开发了哦！而且当我们修改 src/App.vue 的代码后，浏览器是会自动刷新的(热更新)。")]),e._v(" "),s("p",[e._v("目前为止，一个简单的vue项目我们已经搭建出来了，之后我们可以像堆积木一样添加自己想要的功能了。")]),e._v(" "),s("p",[e._v("需要注意的是，devServer生成的文件是存在我们电脑的内存中的，不在我们的硬盘上。")]),e._v(" "),s("h2",{attrs:{id:"加一些常用的loader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加一些常用的loader"}},[e._v("#")]),e._v(" 加一些常用的loader")]),e._v(" "),s("p",[e._v("对于webpack来说，默认只能打包处理JS文件，或者说JS模块，但是webpack作为模块打包工具，需要打包的模块肯定不仅仅只有JS模块，还有：图片模块，CSS模块等等。")]),e._v(" "),s("p",[e._v("loader就是帮助webpack打包那些webpack默认打包不了的模块的工具；配置第三方loader，需要在webpack的配置文件中新增一个module节点，节点中是一个一个的规则集合，集合名字是rules，需要添加loader就在rules的集合中新增一个规则；每个规则必须的两个配置：")]),e._v(" "),s("ul",[s("li",[e._v("test  ：test搭配的是键值对，值是一个正则表达式，用来匹配要处理的文件类型；")]),e._v(" "),s("li",[e._v("use  ：用来指定使用哪个loader模块来打包处理该文件；")])]),e._v(" "),s("p",[e._v("安装一些常用的loader")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npm i -D  css-loader style-loader url-loader postcss-loader autoprefixer\n")])])]),s("p",[e._v("其中：css-loader主要是解析 css 文件，style-loader 主要是将 css 解析到html页面的style上，postcss-loader和autoprefixer实现自动添加css3前缀。")]),e._v(" "),s("p",[e._v("特别是: file-loader可以用来帮助webpack打包处理一系列的图片文件，而url-loader它除了做file-loader能做的事情，还会通过配置规则将一定范围大小的图片打包成base64的字符串，放到dist.js文件里，从而减少https的图片请求数。")]),e._v(" "),s("p",[e._v("在webpack.config.js中增加配置")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// ...\n{\n    test: /\\.css$/,\n    use: [\n        {\n            loader: 'style-loader'\n        },\n        {\n            loader: 'css-loader'\n        },\n        {\n            loader: 'postcss-loader',\n            options: {\n                plugins: [\n                    require(\"autoprefixer\") /*自动添加前缀*/\n                ]\n            }\n        }\n    ]\n},\n{\n    test: /\\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\\?.+)?$/,\n    use: [{\n      loader: 'url-loader',\n      options: {\n        limit: 10000\n      }\n    }]\n}\n")])])]),s("h2",{attrs:{id:"自定义环境变量和常量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义环境变量和常量"}},[e._v("#")]),e._v(" 自定义环境变量和常量")]),e._v(" "),s("p",[e._v("通过 webpack提供的DefinePlugin插件，可以很方便的定义环境变量")]),e._v(" "),s("ul",[s("li",[e._v("在根目录下添加config.js")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("const NODE_ENV = process.env.NODE_ENV; // webpack编译时会获取node环境的配置信息\nconst config = {\n     production: { // 生产环境(线上环境)\n        DOMAIN: 'production.com', // 上线域名\n     },\n     development: { // 开发环境\n        DOMAIN: 'development.com', // 测试域名\n     }\n}\nmodule.exports = config[NODE_ENV];\n")])])]),s("ul",[s("li",[e._v("修改webpack.config.js文件")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// ...\nconst constant = require('./config'); \n// ...\nplugins:[\n        // ...\n        new webpack.DefinePlugin({ \n          CONSTANT: JSON.stringify(constant)\n        })\n        // ...\n    ],\n// ...\n")])])]),s("ul",[s("li",[e._v("修改package.json")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('"scripts": {\n    "start": "NODE_ENV=development webpack-dev-server",\n    "build": "NODE_ENV=production webpack --config webpack.config.js"\n  },\n')])])]),s("p",[e._v("NODE_ENV=development和NODE_ENV=production指定node环境")]),e._v(" "),s("ul",[s("li",[e._v("运行及调试\n由于修改了webpack.config.js所以需要重新运行npm start, 然后在src/idex.js后面加上一句测试代码：console.log(CONSTANT);")])]),e._v(" "),s("p",[e._v("可以看到，配置成功打印出来了。")]),e._v(" "),s("h2",{attrs:{id:"总结："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结："}},[e._v("#")]),e._v(" 总结：")]),e._v(" "),s("p",[e._v("vue-cli是一个封装得很完美的vue脚手架，所以它的适应性很强；但是有些大公司他们的前端项目一般不会直接套用这种脚手架，而是需要结合公司内部的组件一步步搭起一个vue前端项目。")]),e._v(" "),s("p",[e._v("单纯的vue架构是非常简单的，但是结合到node环境和webpack一起用的话，有一些不是太熟悉node、webpack的前端同学就会有些蒙圈。")]),e._v(" "),s("p",[e._v("本文我们主要是搭建了一个基于webpack的vue开发环境，然后将需要的东西一件一件组装起来，虽然不算太完善，但是学会了这种思路的话，我们处理其他前端项目也不难了。")])])}),[],!1,null,null,null);a.default=n.exports}}]);