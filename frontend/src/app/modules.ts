import { NgModule                } from '@angular/core';
import { BrowserModule           } from '@angular/platform-browser';
import { NgxsModule              } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';

import { FeatureState } from './states';
import { AppComponent, FeatureComponent } from './components';


@NgModule({
    declarations: [],
    imports: [
        NgxsModule.forRoot([], { developmentMode: true }),
        NgxsStoragePluginModule.forRoot(), // comment out this line and bug disappears
    ],
    exports: [
        BrowserModule, 
        NgxsModule
    ]
})
class CommonModule { }


@NgModule({
    imports: [
        CommonModule,
        NgxsModule.forFeature([FeatureState])
    ],
    declarations: [FeatureComponent],
    exports:      [FeatureComponent]
})
export class FeatureModule {}

@NgModule({
    imports:      [FeatureModule],
    declarations: [AppComponent],
    bootstrap:    [AppComponent]
})
export class AppModule { }
