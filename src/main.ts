import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}


const store = window['store'];
store.subscribe(() => {
  const loadState = store.getState().load;

  if (loadState.script === 'angular' && loadState.completed) {
    platformBrowserDynamic().bootstrapModule(AppModule)
      .catch(err => console.log(err));
  }
});
