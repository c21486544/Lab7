import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';


// Bootstrap the application with routing
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)] // Provide the routing configuration
}).catch(err => console.error(err));
