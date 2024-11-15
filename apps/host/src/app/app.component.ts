import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {init, loadRemote} from '@module-federation/enhanced/runtime';

init({
  name: '@module-federation-examples/host',
  remotes: [
    {
      name: 'shop',
      entry: 'http://localhost:4201/remoteEntry.js',
    },
  ],
});
loadRemote('shop/Module');

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'app-root',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'host';
}
