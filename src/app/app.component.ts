import { Component } from '@angular/core';
import { APP_SHELL_DIRECTIVES } from '@angular/app-shell';
import { Observable } from 'rxjs/Observable';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-root',
  template: `
  <h1>
    {{title}}
  </h1>
  <div *shellNoRender>
    <ul>
      <li *ngFor="let item of list | async">
        {{item}}
      </li>
    </ul>
  </div>
  `,
  styles: [],
  directives: [APP_SHELL_DIRECTIVES]
})
export class AppComponent {
  title = 'app works!';
  list: Observable<any[]>;
  constructor(af: AngularFire) {
    this.list = af.database.list('/items');
  }
}
