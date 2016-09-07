import 'bootstrap-sass';
import App from './lib/app';

import createContext from './context';
import collectionsMiddleware from '../lib/middlewares/collections';
import layoutsMiddleware from './lib/middlewares/layouts';
import reduxMiddleware from './lib/middlewares/redux';
import configMiddleware from '../lib/middlewares/configs';

import coreModule from './';
import postsModule from 'maodou/posts/client';
import wechatModule from 'maodou/wechat/client';

import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router'

const context = createContext();
const app = new App(context);

app.loadMiddlewares([
  collectionsMiddleware(),
  reduxMiddleware({}),
  configMiddleware
]);

app.loadModule(coreModule);
app.loadModule(postsModule);
app.loadModule(wechatModule);

app.init();

render(<Router history={browserHistory} routes={app.routes} />, document.getElementById('body'));
