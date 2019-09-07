import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { BlogstoreServiceProvider } from './components/blogstore-service-context';

import App from './components/app';

import store from './store';

import BlogService from './services/blog-service';

const blogService = new BlogService();

ReactDOM.render(
  <Provider store={store}>
    <BlogstoreServiceProvider value={blogService}>
      <App />
    </BlogstoreServiceProvider>
  </Provider>,
  document.getElementById('root'),
);
