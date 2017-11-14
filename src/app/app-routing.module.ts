import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeattleComponent } from './seattle/seattle.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DcComponent } from './dc/dc.component';


const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/sanjose' },
    {path: 'sanjose', component: SanjoseComponent },
    {path: 'seattle', component: SeattleComponent },
    {path: 'burbank', component: BurbankComponent },
    {path: 'dallas', component: DallasComponent },
    {path: 'dc', component: DcComponent },
    {path: 'chicago', component: ChicagoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
