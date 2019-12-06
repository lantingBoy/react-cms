import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@@/history';
import RendererWrapper0 from '/Users/test/Documents/workspace/blog/blog-react-admin/src/pages/.umi/LocaleWrapper.jsx';
import _dvaDynamic from 'dva/dynamic';

const Router = require('dva/router').routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/user',
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () => import('../../layouts/UserLayout'),
          LoadingComponent: require('/Users/test/Documents/workspace/blog/blog-react-admin/src/components/PageLoading/index')
            .default,
        })
      : require('../../layouts/UserLayout').default,
    routes: [
      {
        path: '/user',
        redirect: '/user/login',
        exact: true,
      },
      {
        path: '/user/login',
        component: __IS_BROWSER
          ? _dvaDynamic({
              app: require('@tmp/dva').getApp(),
              models: () => [
                import('/Users/test/Documents/workspace/blog/blog-react-admin/src/pages/User/models/register.js').then(
                  m => {
                    return { namespace: 'register', ...m.default };
                  },
                ),
              ],
              component: () => import('../User/Login'),
              LoadingComponent: require('/Users/test/Documents/workspace/blog/blog-react-admin/src/components/PageLoading/index')
                .default,
            })
          : require('../User/Login').default,
        exact: true,
      },
      {
        component: () =>
          React.createElement(
            require('/Users/test/Documents/workspace/blog/blog-react-admin/node_modules/_umi-build-dev@1.16.7@umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
      },
    ],
  },
  {
    path: '/',
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () => import('../../layouts/BasicLayout'),
          LoadingComponent: require('/Users/test/Documents/workspace/blog/blog-react-admin/src/components/PageLoading/index')
            .default,
        })
      : require('../../layouts/BasicLayout').default,
    Routes: [require('../Authorized').default],
    authority: ['admin', 'user', 'xuying', 'biaochenxuying', 'BiaoChenXuYing'],
    routes: [
      {
        path: '/',
        redirect: '/user/login',
        exact: true,
      },
      {
        path: '/dashboard',
        name: 'dashboard',
        icon: 'dashboard',
        routes: [
          {
            path: '/dashboard/workplace',
            name: 'workplace',
            icon: 'smile',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import('/Users/test/Documents/workspace/blog/blog-react-admin/src/pages/Dashboard/analysis/model.jsx').then(
                      m => {
                        return { namespace: 'model', ...m.default };
                      },
                    ),
                    import('/Users/test/Documents/workspace/blog/blog-react-admin/src/pages/Dashboard/models/activities.js').then(
                      m => {
                        return { namespace: 'activities', ...m.default };
                      },
                    ),
                  ],
                  component: () => import('../Dashboard/analysis'),
                  LoadingComponent: require('/Users/test/Documents/workspace/blog/blog-react-admin/src/components/PageLoading/index')
                    .default,
                })
              : require('../Dashboard/analysis').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/Users/test/Documents/workspace/blog/blog-react-admin/node_modules/_umi-build-dev@1.16.7@umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
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
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () => import('../OtherUser/List'),
                  LoadingComponent: require('/Users/test/Documents/workspace/blog/blog-react-admin/src/components/PageLoading/index')
                    .default,
                })
              : require('../OtherUser/List').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/Users/test/Documents/workspace/blog/blog-react-admin/node_modules/_umi-build-dev@1.16.7@umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
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
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () => import('../Article/List1'),
                  LoadingComponent: require('/Users/test/Documents/workspace/blog/blog-react-admin/src/components/PageLoading/index')
                    .default,
                })
              : require('../Article/List1').default,
            exact: true,
          },
          {
            path: '/product/create',
            name: 'create',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () => import('../Article/ArticleCreate'),
                  LoadingComponent: require('/Users/test/Documents/workspace/blog/blog-react-admin/src/components/PageLoading/index')
                    .default,
                })
              : require('../Article/ArticleCreate').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/Users/test/Documents/workspace/blog/blog-react-admin/node_modules/_umi-build-dev@1.16.7@umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        path: '/data',
        name: 'data',
        icon: 'fire',
        routes: [
          {
            path: '/data/all',
            name: 'all',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () => import('../Article/List'),
                  LoadingComponent: require('/Users/test/Documents/workspace/blog/blog-react-admin/src/components/PageLoading/index')
                    .default,
                })
              : require('../Article/List').default,
            exact: true,
          },
          {
            path: '/data/single',
            name: 'single',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () => import('../Article/ArticleCreate'),
                  LoadingComponent: require('/Users/test/Documents/workspace/blog/blog-react-admin/src/components/PageLoading/index')
                    .default,
                })
              : require('../Article/ArticleCreate').default,
            exact: true,
          },
          {
            path: '/data/channel',
            name: 'channel',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import('/Users/test/Documents/workspace/blog/blog-react-admin/src/pages/Exception/models/error.js').then(
                      m => {
                        return { namespace: 'error', ...m.default };
                      },
                    ),
                  ],
                  component: () => import('../Exception/500'),
                  LoadingComponent: require('/Users/test/Documents/workspace/blog/blog-react-admin/src/components/PageLoading/index')
                    .default,
                })
              : require('../Exception/500').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/Users/test/Documents/workspace/blog/blog-react-admin/node_modules/_umi-build-dev@1.16.7@umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
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
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () => import('../Article/List'),
                  LoadingComponent: require('/Users/test/Documents/workspace/blog/blog-react-admin/src/components/PageLoading/index')
                    .default,
                })
              : require('../Article/List').default,
            exact: true,
          },
          {
            path: '/finance/weekorder',
            name: 'weekorder',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () => import('../Article/ArticleCreate'),
                  LoadingComponent: require('/Users/test/Documents/workspace/blog/blog-react-admin/src/components/PageLoading/index')
                    .default,
                })
              : require('../Article/ArticleCreate').default,
            exact: true,
          },
          {
            path: '/finance/cash',
            name: 'cash',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import('/Users/test/Documents/workspace/blog/blog-react-admin/src/pages/Exception/models/error.js').then(
                      m => {
                        return { namespace: 'error', ...m.default };
                      },
                    ),
                  ],
                  component: () => import('../Exception/500'),
                  LoadingComponent: require('/Users/test/Documents/workspace/blog/blog-react-admin/src/components/PageLoading/index')
                    .default,
                })
              : require('../Exception/500').default,
            exact: true,
          },
          {
            path: '/finance/cashrecord',
            name: 'cashrecord',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import('/Users/test/Documents/workspace/blog/blog-react-admin/src/pages/Exception/models/error.js').then(
                      m => {
                        return { namespace: 'error', ...m.default };
                      },
                    ),
                  ],
                  component: () => import('../Exception/500'),
                  LoadingComponent: require('/Users/test/Documents/workspace/blog/blog-react-admin/src/components/PageLoading/index')
                    .default,
                })
              : require('../Exception/500').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/Users/test/Documents/workspace/blog/blog-react-admin/node_modules/_umi-build-dev@1.16.7@umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
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
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () => import('../Message/List'),
                  LoadingComponent: require('/Users/test/Documents/workspace/blog/blog-react-admin/src/components/PageLoading/index')
                    .default,
                })
              : require('../Message/List').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/Users/test/Documents/workspace/blog/blog-react-admin/node_modules/_umi-build-dev@1.16.7@umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
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
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () => import('../Tag/List'),
                  LoadingComponent: require('/Users/test/Documents/workspace/blog/blog-react-admin/src/components/PageLoading/index')
                    .default,
                })
              : require('../Tag/List').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/Users/test/Documents/workspace/blog/blog-react-admin/node_modules/_umi-build-dev@1.16.7@umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
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
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () => import('../Link/List'),
                  LoadingComponent: require('/Users/test/Documents/workspace/blog/blog-react-admin/src/components/PageLoading/index')
                    .default,
                })
              : require('../Link/List').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/Users/test/Documents/workspace/blog/blog-react-admin/node_modules/_umi-build-dev@1.16.7@umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
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
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () => import('../Category/List'),
                  LoadingComponent: require('/Users/test/Documents/workspace/blog/blog-react-admin/src/components/PageLoading/index')
                    .default,
                })
              : require('../Category/List').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/Users/test/Documents/workspace/blog/blog-react-admin/node_modules/_umi-build-dev@1.16.7@umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
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
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () => import('../TimeAxis/List'),
                  LoadingComponent: require('/Users/test/Documents/workspace/blog/blog-react-admin/src/components/PageLoading/index')
                    .default,
                })
              : require('../TimeAxis/List').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/Users/test/Documents/workspace/blog/blog-react-admin/node_modules/_umi-build-dev@1.16.7@umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
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
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () => import('../Project/List'),
                  LoadingComponent: require('/Users/test/Documents/workspace/blog/blog-react-admin/src/components/PageLoading/index')
                    .default,
                })
              : require('../Project/List').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/Users/test/Documents/workspace/blog/blog-react-admin/node_modules/_umi-build-dev@1.16.7@umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
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
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () => import('../Account/Settings/Info'),
                  LoadingComponent: require('/Users/test/Documents/workspace/blog/blog-react-admin/src/components/PageLoading/index')
                    .default,
                })
              : require('../Account/Settings/Info').default,
            routes: [
              {
                path: '/account/settings',
                redirect: '/account/settings/base',
                exact: true,
              },
              {
                path: '/account/settings/base',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      component: () => import('../Account/Settings/BaseView'),
                      LoadingComponent: require('/Users/test/Documents/workspace/blog/blog-react-admin/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../Account/Settings/BaseView').default,
                exact: true,
              },
              {
                path: '/account/settings/personalLink',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      component: () =>
                        import('../Account/Settings/PersonalLinkView'),
                      LoadingComponent: require('/Users/test/Documents/workspace/blog/blog-react-admin/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../Account/Settings/PersonalLinkView').default,
                exact: true,
              },
              {
                component: () =>
                  React.createElement(
                    require('/Users/test/Documents/workspace/blog/blog-react-admin/node_modules/_umi-build-dev@1.16.7@umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
              },
            ],
          },
          {
            component: () =>
              React.createElement(
                require('/Users/test/Documents/workspace/blog/blog-react-admin/node_modules/_umi-build-dev@1.16.7@umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () => import('../404'),
              LoadingComponent: require('/Users/test/Documents/workspace/blog/blog-react-admin/src/components/PageLoading/index')
                .default,
            })
          : require('../404').default,
        exact: true,
      },
      {
        component: () =>
          React.createElement(
            require('/Users/test/Documents/workspace/blog/blog-react-admin/node_modules/_umi-build-dev@1.16.7@umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
      },
    ],
  },
  {
    component: () =>
      React.createElement(
        require('/Users/test/Documents/workspace/blog/blog-react-admin/node_modules/_umi-build-dev@1.16.7@umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: true },
      ),
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    // dva 中 history.listen 会初始执行一次
    // 这里排除掉 dva 的场景，可以避免 onRouteChange 在启用 dva 后的初始加载时被多执行一次
    const isDva =
      history.listen
        .toString()
        .indexOf('callback(history.location, history.action)') > -1;
    if (!isDva) {
      routeChangeHandler(history.location);
    }
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return (
      <RendererWrapper0>
        <Router history={history}>{renderRoutes(routes, props)}</Router>
      </RendererWrapper0>
    );
  }
}
