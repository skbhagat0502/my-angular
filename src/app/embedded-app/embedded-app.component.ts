import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-embedded-container',
  standalone: true,
  templateUrl: './embedded-app.component.html',
  styleUrls: ['./embedded-app.component.css'],
})
export class EmbeddedAppComponent implements AfterViewInit {
  constructor() {}
  @ViewChild('embeddedAppContainer', { static: false })
  embeddedAppContainer!: ElementRef;

  ngAfterViewInit(): void {
    const script = document.createElement('script');
    script.src = '../../../embedded-app/browser/main-UNJYKLFD.js';
    this.embeddedAppContainer.nativeElement.appendChild(script);
  }
}
