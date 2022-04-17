import app from 'flarum/admin/app';
import NoticePage from './NoticePage'

app.initializers.add('andyli0123/flarum-lang', (app) => {

  // Register extension settings page
  app.extensionData
  .for('andyli0123-flarum-lang')
  .registerPage(NoticePage);

});
