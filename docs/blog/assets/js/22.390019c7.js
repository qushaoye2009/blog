(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{267:function(t,v,_){"use strict";_.r(v);var r=_(28),a=Object(r.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"web安全"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#web安全"}},[t._v("#")]),t._v(" web安全")]),t._v(" "),_("p",[t._v("随着互联网的发达，各种WEB应用也变得越来越复杂，满足了用户的各种需求，但是随之而来的就是各种网络安全的问题。")]),t._v(" "),_("h2",{attrs:{id:"http-安全头配置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-安全头配置"}},[t._v("#")]),t._v(" HTTP 安全头配置")]),t._v(" "),_("h3",{attrs:{id:"content-security-policy"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#content-security-policy"}},[t._v("#")]),t._v(" Content-Security-Policy")]),t._v(" "),_("p",[t._v("内容安全策略（CSP）常用来通过指定允许加载哪些资源来防止跨站点脚本攻击。在配置你的网站 CSP 过程中，要小心彻底地测试它，因为阻止某些资源有可能会破坏你的网站的功能。")]),t._v(" "),_("p",[t._v("CSP 的主要目标是减少和报告 XSS 攻击， XSS 攻击利用了浏览器对于从服务器所获取的内容的信任。使得恶意脚本有可能在用户的浏览器中执行，因为浏览器信任其内容来源，即使有时候这些脚本并非来自该站点的服务器当中。")]),t._v(" "),_("p",[t._v("CSP 通过指定允许浏览器加载和执行那些资源，使服务器管理者有能力减少或消除 XSS 攻击的可能性。 一个 CSP 兼容的浏览器将会仅执行从白名单域获取得到的脚本文件，忽略所有其他的脚本（包括内联脚本）。")]),t._v(" "),_("h3",{attrs:{id:"strict-transport-security"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#strict-transport-security"}},[t._v("#")]),t._v(" Strict-Transport-Security")]),t._v(" "),_("p",[t._v("Strict-Transport-Security(HSTS) 告诉浏览器该站点只能通过 HTTPS 访问，如果使用了子域，也建议对任何该站点的子域强制执行此操作。")]),t._v(" "),_("p",[t._v("网站通过HTTP Strict Transport Security通知浏览器，这个网站禁止使用HTTP方式加载，浏览器应该自动把所有尝试使用HTTP的请求自动替换为HTTPS请求。")]),t._v(" "),_("h3",{attrs:{id:"x-content-type-options"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#x-content-type-options"}},[t._v("#")]),t._v(" X-Content-Type-Options")]),t._v(" "),_("p",[t._v("X-Content-Type-Options 响应头相当于一个提示标志，被服务器用户提示浏览器一定要遵循 Content-Type 头中 MIME 类型的设定，而不能对其进行修改。")]),t._v(" "),_("p",[t._v("它减少了浏览器可能“猜测”某些内容不正确的意外应用程序行为，例如当开发人员将一个页面标记为“HTML”，但浏览器认为它看起来像JavaScript并试图将其呈现为JavaScript时。这个头将确保浏览器始终按照服务器设置的MIME类型来解析。")]),t._v(" "),_("h3",{attrs:{id:"cache-control"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cache-control"}},[t._v("#")]),t._v(" Cache-Control")]),t._v(" "),_("p",[t._v("Cache-Control 通用消息头字段，被用于在 http 请求和响应中，通过指定指令来实现缓存机制。缓存指令是单向的，这意味着在请求中设置的指令，不一定被包含在响应中。")]),t._v(" "),_("p",[t._v("这一个比其他的稍微复杂一些，因为你可能需要针对不同的内容类型使用不同的缓存策略。")]),t._v(" "),_("p",[t._v("任何包含有敏感信息的网页，例如用户个人信息页面或客户结帐页面，都应该设置为 no-cache。原因是防止共享计算机上的某人按下后退按钮或浏览历史并查看个人信息。")]),t._v(" "),_("h3",{attrs:{id:"x-frame-options"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#x-frame-options"}},[t._v("#")]),t._v(" X-Frame-Options")]),t._v(" "),_("p",[t._v("X-Frame-Options 响应头是用来给浏览器指示允许一个页面可否在 , ,  或者  中展现的标记。站点可以通过确保网站没有被嵌入到别人的站点里面，从而避免点击劫持攻击。")]),t._v(" "),_("p",[t._v("如果恶意的站点将你的网页嵌入到 iframe 标签中, 在你不知道的情况下打开并点击恶意网站的某个按钮，恶意网站能够执行一个攻击通过运行一些 JavaScript 将捕获点击事件到 iframe 中,然后代表你与网站交互。")]),t._v(" "),_("p",[t._v("将 X-Frame-Options 设置为 deny 可以禁止该页面在任何域中的 ifram 标签中展示。X-Frame-Options 设置可以由 CSP 的 frame-ancestors 配置所代替。")]),t._v(" "),_("h3",{attrs:{id:"access-control-allow-origin"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#access-control-allow-origin"}},[t._v("#")]),t._v(" Access-Control-Allow-Origin")]),t._v(" "),_("p",[t._v("Access-Control-Allow-Origin 响应头指定了该响应的资源是否被允许与给定的 origin 共享。可以被用来可解决浏览器的跨域请求。")]),t._v(" "),_("p",[t._v("比如一个站点 A 页面中发起一个 AJAX 请求到 站点 B， A B 不同源。正常情况下因为浏览器的同源策略将不会把 B 的响应结果返回给 A, 除非 B 在响应头中设置允许 A 站点发起请求。")]),t._v(" "),_("h2",{attrs:{id:"xss跨站脚本攻击"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#xss跨站脚本攻击"}},[t._v("#")]),t._v(" XSS跨站脚本攻击")]),t._v(" "),_("p",[t._v("跨站脚本（Cross-site scripting，通常简称为XSS）是一种网站应用程序的安全漏洞攻击，是代码注入的一种。")]),t._v(" "),_("p",[t._v("它允许恶意用户将代码注入到网页上，其他用户在观看网页时就会受到影响。这类攻击通常包含了HTML以及用户端脚本语言。")]),t._v(" "),_("p",[t._v("它是个老油条了，在OWASP Web Application Top 10排行榜中长期霸榜，从未掉出过前三名。XSS这类安全问题发生的本质原因在于，浏览器错误的将攻击者提供的用户输入数据当做JavaScript脚本给执行了")]),t._v(" "),_("p",[t._v("XSS有几种不同的分类办法，例如按照恶意输入的脚本是否在应用中存储，XSS被划分为“存储型XSS”和“反射型XSS”，如果按照是否和服务器有交互，又可以划分为“Server Side XSS”和“DOM based XSS”。")]),t._v(" "),_("p",[t._v("XSS攻击的危害包括：\n1、盗取各类用户帐号，如机器登录帐号、用户网银帐号、各类管理员帐号\n2、控制企业数据，包括读取、篡改、添加、删除企业敏感数据的能力\n3、盗窃企业重要的具有商业价值的资料\n4、非法转账\n5、强制发送电子邮件\n6、网站挂马\n7、控制受害者机器向其它网站发起攻击")]),t._v(" "),_("p",[t._v("防御措施")]),t._v(" "),_("ul",[_("li",[t._v("过滤特殊字符")]),t._v(" "),_("li",[t._v("使用 HTTP 头指定类型")])]),t._v(" "),_("p",[t._v("防御XSS最佳的做法就是对数据进行严格的输出编码，使得攻击者提供的数据不再被浏览器认为是脚本而被误执行。")]),t._v(" "),_("p",[t._v("其他的防御措施，例如设置CSP HTTP Header、输入验证、开启浏览器XSS防御等都是可选项，原因在于这些措施都存在被绕过的可能，并不能完全保证能防御XSS攻击。")]),t._v(" "),_("h2",{attrs:{id:"csrf-跨站请求伪造"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#csrf-跨站请求伪造"}},[t._v("#")]),t._v(" CSRF 跨站请求伪造")]),t._v(" "),_("p",[t._v("跨站请求伪造（英语：Cross-site request forgery），也被称为 one-click attack 或者 session riding，通常缩写为 CSRF 或者 XSRF， 是一种挟制用户在当前已登录的Web应用程序上执行非本意的操作的攻击方法。")]),t._v(" "),_("p",[t._v("跟跨网站脚本（XSS）相比，XSS 利用的是用户对指定网站的信任，CSRF 利用的是网站对用户网页浏览器的信任。")]),t._v(" "),_("p",[t._v("CSRF的攻击主要是在用户不知情的情况下，背着用户偷偷发了请求。")]),t._v(" "),_("p",[t._v("要完成一次CSRF攻击，受害者必须依次完成两个步骤：")]),t._v(" "),_("ul",[_("li",[t._v("1.登录受信任网站A，并在本地生成Cookie。")]),t._v(" "),_("li",[t._v("2.在不登出A的情况下，访问危险网站B。\n　　看到这里，你也许会说：“如果我不满足以上两个条件中的一个，我就不会受到CSRF的攻击”。是的，确实如此，但你不能保证以下情况不会发生：")]),t._v(" "),_("li",[t._v("1.你不能保证你登录了一个网站后，不再打开一个tab页面并访问另外的网站。")]),t._v(" "),_("li",[t._v("2.你不能保证你关闭浏览器了后，你本地的Cookie立刻过期，你上次的会话已经结束。（事实上，关闭浏览器不能结束一个会话，但大多数人都会错误的认为关闭浏览器就等于退出登录/结束会话了......）")])]),t._v(" "),_("p",[t._v("防御措施")]),t._v(" "),_("ul",[_("li",[t._v("验证码，最简洁而有效的防御方法")]),t._v(" "),_("li",[t._v("检查referer字段")]),t._v(" "),_("li",[t._v("添加校验token")])]),t._v(" "),_("h2",{attrs:{id:"http劫持"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http劫持"}},[t._v("#")]),t._v(" HTTP劫持")]),t._v(" "),_("p",[t._v("什么是HTTP劫持呢，大多数情况是运营商HTTP劫持，当我们使用HTTP请求请求一个网站页面的时候，网络运营商会在正常的数据流中插入精心设计的网络数据报文，让客户端（通常是浏览器）展示“错误”的数据，通常是一些弹窗，宣传性广告或者直接显示某网站的内容，大家应该都有遇到过。")]),t._v(" "),_("p",[t._v("能够实施 HTTP 劫持的根本原因，是 HTTP 协议没有办法对通信对方的身份进行校验以及对数据完整性进行校验。如果能解决这个问题，则劫持将无法轻易发生。")]),t._v(" "),_("p",[t._v("HTTP 是网络应用广泛使用的协议，负责 Web 内容的请求和获取。然而，内容请求和获取时会经过许多中间人，主要是网络环节，充当内容入口的浏览器、路由器厂商、WIFI提供商、通信运营商，如果使用了代理、翻墙软件则会引入更多中间人。由于 HTTP 请求的路径、参数默认情况下均是明文的，因此这些中间人可以对 HTTP 请求进行监控、劫持、阻挡。")]),t._v(" "),_("p",[t._v("在没有 HTTPS 时，运营商可在用户发起请求时直接跳转到某个广告，或者直接改变搜索结果插入自家的广告。如果劫持代码出现了 BUG ，则直接让用户无法使用，出现白屏。")]),t._v(" "),_("p",[t._v("数据泄露、请求劫持、内容篡改等等问题，核心原因就在于 HTTP 是全裸式的明文请求，域名、路径和参数都被中间人们看得一清二楚。HTTPS 做的就是给请求加密，让其对用户更加安全。对于自身而言除了保障用户利益外，还可避免本属于自己的流量被挟持，以保护自身利益。")]),t._v(" "),_("h2",{attrs:{id:"dns劫持"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#dns劫持"}},[t._v("#")]),t._v(" DNS劫持")]),t._v(" "),_("p",[t._v("DNS劫持就是通过劫持了DNS服务器，通过某些手段取得某域名的解析记录控制权，进而修改此域名的解析结果，导致对该域名的访问由原IP地址转入到修改后的指定IP，其结果就是对特定的网址不能访问或访问的是假网址，从而实现窃取资料或者破坏原有正常服务的目的。")]),t._v(" "),_("h2",{attrs:{id:"钓鱼攻击"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#钓鱼攻击"}},[t._v("#")]),t._v(" 钓鱼攻击")]),t._v(" "),_("h3",{attrs:{id:"url-钓鱼"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#url-钓鱼"}},[t._v("#")]),t._v(" url 钓鱼")]),t._v(" "),_("p",[t._v("服务端未对传入的跳转 url 变量进行检查和控制，可能导致可恶意构造任意一个恶意地址，诱导用户跳转到恶意网站。\n由于是从可信的站点跳转出去的，用户会比较信任，所以跳转漏洞一般用于钓鱼攻击，通过转到恶意网站欺骗用户输入用户名和密码盗取用户信息，或欺骗用户进行金钱交易；")]),t._v(" "),_("p",[t._v("也可能引发的 XSS 漏洞（主要是跳转常常使用 302 跳转，即设置 HTTP 响应头，Locatioin: url，如果 url 包含了 CRLF，则可能隔断了 HTTP 响应头，使得后面部分落到了 HTTP body，从而导致 XSS 漏洞）。")]),t._v(" "),_("p",[t._v("防范方式")]),t._v(" "),_("ul",[_("li",[t._v("若跳转的 url 事先是可以确定的，包括 url 和参数的值，则可以在后台先配置好，url 参数只需传对应 url 的索引即可，通过索引找到对应具体 url 再进行跳转；")]),t._v(" "),_("li",[t._v("若跳转的 url 事先不确定，但其输入是由后台生成的（不是用户通过参数传人），则可以先生成好跳转链接然后进行签名；")]),t._v(" "),_("li",[t._v("若 1 和 2 都不满足，url 事先无法确定，只能通过前端参数传入，则必须在跳转的时候对 url 进行按规则校验：判断 url 是否在应用授权的白名单内。\n框架提供了安全跳转的方法，可以通过配置白名单避免这种风险。")])]),t._v(" "),_("h3",{attrs:{id:"图片钓鱼"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#图片钓鱼"}},[t._v("#")]),t._v(" 图片钓鱼")]),t._v(" "),_("p",[t._v("如果可以允许用户向网页里插入未经验证的外链图片，这有可能出现钓鱼风险。")]),t._v(" "),_("p",[t._v("比如常见的 401钓鱼, 攻击者在访问页面时，页面弹出验证页面让用户输入帐号及密码，当用户输入之后，帐号及密码就存储到了黑客的服务器中。 通常这种情况会出现在'"),_("img",{attrs:{src:"$url"}}),t._v("'中，系统不对$url是否在域名白名单内进行校验。")]),t._v(" "),_("h3",{attrs:{id:"iframe-钓鱼"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#iframe-钓鱼"}},[t._v("#")]),t._v(" iframe 钓鱼")]),t._v(" "),_("p",[t._v("iframe 钓鱼，通过内嵌 iframe 到被攻击的网页中，攻击者可以引导用户去点击 iframe 指向的危险网站，甚至遮盖，影响网站的正常功能，劫持用户的点击操作。")]),t._v(" "),_("h2",{attrs:{id:"sql-注入"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#sql-注入"}},[t._v("#")]),t._v(" SQL 注入")]),t._v(" "),_("p",[t._v("所谓 SQL 注入，就是通过把 SQL 命令插入到 Web 表单提交或页面请求的查询字符串，最终达到棋牌呢服务器执行恶意的 SQL 命令。")]),t._v(" "),_("p",[t._v("具体来说，它是利用现有应用程序，将(恶意) 的 SQL 命令注入到后台数据库引擎执行的能力，它可以通过在 Web 表单中输入 (恶意) SQL 语句得到一个存在安全漏洞的网站上的数据库，而不是按照设计者意图去执行 SQL 语句。")]),t._v(" "),_("p",[t._v("SQL 防护：")]),t._v(" "),_("ul",[_("li",[t._v('永远不要信任用户的输入: 对用户的输入进行校验，可以通过正则表达式，或限制长度；对单引号和双"-"进行转换等。')]),t._v(" "),_("li",[t._v("永远不要使用动态拼装 SQL，可以使用参数化的 SQL 或者直接使用存储过程进行数据查询存取。")]),t._v(" "),_("li",[t._v("永远不要使用管理员权限的数据库连接，为每个应用使用单独的权限有限的数据库连接。")]),t._v(" "),_("li",[t._v("不要把机密信息直接存放，加密或者 hash 掉密码和敏感的信息。")])]),t._v(" "),_("h2",{attrs:{id:"ddos-攻击"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ddos-攻击"}},[t._v("#")]),t._v(" DDOS 攻击")]),t._v(" "),_("p",[t._v("分布式拒绝服务(DDoS:Distributed Denial of Service)攻击指借助于客户/服务器技术，将多个计算机联合起来作为攻击平台，对一个或多个目标发动DDoS攻击，从而成倍地提高拒绝服务攻击的威力。")]),t._v(" "),_("p",[t._v("可以打个比方：")]),t._v(" "),_("p",[t._v("一群恶霸试图让对面那家有着竞争关系的商铺无法正常营业，他们会采取什么手段呢？（只为举例，切勿模仿）")]),t._v(" "),_("p",[t._v("恶霸们扮作普通客户一直拥挤在对手的商铺，赖着不走，真正的购物者却无法进入；或者总是和营业员有一搭没一搭的东扯西扯，让工作人员不能正常服务客户；也可以为商铺的经营者提供虚假信息，商铺的上上下下忙成一团之后却发现都是一场空，最终跑了真正的大客户，损失惨重。")]),t._v(" "),_("p",[t._v("此外恶霸们完成这些坏事有时凭单干难以完成，需要叫上很多人一起。嗯，网络安全领域中 DoS 和 DDoS 攻击就遵循着这些思路。")]),t._v(" "),_("p",[t._v("DDOS 攻击利用目标系统网络服务功能缺陷或者直接消耗其系统资源，使得该目标系统无法提供正常的服务。")]),t._v(" "),_("p",[t._v("DDoS 攻击通过大量合法的请求占用大量网络资源，以达到瘫痪网络的目的。 具体有几种形式：")]),t._v(" "),_("ul",[_("li",[t._v("通过使网络过载来干扰甚至阻断正常的网络通讯；")]),t._v(" "),_("li",[t._v("通过向服务器提交大量请求，使服务器超负荷；")]),t._v(" "),_("li",[t._v("阻断某一用户访问服务器；")]),t._v(" "),_("li",[t._v("阻断某服务与特定系统或个人的通讯。")])])])}),[],!1,null,null,null);v.default=a.exports}}]);