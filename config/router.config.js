export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', component: './User/Login' },
      // { path: '/user/register', component: './User/Register' },
      // { path: '/user/register-result', component: './User/RegisterResult' },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    authority: ['admin', 'user', 'xuying', 'biaochenxuying', 'BiaoChenXuYing'],
    routes: [
      // dashboard
      { path: '/', redirect: '/user/login' },
      // { path: '/', redirect: '/dashboard/workplace' },
      {
        path: '/dashboard',
        name: 'dashboard',
        icon: 'dashboard',
        routes: [
          {
            path: '/dashboard/workplace',
            name: 'workplace',
            icon: 'smile',
            component: './Dashboard/analysis',
          },
        ],
      },
      {
        path: '/otherUser',
        name: 'otherUser',
        icon: 'usergroup-add',
        routes: [
          {
            path: '/otherUser/list',
            name: 'list',
            component: './OtherUser/List',
          },
        ],
      },
      {
        path: '/product',
        name: 'product',
        icon: 'ordered-list',
        routes: [
          {
            path: '/product/list',
            name: 'list',
            component: './Article/List1',
          },
          {
            path: '/product/create',
            name: 'create',
            component: './Article/ArticleCreate',
          },
        ],
      }, // finance
      {
        path: '/data',
        name: 'data',
        icon: 'fire',

        routes: [
          {
            path: '/data/all',
            name: 'all',
            component: './Article/List',
          },
          {
            path: '/data/single',
            name: 'single',
            component: './Article/ArticleCreate',
          },
          {
            path: '/data/channel',
            name: 'channel',
            component: './Exception/500',
          },
        ],
      },
      {
        path: '/finance',
        name: 'finance',
        icon: 'project',

        routes: [
          {
            path: '/finance/order',
            name: 'order',
            component: './Article/List',
          },
          {
            path: '/finance/weekorder',
            name: 'weekorder',
            component: './Article/ArticleCreate',
          },
          {
            path: '/finance/cash',
            name: 'cash',
            component: './Exception/500',
          },
          {
            path: '/finance/cashrecord',
            name: 'cashrecord',
            component: './Exception/500',
          },
        ],
      },
      {
        path: '/message',
        name: 'message',
        icon: 'message',
        routes: [
          {
            path: '/message/list',
            name: 'list',
            component: './Message/List',
          },
        ],
      },
      {
        path: '/tag',
        name: 'tag',
        icon: 'tags',
        routes: [
          {
            path: '/tag/list',
            name: 'list',
            component: './Tag/List',
          },
        ],
      },
      {
        path: '/link',
        name: 'link',
        icon: 'link',
        routes: [
          {
            path: '/link/list',
            name: 'list',
            component: './Link/List',
          },
        ],
      },
      {
        path: '/category',
        name: 'category',
        icon: 'book',
        routes: [
          {
            path: '/category/list',
            name: 'list',
            component: './Category/List',
          },
        ],
      },
      {
        path: '/timeAxis',
        name: 'timeAxis',
        icon: 'clock-circle',
        routes: [
          {
            path: '/timeAxis/list',
            name: 'list',
            component: './TimeAxis/List',
          },
        ],
      },
      {
        path: '/project',
        name: 'project',
        icon: 'clock-circle',
        routes: [
          {
            path: '/project/list',
            name: 'list',
            component: './Project/List',
          },
        ],
      },

      {
        name: 'account',
        icon: 'user',
        path: '/account',
        routes: [
          {
            path: '/account/settings',
            name: 'settings',
            component: './Account/Settings/Info',
            routes: [
              {
                path: '/account/settings',
                redirect: '/account/settings/base',
              },
              {
                path: '/account/settings/base',
                component: './Account/Settings/BaseView',
              },
              {
                path: '/account/settings/personalLink',
                component: './Account/Settings/PersonalLinkView',
              },
            ],
          },
        ],
      },
      {
        component: '404',
      },
    ],
  },
];
