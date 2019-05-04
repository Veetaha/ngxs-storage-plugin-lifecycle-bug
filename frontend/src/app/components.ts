import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
    <h1>App Component</h1><br>
    -------------------------
    <app-feature></app-feature>
    -------------------------
    `
})
export class AppComponent { }

@Component({
    selector: 'app-feature',
    template: '<h2>Feature component</h2>'
})
export class FeatureComponent { }