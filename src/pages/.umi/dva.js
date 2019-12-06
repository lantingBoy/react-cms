import dva from 'dva';
import { Component } from 'react';
import createLoading from 'dva-loading';
import history from '@tmp/history';

let app = null;

export function _onCreate() {
  const plugins = require('umi/_runtimePlugin');
  const runtimeDva = plugins.mergeConfig('dva');
  app = dva({
    history,
    
    ...(runtimeDva.config || {}),
    ...(window.g_useSSR ? { initialState: window.g_initialData } : {}),
  });
  
  app.use(createLoading());
  (runtimeDva.plugins || []).forEach(plugin => {
    app.use(plugin);
  });
  
  app.model({ namespace: 'article', ...(require('/Users/test/Documents/workspace/blog/blog-react-admin/src/models/article.js').default) });
app.model({ namespace: 'category', ...(require('/Users/test/Documents/workspace/blog/blog-react-admin/src/models/category.js').default) });
app.model({ namespace: 'global', ...(require('/Users/test/Documents/workspace/blog/blog-react-admin/src/models/global.js').default) });
app.model({ namespace: 'link', ...(require('/Users/test/Documents/workspace/blog/blog-react-admin/src/models/link.js').default) });
app.model({ namespace: 'list', ...(require('/Users/test/Documents/workspace/blog/blog-react-admin/src/models/list.js').default) });
app.model({ namespace: 'login', ...(require('/Users/test/Documents/workspace/blog/blog-react-admin/src/models/login.js').default) });
app.model({ namespace: 'message', ...(require('/Users/test/Documents/workspace/blog/blog-react-admin/src/models/message.js').default) });
app.model({ namespace: 'otherUser', ...(require('/Users/test/Documents/workspace/blog/blog-react-admin/src/models/otherUser.js').default) });
app.model({ namespace: 'project', ...(require('/Users/test/Documents/workspace/blog/blog-react-admin/src/models/project.js').default) });
app.model({ namespace: 'setting', ...(require('/Users/test/Documents/workspace/blog/blog-react-admin/src/models/setting.js').default) });
app.model({ namespace: 'tag', ...(require('/Users/test/Documents/workspace/blog/blog-react-admin/src/models/tag.js').default) });
app.model({ namespace: 'timeAxis', ...(require('/Users/test/Documents/workspace/blog/blog-react-admin/src/models/timeAxis.js').default) });
app.model({ namespace: 'user', ...(require('/Users/test/Documents/workspace/blog/blog-react-admin/src/models/user.js').default) });
  return app;
}

export function getApp() {
  return app;
}

export class _DvaContainer extends Component {
  render() {
    const app = getApp();
    app.router(() => this.props.children);
    return app.start()();
  }
}
