import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { APP_SHELL_RUNTIME_PROVIDERS } from '@angular/app-shell';
import { defaultFirebase, FIREBASE_PROVIDERS } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  APP_SHELL_RUNTIME_PROVIDERS,
  FIREBASE_PROVIDERS,
  defaultFirebase({
    apiKey: "AIzaSyBVSy3YpkVGiKXbbxeK0qBnu3-MNZ9UIjA",
    authDomain: "angularfire2-test.firebaseapp.com",
    databaseURL: "https://angularfire2-test.firebaseio.com",
    storageBucket: "angularfire2-test.appspot.com",
  })
]);
