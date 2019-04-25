module.exports = {
  themeConfig: {
    search: true,
    searchMaxSuggestions: 10,
    sidebar: {
      '/tcp/': [
        ''
      ],
      '/foo/': [
        '',     /* /foo/ */
        'one',  /* /foo/one.html */
        'two'   /* /foo/two.html */
      ],

      '/bar/': [
        '',      /* /bar/ */
        'three', /* /bar/three.html */
        'four'   /* /bar/four.html */
      ],

      // fallback
      '/': [
        '',        /* / */
        'contact', /* /contact.html */
        'about'    /* /about.html */
      ]
    },
    nav: [
      { text: 'java', link: '/foo/' },
      { text: 'springboot', link: '/springboot/' },
      { text: 'javascript', link: 'javascript' },
      { text: 'css', link: 'css' },
      { text: 'html', link: 'html' },
      { text: 'GitHub', link: 'GitHub' },
      {
        text: '其他',
        items: [
          { text: 'TCP', link: '/tcp/' },
          { text: 'English', link: '/language/english' }
        ]

      },
      {
        text: 'Languages',
        items: [
          { text: 'Chinese', link: '/language/chinese' },
          { text: 'English', link: '/language/english' }
        ]
      }
    ]
  },
  title: '小猪学习',
  description: '每天一点',
  lastUpdated: 'Last Updated',
  base: '/bar/',
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': 'path/to/some/dir'
      }
    }
  }
}
