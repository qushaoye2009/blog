(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{256:function(a,t,s){"use strict";s.r(t);var _=s(28),r=Object(_.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"四至六章"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四至六章"}},[a._v("#")]),a._v(" 四至六章")]),a._v(" "),s("h2",{attrs:{id:"_4-1-如何理解js变量松散类型本质？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-如何理解js变量松散类型本质？"}},[a._v("#")]),a._v(" 4.1 如何理解js变量松散类型本质？")]),a._v(" "),s("p",[a._v("这决定了js只在特定的时间用于保存特定值得名字而已，变量的值及其数据类型可以在脚本的生命周期内改变！")]),a._v(" "),s("h2",{attrs:{id:"_4-2引用类型与基本类型有什么区别？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2引用类型与基本类型有什么区别？"}},[a._v("#")]),a._v(" 4.2引用类型与基本类型有什么区别？")]),a._v(" "),s("p",[a._v("基本类型是按值访问的，可以操作保存在变量中的实际值；引用类型的值是保存在内存中的对象，在操作对象时，实际上是在操作对象的引用，因为js不允许直接访问内存；引用类型可以为其添加属性，而基本数据类型则不可，尽管不报错；在复制变量时，基本类型是独立的两个变量，而引用类型中两个变量实际上引用的都是同一个对象，相互影响。")]),a._v(" "),s("h2",{attrs:{id:"_4-3-如何理解js中所有函数的参数都是按值传递的？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-如何理解js中所有函数的参数都是按值传递的？"}},[a._v("#")]),a._v(" 4.3 如何理解js中所有函数的参数都是按值传递的？")]),a._v(" "),s("p",[a._v("在向参数传递基本数据类型的值时，被传递的值会被复制给一个局部变量，而在向参数传递引用类型的值时，会把这个值在内存中的地址复制给一个局部变量，因此这个局部变量的变化回反应在函数的外部；在参数为对象时，如果函数内部重写对象，此时的变量引用的只是局部对象，在函数执行完立即销毁，因此不会影响传进来的 外部对象。")]),a._v(" "),s("h2",{attrs:{id:"_4-4如何检测引用类型的具体类型？使用instanceof"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-4如何检测引用类型的具体类型？使用instanceof"}},[a._v("#")]),a._v(" 4.4如何检测引用类型的具体类型？使用instanceof")]),a._v(" "),s("h2",{attrs:{id:"_4-5如何理解函数的执行环境？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-5如何理解函数的执行环境？"}},[a._v("#")]),a._v(" 4.5如何理解函数的执行环境？")]),a._v(" "),s("p",[a._v("当执行流进入一个函数时，函数的环境就会被推入一个环境栈中，而在函数执行之后，栈将其环境弹出，把控制权返回给之前的执行环境。")]),a._v(" "),s("h2",{attrs:{id:"_4-6作用域链的作用是？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-6作用域链的作用是？"}},[a._v("#")]),a._v(" 4.6作用域链的作用是？")]),a._v(" "),s("p",[a._v("保证对执行环境有权访问的所有变量和函数的有序访问。")]),a._v(" "),s("h2",{attrs:{id:"_4-7作用域的头尾是？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-7作用域的头尾是？"}},[a._v("#")]),a._v(" 4.7作用域的头尾是？")]),a._v(" "),s("p",[a._v("前端始终是当前执行代码所在环境的变量对象，后端始终是全局执行环境的变量对象！")]),a._v(" "),s("h2",{attrs:{id:"_4-8延长作用域链的方法有？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-8延长作用域链的方法有？"}},[a._v("#")]),a._v(" 4.8延长作用域链的方法有？")]),a._v(" "),s("p",[a._v("使用try-catch语句的catch块或者with语句")]),a._v(" "),s("h2",{attrs:{id:"_4-9如何理解js的块级作用域？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-9如何理解js的块级作用域？"}},[a._v("#")]),a._v(" 4.9如何理解js的块级作用域？")]),a._v(" "),s("p",[a._v("在ES6引入let关键字之前，不存在块级作用域，所以if或者for等语句执行完后，其内部声明的变量依然会存在于外部变量之中。")]),a._v(" "),s("h2",{attrs:{id:"_4-10为何初始化变量之前，最好先声明？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-10为何初始化变量之前，最好先声明？"}},[a._v("#")]),a._v(" 4.10为何初始化变量之前，最好先声明？")]),a._v(" "),s("p",[a._v("一是在严格模式下，初始化未经声明的变量会导致错误；二是变量会自动被添加到全局环境，容易导致意外。")]),a._v(" "),s("h2",{attrs:{id:"_4-11如何理解js的垃圾收集机制？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-11如何理解js的垃圾收集机制？"}},[a._v("#")]),a._v(" 4.11如何理解js的垃圾收集机制？")]),a._v(" "),s("p",[a._v("使用标记清除或引用计数的收集策略，周期性的找出那些不再使用的变量，然后释放其占用的内存。")]),a._v(" "),s("h2",{attrs:{id:"_4-12如何避免采用引用计数-垃圾收集策略时出现的循环引用问题？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-12如何避免采用引用计数-垃圾收集策略时出现的循环引用问题？"}},[a._v("#")]),a._v(" 4.12如何避免采用引用计数 垃圾收集策略时出现的循环引用问题？")]),a._v(" "),s("p",[a._v("在不使用时，手工断开原生JS对象与DOM元素之间的连接，如将变量设置为null。")]),a._v(" "),s("h2",{attrs:{id:"_4-13为何分配给web浏览器的内存比桌面程序的少？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-13为何分配给web浏览器的内存比桌面程序的少？"}},[a._v("#")]),a._v(" 4.13为何分配给web浏览器的内存比桌面程序的少？")]),a._v(" "),s("p",[a._v("主要出于安全考虑，防止运行JS网页耗尽全部系统内存而导致系统崩溃。")]),a._v(" "),s("h2",{attrs:{id:"_4-14优化内存的最好方式是？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-14优化内存的最好方式是？"}},[a._v("#")]),a._v(" 4.14优化内存的最好方式是？")]),a._v(" "),s("p",[a._v("为执行中的代码只保存必要的数据，一旦不用，最好设置为null来释放其引用，让值脱离环境，以便垃圾收集器下次运行时将其回收。")]),a._v(" "),s("h2",{attrs:{id:"_4-15基本类型和引用类型在内存中的位置有何不同？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-15基本类型和引用类型在内存中的位置有何不同？"}},[a._v("#")]),a._v(" 4.15基本类型和引用类型在内存中的位置有何不同？")]),a._v(" "),s("p",[a._v("前者保存在栈内存中，后者保存在堆内存中。")]),a._v(" "),s("h2",{attrs:{id:"_5-1js中创建对象实例的方法有？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-1js中创建对象实例的方法有？"}},[a._v("#")]),a._v(" 5.1js中创建对象实例的方法有？")]),a._v(" "),s("p",[a._v("一是使用new操作符后跟Object构造函数；二是使用对象字面量表示法。")]),a._v(" "),s("h2",{attrs:{id:"_5-2如何选择访问js对象方法？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-2如何选择访问js对象方法？"}},[a._v("#")]),a._v(" 5.2如何选择访问js对象方法？")]),a._v(" "),s("p",[a._v("除了必须使用变量来访问属性时采用方括号表示法，其他均建议使用点表示法。")]),a._v(" "),s("h2",{attrs:{id:"_5-3js中数组类型与其他语言最大的区别是？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-3js中数组类型与其他语言最大的区别是？"}},[a._v("#")]),a._v(" 5.3js中数组类型与其他语言最大的区别是？")]),a._v(" "),s("p",[a._v("每一项可以保存任何类型的数据，并且数组大小是可以通过设置length属性进行动态调整的。")]),a._v(" "),s("h2",{attrs:{id:"_5-4创建数组的方式有？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-4创建数组的方式有？"}},[a._v("#")]),a._v(" 5.4创建数组的方式有？")]),a._v(" "),s("p",[a._v("使用Array构造函数法和数组字面量表示法")]),a._v(" "),s("h2",{attrs:{id:"_5-5给数组构造函数传递一个值时处理规则是？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-5给数组构造函数传递一个值时处理规则是？"}},[a._v("#")]),a._v(" 5.5给数组构造函数传递一个值时处理规则是？")]),a._v(" "),s("p",[a._v("如果传递的值时数值，则按照该数值创建给定项数的数组；如果是其他类型的，则会创建只有那一个值得数组。")]),a._v(" "),s("h2",{attrs:{id:"_5-6检测数组需要注意什么？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-6检测数组需要注意什么？"}},[a._v("#")]),a._v(" 5.6检测数组需要注意什么？")]),a._v(" "),s("p",[a._v("当存在两个以上不同全局执行环境时，instanceof会难以区分不同的数组构造函数，所以在支持Array.isArray()方法的浏览器中使用该方法。")]),a._v(" "),s("h2",{attrs:{id:"_5-7js的数组是怎么实现栈和队列的数据结构的？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-7js的数组是怎么实现栈和队列的数据结构的？"}},[a._v("#")]),a._v(" 5.7js的数组是怎么实现栈和队列的数据结构的？")]),a._v(" "),s("p",[a._v("使用push和pop方法模拟栈，使用shift和push，或unshift和pop模拟双向队列")]),a._v(" "),s("h2",{attrs:{id:"_5-8数组的方法有？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-8数组的方法有？"}},[a._v("#")]),a._v(" 5.8数组的方法有？")]),a._v(" "),s("p",[a._v("isArray, toLocaleString, toString, valueOf,\npush, pop, shift, unshift,\nreverse, sort,\nconcat, splice,\nindexOf, lastIndexOf,\nevery, filter, forEach, map, some,\nreduce, reduceRight,")]),a._v(" "),s("h2",{attrs:{id:"_5-9js中定义函数的方法有？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-9js中定义函数的方法有？"}},[a._v("#")]),a._v(" 5.9js中定义函数的方法有？")]),a._v(" "),s("p",[a._v("一是使用函数声明语法；二是使用函数表达式；三是使用Function构造函数（不推荐，解析了两次代码而影响性能）。")]),a._v(" "),s("h2",{attrs:{id:"_5-10js中函数为何没有指针？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-10js中函数为何没有指针？"}},[a._v("#")]),a._v(" 5.10js中函数为何没有指针？")]),a._v(" "),s("p",[a._v("因为每个函数实际都是Function类型对象的实例，函数名只是一个指向函数对象的指针，不会与某个函数绑定，如果申明了两个同名函数，后面的函数会覆盖前面的函数。")]),a._v(" "),s("h2",{attrs:{id:"_5-11函数声明和函数表达式的区别？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-11函数声明和函数表达式的区别？"}},[a._v("#")]),a._v(" 5.11函数声明和函数表达式的区别？")]),a._v(" "),s("p",[a._v("js引擎会把函数声明提升到顶部，而表达式得到解析器执行到其所在的代码行才会被解释执行。")]),a._v(" "),s("h2",{attrs:{id:"_5-12函数名本身是变量有何好处？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-12函数名本身是变量有何好处？"}},[a._v("#")]),a._v(" 5.12函数名本身是变量有何好处？")]),a._v(" "),s("p",[a._v("使得函数可以作为值来使用，传递参数或者作为函数内部的返回值等。")]),a._v(" "),s("h2",{attrs:{id:"_5-13如何理解函数内的arguments对象的callee属性？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-13如何理解函数内的arguments对象的callee属性？"}},[a._v("#")]),a._v(" 5.13如何理解函数内的arguments对象的callee属性？")]),a._v(" "),s("p",[a._v("指向拥有该arguments对象的函数本身，一般在函数递归时用来消除函数执行与函数名的耦合。")]),a._v(" "),s("h2",{attrs:{id:"_5-14函数内部的属性和方法有？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-14函数内部的属性和方法有？"}},[a._v("#")]),a._v(" 5.14函数内部的属性和方法有？")]),a._v(" "),s("p",[a._v("argument和this对象，length和prototype变量，apply，call和bind\ntoLocaleString, toString, valueOf")]),a._v(" "),s("h2",{attrs:{id:"_5-15为何用apply和call？他们的区别？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-15为何用apply和call？他们的区别？"}},[a._v("#")]),a._v(" 5.15为何用apply和call？他们的区别？")]),a._v(" "),s("p",[a._v("确保对象不与方法耦合的前提下，去扩充函数执行的作用域；接收参数的方式不同。")]),a._v(" "),s("h2",{attrs:{id:"_5-16boolean-number和string-特殊引用类型的作用是？特殊在哪？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-16boolean-number和string-特殊引用类型的作用是？特殊在哪？"}},[a._v("#")]),a._v(" 5.16Boolean, Number和String 特殊引用类型的作用是？特殊在哪？")]),a._v(" "),s("p",[a._v("便于操作基本类型的值；特殊在对象的生存期，使用new操作符创建的引用类型实例，会在执行流离开当前作用域前一直保存在内存中，而特殊类型只存在代码执行的瞬间，并且不能再运行时为其添加属性和方法。")]),a._v(" "),s("h2",{attrs:{id:"_5-17使用new调用基本包装类型的构造函数，与调用同名转型函数的区别？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-17使用new调用基本包装类型的构造函数，与调用同名转型函数的区别？"}},[a._v("#")]),a._v(" 5.17使用new调用基本包装类型的构造函数，与调用同名转型函数的区别？")]),a._v(" "),s("p",[a._v("前者返回 的类型为对象，而后者还是基本类型。")]),a._v(" "),s("h2",{attrs:{id:"_5-18string类型提供了那些方法和属性辅助js对字符串的解析和操作？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-18string类型提供了那些方法和属性辅助js对字符串的解析和操作？"}},[a._v("#")]),a._v(" 5.18String类型提供了那些方法和属性辅助js对字符串的解析和操作？")]),a._v(" "),s("p",[a._v("length,继承于对象的toLocaleString, toString, valueOf\ncharAt, charCodeAt\nconcat, slice, substr, subtring,\nindexOf,lastIndexOf,\ntrim,\ntoLowerCase, toLocaleLowerCase, toUpperCase, toLocaleUpperCase,\nmatch, search, replace,localeCompare,\nfromCharCode")]),a._v(" "),s("h2",{attrs:{id:"_5-19global对象的方法和属性有？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-19global对象的方法和属性有？"}},[a._v("#")]),a._v(" 5.19Global对象的方法和属性有？")]),a._v(" "),s("p",[a._v("isNaN, isFinite, parseInt, parseFloat,\nencodeURI, encodeURIComponent,\ndecodeURI, decodeURIComponent,\neval；\nundefied, NaN, Infinity,Object, Array, Fuction, Boolean, String, Number")]),a._v(" "),s("h2",{attrs:{id:"_5-20为何math对象提供的计算功能比在js中直接编写的要快得多啊？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-20为何math对象提供的计算功能比在js中直接编写的要快得多啊？"}},[a._v("#")]),a._v(" 5.20为何Math对象提供的计算功能比在JS中直接编写的要快得多啊？")]),a._v(" "),s("p",[a._v("因为其属性和方法都是静态的，js引擎做了优化，少了解析代码的环节。")]),a._v(" "),s("h2",{attrs:{id:"_6-1js中的属性有？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-1js中的属性有？"}},[a._v("#")]),a._v(" 6.1js中的属性有？")]),a._v(" "),s("p",[a._v("数据属性和访问器属性")]),a._v(" "),s("h2",{attrs:{id:"_6-2如何修改数据属性的默认值？如何获取？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-2如何修改数据属性的默认值？如何获取？"}},[a._v("#")]),a._v(" 6.2如何修改数据属性的默认值？如何获取？")]),a._v(" "),s("p",[a._v("使用Object.defineProperty()方法修改；\n使用Object.getOwnPropertyDescriptor()方法获取；")]),a._v(" "),s("h2",{attrs:{id:"_6-3对象如何定义多个属性？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-3对象如何定义多个属性？"}},[a._v("#")]),a._v(" 6.3对象如何定义多个属性？")]),a._v(" "),s("p",[a._v("使用Object.defineProperties()方法")]),a._v(" "),s("h2",{attrs:{id:"_6-4使用object构造函数或对象字面量创建对象的共同缺点是？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-4使用object构造函数或对象字面量创建对象的共同缺点是？"}},[a._v("#")]),a._v(" 6.4使用Object构造函数或对象字面量创建对象的共同缺点是？")]),a._v(" "),s("p",[a._v("产生大量重复代码；")]),a._v(" "),s("h2",{attrs:{id:"_6-5工厂模式解决了什么问题，还存在什么问题？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-5工厂模式解决了什么问题，还存在什么问题？"}},[a._v("#")]),a._v(" 6.5工厂模式解决了什么问题，还存在什么问题？")]),a._v(" "),s("p",[a._v("解决了创建相似对象的问题，没有解决对象识别的问题；")]),a._v(" "),s("h2",{attrs:{id:"_6-6构造函数解决了什么问题，还存在什么问题？与普通函数有何区别？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-6构造函数解决了什么问题，还存在什么问题？与普通函数有何区别？"}},[a._v("#")]),a._v(" 6.6构造函数解决了什么问题，还存在什么问题？与普通函数有何区别？")]),a._v(" "),s("p",[a._v("构造函数可通过其constructor属性来标识它的实例为特定的对象类型，即解决了创建相似对象问题，又解决了对象识别问题，但是每个方法都在实例重新创建了一遍，会导致不同的作用域链和标识符解析，且不同实例的同名函数不相等；\n形式上是首字母大小写不同，本质上是调用方式不同，如果构造函数作为普通函数调用，属性和方法都会被添加到全局对象；")]),a._v(" "),s("h2",{attrs:{id:"_6-7函数中prototype属性的作用是？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-7函数中prototype属性的作用是？"}},[a._v("#")]),a._v(" 6.7函数中prototype属性的作用是？")]),a._v(" "),s("p",[a._v("包含可以由特定类型的所有实例共享的属性和方法，其本身也是一个对象，其constructor属性指向包含该原型的构造函数。")]),a._v(" "),s("h2",{attrs:{id:"_6-8对象实例与原型中值的规则？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-8对象实例与原型中值的规则？"}},[a._v("#")]),a._v(" 6.8对象实例与原型中值的规则？")]),a._v(" "),s("p",[a._v("实例可以访问原型中的值，却不能修改，且若实例添加了一个与原型同名的属性，将会屏蔽原型中的属性，阻止实例访问，只有通过delete操作符才能恢复去指向原型的连接。")]),a._v(" "),s("h2",{attrs:{id:"_6-9如何确定属性是实例属性还是原型属性？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-9如何确定属性是实例属性还是原型属性？"}},[a._v("#")]),a._v(" 6.9如何确定属性是实例属性还是原型属性？")]),a._v(" "),s("p",[a._v("同时使用hasOwnProperty()方法和in操作符；")]),a._v(" "),s("h2",{attrs:{id:"_6-10使用对象字面量重写原型对象有何问题？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-10使用对象字面量重写原型对象有何问题？"}},[a._v("#")]),a._v(" 6.10使用对象字面量重写原型对象有何问题？")]),a._v(" "),s("p",[a._v("其constructor属性指向Object了，需要特意将其显示的设置回特定的值，但会修改其枚举属性，所以最好使用Object.defineProperty()去单独设置；切断了构造函数与最初原型之间的联系，回导致错误。")]),a._v(" "),s("h2",{attrs:{id:"_6-11为何不推荐在原型对象中去定义新方法和属性？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-11为何不推荐在原型对象中去定义新方法和属性？"}},[a._v("#")]),a._v(" 6.11为何不推荐在原型对象中去定义新方法和属性？")]),a._v(" "),s("p",[a._v("可能导致命名冲突，还有就是可能意外重写原生方法。")]),a._v(" "),s("h2",{attrs:{id:"_6-12原型对象还存在的问题？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-12原型对象还存在的问题？"}},[a._v("#")]),a._v(" 6.12原型对象还存在的问题？")]),a._v(" "),s("p",[a._v("所有的属性都被所有的实例共享。")]),a._v(" "),s("h2",{attrs:{id:"_6-13怎么实现组合继承？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-13怎么实现组合继承？"}},[a._v("#")]),a._v(" 6.13怎么实现组合继承？")]),a._v(" "),s("p",[a._v("使用原型链实现对原型属性和方法的继承，而通过借用构造函数来实现对实例属性的继承。")]),a._v(" "),s("h2",{attrs:{id:"_6-14寄生式继承为何会降低效率？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-14寄生式继承为何会降低效率？"}},[a._v("#")]),a._v(" 6.14寄生式继承为何会降低效率？")]),a._v(" "),s("p",[a._v("因为不能做到函数复用。。。")]),a._v(" "),s("h2",{attrs:{id:"_6-15组合继承存在的最大问题是？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-15组合继承存在的最大问题是？"}},[a._v("#")]),a._v(" 6.15组合继承存在的最大问题是？")]),a._v(" "),s("p",[a._v("总是调用两次超类函数。。。")]),a._v(" "),s("h2",{attrs:{id:"_6-16如何实现寄生组合式继承？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-16如何实现寄生组合式继承？"}},[a._v("#")]),a._v(" 6.16如何实现寄生组合式继承？")]),a._v(" "),s("p",[a._v("通过构造函数来继承属性，通过原型链和混成形式来继承方法。")])])}),[],!1,null,null,null);t.default=r.exports}}]);