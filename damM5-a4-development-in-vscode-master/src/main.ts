import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import {bird} from './app/app.bird';
const birds = new bird();
  birds.Birdname = "Alfea";
  birds.Wingspan = "Hadas";
  birds.eggsize = 10;
  console.log(birds);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
