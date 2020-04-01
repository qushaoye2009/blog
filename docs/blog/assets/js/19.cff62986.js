(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{262:function(n,t,e){"use strict";e.r(t);var a=e(28),s=Object(a.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"关于ngnix"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关于ngnix"}},[n._v("#")]),n._v(" 关于ngnix")]),n._v(" "),e("p",[n._v("Nginx是一款2004年由俄罗斯的Igor Sysoev使用C语言开发的开发高性能的 Web和反向代理服务器，也是一个 IMAP/POP3/SMTP 代理服务器。在高连接并发的情况下，Nginx是Apache服务器不错的替代品。")]),n._v(" "),e("p",[n._v("Apache的发展时期很长，而且是毫无争议的世界第一大服务器。它有着很多优点：稳定、开源、跨平台等等。但它出现的时间太长了，它兴起的年代，互联网产业远远比不上现在。所以它被设计为一个重量级的，不支持高并发的服务器。在Apache上运行数以万计的并发访问，会导致服务器消耗大量内存，导致HTTP请求的平均响应速度降低，决定了Apache不可能成为高性能WEB服务器。")]),n._v(" "),e("h2",{attrs:{id:"安装ngnix"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装ngnix"}},[n._v("#")]),n._v(" 安装ngnix")]),n._v(" "),e("ul",[e("li",[n._v("nginx编译依赖gcc环境")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("yum install gcc-c++\n")])])]),e("ul",[e("li",[n._v("安装pcre，nginx的http模块使用pcre来解析正则表达式.")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("yum install -y pcre pcre-devel\n")])])]),e("ul",[e("li",[n._v("安装zlib，nginx使用zlib对http包的内容进行gzip进行压缩和解压缩：")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("yum install -y zlib zlib-devel\n")])])]),e("ul",[e("li",[n._v("openssl，一个强大的安全套接字层密码库，囊括主要的密码算法、常用的密钥和证书封装管理功能及SSL协议，并提供丰富的应用程序供测试或其它目的使用，nginx不仅支持http协议，还支持https（即在ssl协议上传输http）：.")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("yum install -y openssl openssl-devel\n")])])]),e("ul",[e("li",[n._v("下载nginx源码包")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("wget http://nginx.org/download/nginx-1.12.0.tar.gz\n")])])]),e("ul",[e("li",[n._v("解压")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("tar -zxvf nginx-1.12.2.tar.gz\n\ncd nginx-1.12.0\n")])])]),e("ul",[e("li",[n._v("配置编译参数(可以使用./configure --help查询详细参数)")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("./configure \\\n--prefix=/usr/local/nginx \\\n--pid-path=/var/run/nginx/nginx.pid \\\n--lock-path=/var/lock/nginx.lock \\\n--error-log-path=/var/log/nginx/error.log \\\n--http-log-path=/var/log/nginx/access.log \\\n--with-http_gzip_static_module \\\n--http-client-body-temp-path=/var/temp/nginx/client \\\n--http-proxy-temp-path=/var/temp/nginx/proxy \\\n--http-fastcgi-temp-path=/var/temp/nginx/fastcgi \\\n--http-uwsgi-temp-path=/var/temp/nginx/uwsgi \\\n--http-scgi-temp-path=/var/temp/nginx/scgi\n")])])]),e("p",[n._v("注：安装之前需要手动创建上面指定的nginx文件夹，即/var/temp、/var/temp/nginx、/var/run/nginx/文件夹，否则启动时报错。")]),n._v(" "),e("ul",[e("li",[n._v("编译并安装")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("make && make install\n")])])]),e("p",[n._v("可以进入/usr/local/nginx查看文件是否存在conf、sbin、html文件夹，若存在则安装成功。")]),n._v(" "),e("ul",[e("li",[n._v("nginx命令全局执行设置")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("cd /usr/local/nginx/sbin/\nln -s /usr/local/nginx/sbin/nginx /usr/local/bin/nginx\n")])])]),e("h2",{attrs:{id:"ngnix常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ngnix常用命令"}},[n._v("#")]),n._v(" ngnix常用命令")]),n._v(" "),e("ul",[e("li",[n._v("查看nginx版本")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("nginx  -v\n")])])]),e("ul",[e("li",[n._v("启动(一般都需要root权限，所以需要加sudo)")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("sudo nginx\n")])])]),e("ul",[e("li",[n._v("停止")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("nginx -s stop\n\nnginx -s quit\n")])])]),e("ul",[e("li",[n._v("动态加载")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("nginx -s reload\n")])])]),e("ul",[e("li",[n._v("测试配置文件nginx.conf正确性")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("nginx  -t\n")])])]),e("h2",{attrs:{id:"真实配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#真实配置"}},[n._v("#")]),n._v(" 真实配置")]),n._v(" "),e("h3",{attrs:{id:"配置静态官网"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置静态官网"}},[n._v("#")]),n._v(" 配置静态官网")]),n._v(" "),e("p",[n._v("以下是一个真实静态官网的配置，支持http和https，打开nginx.conf文件，输入如下内容即可：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('user  root;\nworker_processes  2;\n\nerror_log  /var/log/nginx/error.log warn;\npid        /var/run/nginx.pid;\n\nevents {\n    use epoll;\n    multi_accept on;\n    worker_connections  1024;\n}\nhttp {\n    include       /etc/nginx/mime.types;\n    server_names_hash_bucket_size 64;\n    server_tokens off;\n    tcp_nopush on;\n    tcp_nodelay on;\n\n    default_type  application/json;\n\n    log_format  main  \'$remote_addr - $remote_user [$time_local] "$request" \'\n                      \'$status $body_bytes_sent "$http_referer" \'\n                      \'"$http_user_agent" "$http_x_forwarded_for"\';\n\n    access_log  /var/log/nginx/access.log  main;\n\n    sendfile        on;\n    #tcp_nopush     on;\n    client_max_body_size 50m;\n\n    keepalive_timeout  65;\n    client_header_timeout 10;\n    client_body_timeout 10;\n    reset_timedout_connection on;\n    send_timeout 10;\n\n    limit_conn addr 5000;\n    limit_conn_zone $binary_remote_addr zone=addr:5m;\n\n    gzip  on;\n    gzip_disable "msie6";\n    gzip_proxied any;\n    gzip_min_length 1000;\n    gzip_comp_level 6;\n    gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript;\n\n    open_file_cache max=100000 inactive=20s;\n    open_file_cache_valid 30s;\n    open_file_cache_min_uses 2;\n    open_file_cache_errors on;\n\n    server {\n        listen 80;\n\tlisten 443 ssl;\n        server_name www.test.com;\n\t# ssl on;\n    \tssl_certificate   cert/1540770424771.pem;\n    \tssl_certificate_key  cert/1540770424771.key;\n    \tssl_session_timeout 5m;\n    \tssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;\n    \tssl_protocols TLSv1 TLSv1.1 TLSv1.2;\n    \tssl_prefer_server_ciphers on;\n\n        error_page 500 502 503 504 /50x.html;\n        location = /50x.html {\n            root html;\n        }\n\n        root /home/xqart/office/current/dist ;\n        index index.html;\n    }\n}\n')])])]),e("h3",{attrs:{id:"配置前后端分离的vue"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置前后端分离的vue"}},[n._v("#")]),n._v(" 配置前后端分离的vue")]),n._v(" "),e("p",[n._v("内容参考以下例子：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("server {\n        listen 80;\n        server_name localhost;\n        error_page 500 502 503 504 /50x.html;\n        location = /50x.html {\n        root html;\n        }\n\n        root /home/xqart/h5/current/dist ;\n        index index.html;\n\n        location / {\n        try_files $uri $uri/ @router;\n        index index.html;\n        }\n\n        location @router {\n        rewrite ^.*$ /index.html last;\n        }\n\n        location /api {\n            proxy_pass http://localhost:3600;\n        }\n        location /assets {\n            proxy_pass http://localhost:3600;\n        }\n}\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);