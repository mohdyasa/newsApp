import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PagerService } from './_services';
import { HttpModule } from '@angular/http';
import { SourceComponent } from './source/source.component';
import { WorldComponent } from './world/world.component';
import { GenrealComponent } from './source/genreal/genreal.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'source', component: SourceComponent },
    { path: 'world', component: WorldComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SourceComponent,
        WorldComponent,
        GenrealComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        PagerService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
