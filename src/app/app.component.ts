import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmbeddedAppComponent } from './embedded-app/embedded-app.component'; // Adjust the path accordingly

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmbeddedAppComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Corrected to styleUrls
})
export class AppComponent {
  title = 'my-angular';
}
