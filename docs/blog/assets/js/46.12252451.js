(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{289:function(v,_,t){"use strict";t.r(_);var a=t(28),e=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"正则表达式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式"}},[v._v("#")]),v._v(" 正则表达式")]),v._v(" "),t("p",[v._v("正则表达式（regular expression）是一种表达文本模式（即字符串结构）的方法，有点像字符串的模板，常常用来按照“给定模式”匹配文本。")]),v._v(" "),t("p",[v._v("新建正则表达式有两种方法。一种是使用字面量，以斜杠表示开始和结束。另一种是使用RegExp构造函数。")]),v._v(" "),t("p",[v._v("它们的主要区别是，第一种方法在引擎编译代码时，就会新建正则表达式，第二种方法在运行时新建正则表达式，所以前者的效率较高。而且，前者比较便利和直观，所以实际应用中，基本上都采用字面量定义正则表达式。")]),v._v(" "),t("h2",{attrs:{id:"匹配规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#匹配规则"}},[v._v("#")]),v._v(" 匹配规则")]),v._v(" "),t("p",[v._v("正则表达式的规则很复杂。")]),v._v(" "),t("h3",{attrs:{id:"字面量字符和元字符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#字面量字符和元字符"}},[v._v("#")]),v._v(" 字面量字符和元字符")]),v._v(" "),t("p",[v._v("大部分字符在正则表达式中，就是字面的含义，比如/a/匹配a，/b/匹配b。如果在正则表达式之中，某个字符只表示它字面的含义（就像前面的a和b），那么它们就叫做“字面量字符”（literal characters）。")]),v._v(" "),t("p",[v._v("除了字面量字符以外，还有一部分字符有特殊含义，不代表字面的意思。它们叫做“元字符”（metacharacters），主要有以下几个。")]),v._v(" "),t("ul",[t("li",[v._v("点字符（.) 匹配除回车（\\r）、换行(\\n) 、行分隔符（\\u2028）和段分隔符（\\u2029）以外的所有字符。注意，对于码点大于0xFFFF字符，点字符不能正确匹配，会认为这是两个字符。")]),v._v(" "),t("li",[v._v("位置字符：位置字符用来提示字符所处的位置，主要有两个字符：^ 表示字符串的开始位置，$ 表示字符串的结束位置")]),v._v(" "),t("li",[v._v("选择符（|）：竖线符号（|）在正则表达式中表示“或关系”（OR），即cat|dog表示匹配cat或dog。")]),v._v(" "),t("li",[v._v("转义符\\ ：正则表达式中那些有特殊含义的元字符，如果要匹配它们本身，就需要在它们前面要加上反斜杠。一共有12个字符：^、.、[、$、(、)、|、*、+、?、{和\\。需要特别注意的是，如果使用RegExp方法生成正则对象，转义需要使用两个斜杠，因为字符串内部会先转义一次。")]),v._v(" "),t("li",[v._v("特殊字符：对一些不能打印的特殊字符，提供了表达方法：\\cX 表示Ctrl-[X]，其中的X是A-Z之中任一个英文字母，用来匹配控制字符。[\\b] 匹配退格键(U+0008)，不要与\\b混淆。\\n 匹配换行键。\\r 匹配回车键。")]),v._v(" "),t("li",[v._v("字符类：字符类（class）表示有一系列字符可供选择，只要匹配其中一个就可以了。所有可供选择的字符都放在方括号内，比如[xyz] 表示x、y、z之中任选一个匹配。")]),v._v(" "),t("li",[v._v("脱字符（^）果方括号内的第一个字符是[^]，则表示除了字符类之中的字符，其他字符都可以匹配。比如，[^xyz]表示除了x、y、z之外都可以匹配。")]),v._v(" "),t("li",[v._v("连字符（-）对于连续序列的字符，连字符（-）用来提供简写形式，表示字符的连续范围。比如，[abc]可以写成[a-c]，[0123456789]可以写成[0-9]，同理[A-Z]表示26个大写字母。")])]),v._v(" "),t("h3",{attrs:{id:"预定义模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#预定义模式"}},[v._v("#")]),v._v(" 预定义模式")]),v._v(" "),t("p",[v._v("预定义模式指的是某些常见模式的简写方式。")]),v._v(" "),t("ul",[t("li",[v._v("\\d 匹配0-9之间的任一数字，相当于[0-9]。")]),v._v(" "),t("li",[v._v("\\D 匹配所有0-9以外的字符，相当于[^0-9]。")]),v._v(" "),t("li",[v._v("\\w 匹配任意的字母、数字和下划线，相当于[A-Za-z0-9_]。")]),v._v(" "),t("li",[v._v("\\W 除所有字母、数字和下划线以外的字符，相当于[^A-Za-z0-9_]。")]),v._v(" "),t("li",[v._v("\\s 匹配空格（包括换行符、制表符、空格符等），相等于[ \\t\\r\\n\\v\\f]。")]),v._v(" "),t("li",[v._v("\\S 匹配非空格的字符，相当于[^ \\t\\r\\n\\v\\f]。")]),v._v(" "),t("li",[v._v("\\b 匹配词的边界。")]),v._v(" "),t("li",[v._v("\\B 匹配非词边界，即在词的内部。")])]),v._v(" "),t("p",[v._v("通常，正则表达式遇到换行符（\\n）就会停止匹配。")]),v._v(" "),t("h3",{attrs:{id:"重复类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重复类"}},[v._v("#")]),v._v(" 重复类")]),v._v(" "),t("p",[v._v("模式的精确匹配次数，使用大括号（{}）表示。{n}表示恰好重复n次，{n,}表示至少重复n次，{n,m}表示重复不少于n次，不多于m次。")]),v._v(" "),t("h3",{attrs:{id:"量词符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#量词符"}},[v._v("#")]),v._v(" 量词符")]),v._v(" "),t("p",[v._v("量词符用来设定某个模式出现的次数。")]),v._v(" "),t("ul",[t("li",[v._v("? 问号表示某个模式出现0次或1次，等同于{0, 1}。")]),v._v(" "),t("li",[t("ul",[t("li",[v._v("星号表示某个模式出现0次或多次，等同于{0,}。")])])]),v._v(" "),t("li",[t("ul",[t("li",[v._v("加号表示某个模式出现1次或多次，等同于{1,}。")])])])]),v._v(" "),t("h2",{attrs:{id:"修饰符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修饰符"}},[v._v("#")]),v._v(" 修饰符")]),v._v(" "),t("p",[v._v("修饰符（modifier）表示模式的附加规则，放在正则模式的最尾部。")]),v._v(" "),t("p",[v._v("修饰符可以单个使用，也可以多个一起使用。")]),v._v(" "),t("h3",{attrs:{id:"g-修饰符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#g-修饰符"}},[v._v("#")]),v._v(" g 修饰符")]),v._v(" "),t("p",[v._v("默认情况下，第一次匹配成功后，正则对象就停止向下匹配了。g修饰符表示全局匹配（global），加上它以后，正则对象将匹配全部符合条件的结果，主要用于搜索和替换。")]),v._v(" "),t("p",[v._v("正则模式含有g修饰符，每次都是从上一次匹配成功处，开始向后匹配。")]),v._v(" "),t("h3",{attrs:{id:"i-修饰符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#i-修饰符"}},[v._v("#")]),v._v(" i 修饰符")]),v._v(" "),t("p",[v._v("默认情况下，正则对象区分字母的大小写，加上i修饰符以后表示忽略大小写（ignoreCase）。")]),v._v(" "),t("h3",{attrs:{id:"m-修饰符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#m-修饰符"}},[v._v("#")]),v._v(" m 修饰符")]),v._v(" "),t("p",[v._v("m修饰符表示多行模式（multiline），会修改^和$的行为。默认情况下（即不加m修饰符时），^和$匹配字符串的开始处和结尾处，加上m修饰符以后，^和$还会匹配行首和行尾，即^和$会识别换行符（\\n）。")]),v._v(" "),t("h2",{attrs:{id:"实例属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实例属性"}},[v._v("#")]),v._v(" 实例属性")]),v._v(" "),t("p",[v._v("正则对象的实例属性分成两类。")]),v._v(" "),t("p",[v._v("一类是修饰符相关，用于了解设置了什么修饰符:")]),v._v(" "),t("ul",[t("li",[v._v("RegExp.prototype.ignoreCase：返回一个布尔值，表示是否设置了i修饰符。")]),v._v(" "),t("li",[v._v("RegExp.prototype.global：返回一个布尔值，表示是否设置了g修饰符。")]),v._v(" "),t("li",[v._v("RegExp.prototype.multiline：返回一个布尔值，表示是否设置了m修饰符。")]),v._v(" "),t("li",[v._v("RegExp.prototype.flags：返回一个字符串，包含了已经设置的所有修饰符，按字母排序。\n上面四个属性都是只读的。")])]),v._v(" "),t("p",[v._v("另一类是与修饰符无关的属性，主要是下面两个。")]),v._v(" "),t("ul",[t("li",[v._v("RegExp.prototype.lastIndex：返回一个整数，表示下一次开始搜索的位置。该属性可读写，但是只在进行连续搜索时有意义，详细介绍请看后文。")]),v._v(" "),t("li",[v._v("RegExp.prototype.source：返回正则表达式的字符串形式（不包括反斜杠），该属性只读。")])]),v._v(" "),t("h2",{attrs:{id:"实例方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实例方法"}},[v._v("#")]),v._v(" 实例方法")]),v._v(" "),t("p",[v._v("正则实例对象的test方法返回一个布尔值，表示当前模式是否能匹配参数字符串。")]),v._v(" "),t("p",[v._v("如果正则表达式带有g修饰符，则每一次test方法都从上一次结束的位置开始向后匹配。")]),v._v(" "),t("p",[v._v("lastIndex属性只对同一个正则表达式有效，所以下面这样写是错误的:")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("var count = 0;\nwhile (/a/g.test('babaa')) count++;\n")])])]),t("p",[v._v("上面代码会导致无限循环，因为while循环的每次匹配条件都是一个新的正则表达式，导致lastIndex属性总是等于0。")]),v._v(" "),t("p",[v._v("如果正则模式是一个空字符串，则匹配所有字符串。")]),v._v(" "),t("p",[v._v("正则实例对象的exec方法，用来返回匹配结果。如果发现匹配，就返回一个数组，成员是匹配成功的子字符串，否则返回null。")]),v._v(" "),t("p",[v._v("如果正则表示式包含圆括号（即含有“组匹配”），则返回的数组会包括多个成员。第一个成员是整个匹配成功的结果，后面的成员就是圆括号对应的匹配成功的组。也就是说，第二个成员对应第一个括号，第三个成员对应第二个括号，以此类推。整个数组的length属性等于组匹配的数量再加1。")]),v._v(" "),t("p",[v._v("exec方法的返回数组还包含以下两个属性：")]),v._v(" "),t("ul",[t("li",[v._v("input：整个原字符串。")]),v._v(" "),t("li",[v._v("index：整个模式匹配成功的开始位置（从0开始计数）。")])]),v._v(" "),t("p",[v._v("如果正则表达式加上g修饰符，则可以使用多次exec方法，下一次搜索的位置从上一次匹配成功结束的位置开始。")]),v._v(" "),t("p",[v._v("正则实例对象的lastIndex属性不仅可读，还可写。设置了g修饰符的时候，只要手动设置了lastIndex的值，就会从指定位置开始匹配。")]),v._v(" "),t("p",[v._v("字符串的实例方法之中，有4种与正则表达式有关。")]),v._v(" "),t("ul",[t("li",[v._v("String.prototype.match()：返回一个数组，成员是所有匹配的子字符串。")]),v._v(" "),t("li",[v._v("String.prototype.search()：按照给定的正则表达式进行搜索，返回一个整数，表示匹配开始的位置。")]),v._v(" "),t("li",[v._v("String.prototype.replace()：按照给定的正则表达式进行替换，返回替换后的字符串。")]),v._v(" "),t("li",[v._v("String.prototype.split()：按照给定规则进行字符串分割，返回一个数组，包含分割后的各个成员。")])])])}),[],!1,null,null,null);_.default=e.exports}}]);