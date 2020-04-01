module.exports = {
  base: '/blog/',
  dest: 'docs',
  title:'易编科技',
  description:'用新技术赋能艺术教育，提升孩子的幸福感和创造力！',
  head:[
    ['link', { rel: 'icon', href: 'favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],
  themeConfig: {
    sidebarDepth: 3,
    navBar: true,
    nav: [
      {
        text: '分享',
        items: [
          { text: '如何面试前端', link: '/share/interview' },
          { text: 'java面试题', link: '/share/java' },
          { text: '前端面试题', link: '/job/sf' },
          { text: '开发环境配置参考', link: '/share/env'},
          { text: 'web应用性能优化', link: '/share/opt'},
          { text: 'uni-app多端开发回顾', link: '/share/uni'},
          { text: 'koa+vue全栈开发实战', link: '/share/koa'},
          { text: '深入webpack', link: '/share/webpack' },
          { text: 'webpack配置vue', link: '/share/webpack-vue' },
          { text: 'markdown语法', link: '/share/md' },
        ]
      },
      {
        text: '文字教程',
        items: [
          { text: 'JS全栈培训', link: '/fs/1' },
          { text: '全栈入门', link: '/static/1_1' },
          { text: 'JS入门教程', link: '/js/1' },
          { text: 'JS高级程序设计', link: '/dd/1-3' },
          { text: '前端高级知识技能', link: '/fe/vue' },
          { text: '必知编程英文词汇', link: '/en/ecma'},
        ]
      },
      {
        text: '视频教程',
        link: 'https://t.yibiankeji.com/'
      },
      {
        text: '其他链接',
        items: [
          { text: '常用网址', link: '/url/fe'},
          { text: 'github', link: 'https://github.com/yibiankeji'},
          { text: '公司官网', link: 'https://www.yibiankeji.com/'},
        ]
      },
    ],
    sidebar: {
      '/job/': genSidebarConfig('如何面试', ['sf', 'html', 'css', 'js', 'bom', 'node', 'vue', 'mp', 'self']),
      '/fe/': genSidebarConfig('大前端教程', ['vue', 'VueRouter', 'vuex',  'linux', 'vscode', 'node', 'code', 'suanfa', 'ngnix', 'pm2', 'ssh']),
      '/js/': genSidebarConfig('JS入门', ['1', '2', '3', '4', '5', '6', '7', '8']),
      '/fs/': genSidebarConfig('JS全栈培训', ['1', '2', '3', '4']),
      '/en/': genSidebarConfig('必知编程英文词汇', ['ecma', 'webpack']),
      '/dd/': genSidebarConfig('导读', ['1-3', '4-6', '7-9', '10-12', '13-15', '16-18', '19-21', '22-25']),
      '/static/': genSidebarConfig('全栈入门',  ['1_1', '1_2', '1_3', '2_1', '2_2', '3_1', '3_2', '3_3', '4_1', '4_2', '4_3', '5_1', '5_2', '5_3', '6_1','6_2', '6_3']),
    }
  }
}

function genSidebarConfig (title, children) {
  return [
    { title, children }
  ]
}
