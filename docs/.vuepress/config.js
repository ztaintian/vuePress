module.exports = {
  head: [
    ['link', { rel: 'icon', href: '/logo.jpg' }]
  ],
  title: '小猪学习',
  description: '每天一点',
  lastUpdated: 'Last Updated',
  base: '/bar/',
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       '@alias': 'path/to/some/dir'
  //     }
  //   }
  // },
  themeConfig: {
    search: true,
    searchMaxSuggestions: 10,
    displayAllHeaders: true,
    sidebar:{
      '/tcp/': [
        ''
      ],
      '/javascript/': [
        '',
        'one'
      ]
    },
    nav: [
      { text: 'java', link: '/foo/' },
      { text: 'springboot', link: '/springboot/' },
      {
        text: 'javascript',
        items: [{
          text: 'javascript', link: '/javascript/'
        }]
      },
      { text: 'css', link: 'css' },
      { text: 'html', link: 'html' },
      { text: 'GitHub', link: 'GitHub' },
      {
        text: '其他',
        items: [{
          text: 'TCP', link: '/tcp/'
        }]
      },
      {
        text: 'Languages',
        items: [
          { text: 'Chinese', link: '/language/chinese' },
          { text: 'English', link: '/language/english' }
        ]
      }
    ]
  }
}