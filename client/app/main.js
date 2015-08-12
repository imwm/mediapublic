import Backbone from 'backbone';

import Application from './application/application';
import IndexRouter from './index/router';
import OrganizationRouter from './organizations/router';
import config from './config.json';
import Header from './header/view';

// Global namespace
window.app = new Application();

app.config = config;

app.indexRouter = new IndexRouter({
  container: app.layout.content
});

app.organizationRouter = new OrganizationRouter({
  container: app.layout.content
});

app.layout.header.show(new Header());

// Navigate to the current url
Backbone.history.start();
